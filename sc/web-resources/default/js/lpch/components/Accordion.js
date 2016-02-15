/**
 * Accordion:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for Accordion components
 */

lpch.Accordion = lpch.BaseView.extend({
	
	initialize: function() {
		// Self-reference for scoping
		
		var _this = this;

		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		// Help for IE8
		this.$el.find('.mktgaccord-item-main-content ul:first-of-type, .mktgaccord-item-sidebar ul:first-of-type').addClass('first-of-type');
		this.$el.find('.mktgaccord-item-main-content .p50:first-of-type').addClass('first-of-type');
		// End Help for IE8
		
		this.$el.find('.accordion-nav li a').first().addClass('active').next().addClass('open');
		this.$el.find('.mktgaccord-item-container div:first-child').addClass('open');
	
		this.$el.find('.accordion-btn').click(function(e) {
	
			if($(this).hasClass('no-action')) {
				return false;
			}
			e.preventDefault();
			if (!$(this).hasClass('active')) {
				_this.$el.find('.open').removeClass('open');
				_this.$el.find( '#' + $(this).attr('data-rel') ).addClass('open');
				
				_this.$el.find('.active').removeClass('active');
				$(this).addClass('active');
				
				// track events for nav-item clicks
				module.view.trackEvent($(this).attr('title') || $(this).text());
			}
		});
		
		var $firstAccordion = $('.mktgaccord-component').first();
		var $lastAccordion = $('.mktgaccord-component').last();
		
		$firstAccordion.find(".accordion-title .arrow").addClass("bottom");
		$lastAccordion.find(".accordion-title .arrow").addClass("top");
		$lastAccordion.addClass("last-child");
		
		this.$el.find('.bottom').click(function(){
			$('html, body').stop().animate({
				scrollTop: $lastAccordion.offset().top
			}, 600);					
		});
		this.$el.find('.top').click(function(){
			$('html, body').stop().animate({
				scrollTop: $firstAccordion.offset().top - $firstAccordion.find(".tabs-title").height() - 15
			}, 600);					
		});
		
		// track events from anchor clicks
		this.$el.find(".mktgaccord-item a").not(".youtube").click(function(event){
			module.view.trackEvent($(this).attr("title") || $(this).text() || $(this).find("img").first().attr("alt"));
		});

		var orientation = module.view.getCurrentOrientation();
		if (orientation == 'smartphone') {
			this.$el.find('.accordion-title').unbind('click', this.toggleAccordion).bind('click', this.toggleAccordion).removeClass('down').addClass('up');
			this.$el.find('.accordion-title').next().hide();
			this.setHeightForSubNav();

			this.$el.find('.bottom').unbind('click');
			this.$el.find('.top').unbind('click');
		} 
		

		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	}, 
	
	handleLayoutChange: function(layout) {
		var orientation = layout.get('orientation');
		if(orientation == 'smartphone') {
			this.$el.find('.accordion-title').unbind('click', this.toggleAccordion).bind('click', this.toggleAccordion);
			this.$el.find('.accordion-title').removeClass('up').addClass('down');
			this.$el.find('.bottom').unbind('click');
			this.$el.find('.top').unbind('click');

		} else {
			this.$el.find('.accordion-title').unbind('click',this.toggleAccordion);
			this.$el.find('.accordion-wrapper').removeAttr("style");
			this.$('.accordion-item a').removeAttr('style');
		}
	},
	
	handleViewportChange: function(width, height) {
		var orientation = module.view.getCurrentOrientation();
		if (orientation == 'smartphone') {
			this.setHeightForSubNav();
		}
	},

	toggleAccordion: function() {
		var $title = $(this);
		if ($title.hasClass('down')){
			$title.removeClass('down').addClass('up');
		} else {
			$title.removeClass('up').addClass('down');
		}
		$title.next().toggle();
	},
	setHeightForSubNav: function() {
		var orientation = module.view.getCurrentOrientation();

		if(orientation == 'smartphone') {
			this.$('.accordion-item a').removeAttr('style');
			var maxHeight = this.getMaxHeightForSubNav();
			this.$('.accordion-item a').height(maxHeight);
		}
	},
	getMaxHeightForSubNav: function() {
		var maxHeight = this.$('.accordion-item a').eq(0).height();
		this.$('.accordion-item a').each(function(i) {
			if($(this).height() > maxHeight)
				maxHeight = $(this).height();
		});
		return maxHeight;
	}

});
/**
 * Accordion:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.accordion' classes and initialize lpch.Accordion
 */

$(window).bind('initializeComponents', function() {
	
	$('.mktgaccord-component').each(function(index) {
		new lpch.Accordion({
	        el: this
	    });
	});
});


