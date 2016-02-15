/**
 * Event Detail:  Implementation
 * Description: An extension of the lpch.BaseView object
 *        Allows for declaration of interactivity for Feature components
 */
lpch.EventDetail = lpch.BaseView.extend({

  lang: null,
  jsonObj: {},
  
  initialize: function() {
    // Self-reference for scoping
    var _this = this;

    // this.el    All views have a DOM element at all times
    // this.$el   A cached jQuery object for the view's element
    //        $el.find(selector) to traverse the object

    // language detection, default is en (English)
    var url = window.location.pathname.split("/");
    var evt = location.search.replace('?', '').split('=');
    evt = evt[1];
    _this.lang = 'en';
    // if 'es' is present, set to Spanish
    if ( url[1] === 'es' ) _this.lang = 'es';

    $.ajax({
      type: "GET",
      //url: "/web-resources/default/data/certaindemo.xml",
      url: "/config-public/events/index.xml",
      dataType: "xml",
      success: function(data) {
        _this.jsonObj = _this.xmlToJson(data);
        _this.parseData(evt);
      }
    });

    // invoke the super method
    lpch.BaseView.prototype.initialize.call(this);
  },
  
  initMap: function(loc) {
    var geocoder = null,
        map = null;
    
    geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': loc}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        var options = {
          zoom: 14,
          center: results[0].geometry.location,
          disableDefaultUI: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map-canvas"), options);
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
      }
    });
  },

  parseData: function(evt) {
    var _this = this;
    if (evt === 'ALL') evt = '';
    var html = '',
        detail = false;

    $.each(_this.jsonObj.result.dataset.record, function (key, val) {
      // if event code is blank, do nothing
      if (typeof val.txtEvtAnsField01['#text'] !== 'undefined') {
        // list only active/live events
        if (val.txtEvtEstName /* === 'Live' */) {
        
          // fix for indexOf in IE8
          if(!Array.indexOf){
            Array.prototype.indexOf = function(obj){
             for(var i=0; i<this.length; i++){
              if(this[i]==obj){
               return i;
              }
             }
             return -1;
            }
          }
        
          // get events matching event code
          if (val.txtEvtAnsField01['#text'].indexOf(evt) !== -1) {
            // check if image path is present, if not display default
            if(typeof val.txtEvtAnsField04['#text'] !== 'undefined'){
              _this.$el.find('.event-image img').attr('src', val.txtEvtAnsField04['#text']);
            } else {
              _this.$el.find('.event-image img').attr('src', '/web-resources/default/img/event-img-BFS.jpg');
            }
                      
            // grab title and description from first event instance, disable for remaining events
            var loc;
            if (detail === false) {
              // get location for google maps
              loc = val.txtLocAdrLine1['#text']+'+'+val.txtLocAdrCity['#text']+',+'+val.txtLocAdrState['#text'];
              loc = loc.split(' ').join('+');
              _this.initMap(loc);
              
              _this.$el.find('.event-info, .event-info .event-description').addClass(val.txtEvtAnsField01['#text']);
              var evtTitle = val.txtEvtName['#text'];
              var evtDescription = val.txtEvtNotes['#text'];
              if (_this.lang === 'es') {
                // if Spanish field isn't present or empty display English
                if(typeof val.txtEvtAnsField05['#text'] !== 'undefined'){
                  evtTitle = val.txtEvtAnsField05['#text'];
                  evtDescription = val.txtEvtAnsField06['#text'];
                }
              }
              _this.$el.find('.event-info .event-title').html('<h2>'+evtTitle+'</h2>');
              _this.$el.find('.event-info .event-description').html(evtDescription);
              var address = '';
              address += '<strong>'+val.txtLocName['#text']+'</strong><br>';
              address += val.txtLocAdrLine1['#text']+'<br>';
              address += val.txtLocAdrCity['#text']+', '+val.txtLocAdrState['#text']+' '+val.txtLocAdrPostalCode['#text']+'<br>';
              address += '<div class="map-link"><a href="https://maps.google.com/maps?q='+loc+'" target="_blank">Maps &amp; directions...</a></div>';
              
              _this.$el.find('.event-info .event-location').append(address);
              detail = true;
            }
            html += '<div class="event e_'+val.evtEncodedId['#text']+'">';
            html += '<div class="event-date">';
            html += '<div class="event-day">'+val.dteEvtStartDate['#text']+'</div>';
            html += '<div class="event-time">'+val.dteEvtStartTime['#text']+' - '+val.dteEvtEndTime['#text']+'</div>';
            html += '</div>';
            html += '<div class="event-location">';
            html += '<div class="location-name">'+val.txtLocName['#text']+'</div>';
            html += '<div class="location-address">'+val.txtLocAdrLine1['#text']+'</div>';
            html += '<div class="location-city">'+val.txtLocAdrCity['#text']+', '+val.txtLocAdrState['#text']+' '+val.txtLocAdrPostalCode['#text']+'</div>';
            // update location link for individual events
            loc = val.txtLocAdrLine1['#text']+'+'+val.txtLocAdrCity['#text']+'+'+val.txtLocAdrState['#text']+'+'+val.txtLocAdrPostalCode['#text'];
            loc = loc.split(' ').join('+');
            html += '<div class="location-map"><a href="https://maps.google.com/maps?q='+loc+'" target="_blank">Maps &amp; directions...</a></div>';
            html += '</div>';
            html += '<div class="event-cost">';
            // calculate number of remaining seats
            var seats = val.txtEvtAnsField03['#text'] - val.intEvtNumberRegistered['#text'];
            var txtSeat = 'seats';
            if (seats === 1) txtSeat = 'seat';
            // if class is full, show message
            if (seats <= 0) {
              html += '<div class="event-price">CLASS<br>FILLED</div>';
              
            } else {
              html += '<div class="event-remaining">'+seats+' '+txtSeat+' remaining</div>';
              var price = '$'+val.txtEvtAnsField08['#text'];
              if (price === '$0') {
                price = 'Free';
              }
              html += '<div class="event-price">'+price+'</div>';
            }
            html += '</div>';
            if (val.txtEvtAnsField09['#text'] === undefined || val.txtEvtAnsField09['#text'] == '' || val.txtEvtAnsField09['#text'].toLowerCase() == 'yes') {
	            html += '<div class="event-register">';
	            // if seats are empty, display grey button
	            if (seats <= 0) {
	              html += '<div class="register-btn"><a href="#" class="btn disabled">Register</a></div>';
	            } else {
	              html += '<div class="register-btn"><a href="'+val.txtEvtPrimaryFormURL['#text']+'" class="btn">Register</a></div>';
	            }
	            html += '</div>';
            }
            html += '</div>';
          }
        }
      }

    });
    _this.$el.find('.eventlist').html(html);
  },

  xmlToJson: function(xml) {
    // Create the return object
    var obj = {};
  
    if (xml.nodeType === 1) { // element
      // do attributes
      if (xml.attributes.length > 0) {
      obj["@attributes"] = {};
        for (var j = 0; j < xml.attributes.length; j++) {
          var attribute = xml.attributes.item(j);
          obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType === 3) { // text
      obj = xml.nodeValue;
    }
  
    // do children
    if (xml.hasChildNodes()) {
      for(var i = 0; i < xml.childNodes.length; i++) {
        var item = xml.childNodes.item(i);
        var nodeName = item.nodeName;
        if (typeof(obj[nodeName]) === "undefined") {
          obj[nodeName] = this.xmlToJson(item);
        } else {
          if (typeof(obj[nodeName].push) === "undefined") {
            var old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(this.xmlToJson(item));
        }
      }
    }
    return obj;
  }

});

/**
 * Event Detail:  Initialization
 * Description: Load Google Maps API before initializing the page.
 */
$(window).bind('initializeComponents', function() {
	new lpch.EventDetail({
	    el: '.event-detail'
	  });
});