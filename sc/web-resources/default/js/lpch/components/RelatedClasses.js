/**
 * Related Classes:  Implementation
 * Description: An extension of the lpch.BaseView object
 *        Allows for declaration of interactivity for Feature components
 */
lpch.RelatedClasses = lpch.BaseView.extend({

  lang: null,
  jsonObj: {},

  initialize: function() {
    // Self-reference for scoping
    var _this = this;

    // this.el    All views have a DOM element at all times
    // this.$el   A cached jQuery object for the view's element
    //        $el.find(selector) to traverse the object
    
    var cat = this.$el.attr('data-rel');
    var limit = this.$el.attr('data-rel-limit');
    // set a default if parameter is not defined
    if (limit === '') limit = 4;

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
        _this.parseData(cat,limit);
      }
    });

    // invoke the super method
    lpch.BaseView.prototype.initialize.call(this);
  },

  parseData: function(cat,limit) {
    var _this = this;
    var html = '',
        counter = 0,
        classes = [];

    _this.$el.find('.noevents').hide();
    
    $.each(_this.jsonObj.result.dataset.record, function (key, val) {
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
      
        // filter by category
        if ( (val.txtLocCode['#text'] && val.txtLocCode['#text'].indexOf(cat) !== -1) || (val.txtEvtAnsField07['#text'] && val.txtEvtAnsField07['#text'].indexOf(cat) !== -1) ) {
          // filter out duplicate classes
          if (classes.indexOf(val.txtEvtAnsField01['#text']) === -1) {
            classes.push(val.txtEvtAnsField01['#text']);
            
            if (counter < limit) {
              html += '<div class="content-related-classes-wrap">';
              html += '<a href="/'+_this.lang+'/classes/class-detail.page?evt='+val.txtEvtAnsField01['#text']+'" class="link-related-classes">';
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
              html += '<div class="content-related-classes">';
              html += '<span class="next-class">Next Class:</span> ';
              html += val.dteEvtStartDate['#text']+'<br />';
              html += val.dteEvtStartTime['#text'];
              html += ' - ';
              html += val.dteEvtEndTime['#text'];
              html += '</div>';
              html += '</div>';
            }
            counter++;
          }
        }
      }
    });
    // if no events are present, show 'no event' message
    if (counter === 0) {
      _this.$el.find('.noevents').show();
    } else {
      _this.$el.find('.classlist').html(html);
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
 * RelatedClasses:  Initialization
 * Description: Listen for 'initializeComponents' triggered from Document.js
 *        Then find all '.related-classes' classes and initialize lpch.RelatedClasses
 */
$(window).bind('initializeComponents', function() {
	$('.related-classes.list').each(function(index) {
		new lpch.RelatedClasses({
			el: this
		});
	});
});