/**
 * MarketingSplash:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for MarketingSplash components
 */
lpch.MarketingSplash = lpch.BaseView.extend({
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		// if the element does not have the 'video-left-text-right',
		// associated with it then add class 'main' for JS parallax and bg img manipulation
		// that in smartphone view, the .main element does not hide its img element
		
		// check to see if this component contains a video
		if (this.$el.find('.mktgsplash-video').length == 0) {
			// if no video make sure the video class is not applied
			this.$el.removeClass('video-left-text-right');
		} else {
			// else make sure the video class is applied
			this.$el.addClass('video-left-text-right');
		}
		
		// if this element does not contain video, apply the 'main' class
		if ( !this.$el.hasClass('video-left-text-right') ) {
			this.$el.addClass('main');
		}
		
		// track events from anchor clicks
		this.$el.find("a").not(".youtube").click(function(event){
			module.view.trackEvent($(this).attr("title") || $(this).text() || $(this).find("img").first().attr("alt"));
		});
		
		this.$el.bind('inview', function (event, visible) {
			if (visible == true) {
				$(this).addClass("inview");
			} else {
				$(this).removeClass("inview");
			}
		});
		
		$(window).bind("scroll", function(event) {
			_this.move(module.view.getViewportHeight());
		});
		
		this.setHeight(module.view.getViewportWidth());
		this.move(module.view.getViewportHeight());
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	}, 
	
	handleLayoutChange: function(layout) {
		if (layout.get('orientation') == "tablet") {
			this.$el.children('img').css({'top': 0});
		} else {
			this.$el.children('img').css({'top': 0});
		}
	},
	
	handleViewportChange: function(width, height) {
		this.setHeight(width);
		this.move(height);
	},
	
	setHeight: function(width) {
		var orientation = module.view.getCurrentOrientation();
		if (orientation != "desktop") {
			
			if (orientation == "smartphone") {
				if (!this.$el.hasClass("main")) {
					this.$el.css("height", "auto");
					return;
				}
			}
			
			var w = (400 * width) / 980;
			this.$el.css("height", w);
		}
		
		
	},
	
	repositionBackground: function(wh, pos, adjuster, inertia) {
		var y = (-((wh + pos) - adjuster) * inertia);
		if (y > 0) y = 0;
		return y  + "px";
	},
	
	move: function(height) {
		var orientation = module.view.getCurrentOrientation();
		if (!Modernizr.touch && orientation == 'desktop') {
			if (this.$el.hasClass("inview")) {
				var top = $(window).scrollTop();
				if (this.$el.hasClass("main")) {
					this.$el.children('img').css({'top': this.repositionBackground(height, top, 980, 0.3)});
				} else {
					this.$el.children('img').css({'top': this.repositionBackground(height, top, 980, 0.12)});
				}
			}
		}
	}
	 
});

/**
 * MarketingSplash:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.marketing-splash' classes and initialize lpch.MarketingSplash*/
 
$(window).bind('initializeComponents', function() {
	$('.mktgsplash-component').each(function(index) {
		new lpch.MarketingSplash({
	        el: this
	    });
	});
});