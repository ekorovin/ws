/**
 * Calendar:  Implementation
 * Description: An extension of the lpch.BaseView object
 *        Allows for declaration of interactivity for Feature components
 */
lpch.Calendar = lpch.BaseView.extend({

  lang: null,
  jsonObj: {},

  initialize: function() {
    // Self-reference for scoping
    var _this = this;

    // this.el    All views have a DOM element at all times
    // this.$el   A cached jQuery object for the view's element
    //        $el.find(selector) to traverse the object

    _this.$el.find('.section-navigation a').bind('click', function(e){
    	e.preventDefault();
    	_this.filterEvents(this);
    	
    	var orientation = module.view.getCurrentOrientation(); 
		if (orientation == 'smartphone') {
	    	_this.$el.find('.section-navigation h2').text($(this).text());
	    	// trigger an event that SectionNavigation handles to close the nav
	    	$(this).trigger("itemClicked");
		}
    });

    // language detection, default is 'en' (English)
    var url = window.location.pathname.split("/");
    _this.lang = 'en';
    // if 'es' is present, set to Spanish
    // if 'en' or blank, do nothing
    if ( url[1] === 'es' ) _this.lang = 'es';
   
   $.ajax({
      type: "GET",
      //url: "/web-resources/default/data/certaindemo.xml",
      url: "/config-public/events/index.xml",
      dataType: "xml",
      success: function(data) {
        _this.jsonObj = _this.xmlToJson(data);
        _this.parseData('ALL');
      }
    });

    // invoke the super method
    lpch.BaseView.prototype.initialize.call(this);
  },

  parseData: function(cat) {
    var _this = this;
    if (cat === 'ALL') cat = '';
    var html = '',
        counter = 0,
        duplicates = [],
        classes = [];
    
    _this.$el.find('.noevents').hide();
    $.each(_this.jsonObj.result.dataset.record, function (key, val) {
      // list only active/live events
      if (val.txtEvtEstName /* === 'Live' */) {
        
        // fix for indexOf in IE8
        if (!Array.indexOf){
          Array.prototype.indexOf = function(obj){
           for(var i=0; i<this.length; i++){
            if(this[i]==obj){
             return i;
            }
           }
           return -1;
          }
        }
        // filter by category
        if (val.txtEvtAnsField02['#text'] && val.txtEvtAnsField02['#text'].indexOf(cat) !== -1) {
          // filter out duplicate classes
          if (classes.indexOf(val.txtEvtAnsField01['#text']) === -1) {
            classes.push(val.txtEvtAnsField01['#text']);
            html += '<li class="event evt_'+val.txtEvtCode['#text']+'" data-rel="'+val.txtEvtAnsField01['#text']+'">';
            html += '<div class="event-name">';
            html += '<a href="/'+_this.lang+'/classes/class-detail.page?evt='+val.txtEvtAnsField01['#text']+'">';
            // check for Spanish
            if (_this.lang === 'es') {
              // if Spanish field isn't present display English
              if(typeof val.txtEvtAnsField05['#text'] !== 'undefined') {
                html += val.txtEvtAnsField05['#text'];
              } else {
                html += val.txtEvtName['#text'];
              }
            } else {
              html += val.txtEvtName['#text'];
            }
            html += '</a>';
            html += '</div>';
            html += '<div class="event-description">';
            // check for Spanish
            if (_this.lang === 'es') {
              // if Spanish field isn't present display English
              if(typeof val.txtEvtAnsField06['#text'] !== 'undefined'){
                html += val.txtEvtAnsField06['#text'];
              } else {
            	  if (val.txtEvtNotes['#text'] !== 'undefined') {
                	  html += val.txtEvtNotes['#text'];
                  }
              }
            } else {
              if (val.txtEvtNotes['#text'] !== 'undefined') {
            	  html += val.txtEvtNotes['#text'];
              }
            }
            html += '</div>';
            html += '<div class="event-data">';
            //html += '<span class="frequency">Multiple Sessions</span>';
            html += '<span class="time">'+val.dteEvtStartTime['#text']+' - '+val.dteEvtEndTime['#text']+'</span>';
            if (Number(val.txtEvtAnsField08['#text']) == 0) {
            	html += '<span class="time">Free</span>';
            } else {
            	html += '<span class="time">$'+val.txtEvtAnsField08['#text']+'</span>';
            }
            html += '<span class="details"><a href="/'+_this.lang+'/classes/class-detail.page?evt='+val.txtEvtAnsField01['#text']+'">Details</a></span>';
            html += '</div></li>';
            counter++;
          } else {
        	  // add duplicates to an array to keep track
        	  if (duplicates.indexOf(val.txtEvtAnsField01['#text']) === -1) {
                  duplicates.push(val.txtEvtAnsField01['#text']);
        	  }
          }
        }
        
      }
    });
    
    // if no events are present, show 'no event' message
    if (counter === 0) {
      _this.$el.find('.noevents').show();
    } else {
      _this.$el.find('.eventlist').html(html);
    }
    
    // for each class
    $.each(classes, function(index, value) {
    	// if the class does not exist in duplicates
    	if (duplicates.indexOf(value) === -1) {
    		// remove the "Multiple Sessions" span
    		_this.$el.find('.eventlist .event[data-rel="'+value+'"] span.frequency').remove();
    	}
     });
  },

  filterEvents: function (evt) {
    var _this = this;
    var filter = $(evt).attr('class');
    if ( !$(evt).parent().hasClass('active') ) {
      _this.$el.find('.active').removeClass('active');
      _this.$el.find(evt).parent().addClass('active');
      _this.$el.find('.eventlist li').addClass('previous');
      _this.$el.find('.events').fadeOut(function(){
        _this.parseData(filter);
        _this.$el.find('.eventlist li.previous').remove();
        _this.$el.find('.events').fadeIn();
      });
    }
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
 * Calendar:  Initialization
 * Description: Listen for 'initializeComponents' triggered from Document.js
 *        Then find all '.calendar' classes and initialize lpch.Calendar
 */
$(window).bind('initializeComponents', function() {
	$('.calendar.list').each(function(index) {
		new lpch.Calendar({
			el: this
		});
	});
});