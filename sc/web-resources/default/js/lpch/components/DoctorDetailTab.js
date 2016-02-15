/**
 * DoctorDetailTab:		Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the site header
 */
lpch.DoctorDetailTab = lpch.BaseView.extend({
	
	NAME: "Doctor Profile",
	pictureProfile: null,
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		var orientation = module.view.getCurrentOrientation();		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		_this.$('#doctor-detail-tab a').click(function(event) {
			event.preventDefault();
			_this.showTab(event);
		});

		if(orientation != "smartphone"){
			$('.pull-right').find('.health-wellness-topic').prependTo('.health-wellness-topic-prepend');
		}
		else {
			$('.health-wellness-topic-prepend').find('.health-wellness-topic').appendTo('.health-wellness-topic-append');	
		}
		_this.showAutoTab();

		_this.$('.introduction-sort .read-more').click(this.showIntroductionFull);
		
		/* Add tracking events */
		this.$el.find('.tab-content a').click(function(event) {
			module.view.trackEvent($(this).attr('title') || $(this).text());
		});

		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	showTab: function(e) {		
		var thisTab = $(e.currentTarget);
		module.view.trackEvent($(thisTab).find('.inner').text());
		thisTab.tab('show');
	},
	handleLayoutChange: function(layout) {
		var device = layout.get('orientation');
		var _this = this;
		if(device != "smartphone"){
			$('.pull-right').find('.health-wellness-topic').prependTo('.health-wellness-topic-prepend');
			_this.$('.introduction-sort .read-more').trigger('click');
		}
		else {
			$('.health-wellness-topic-prepend').find('.health-wellness-topic').appendTo('.health-wellness-topic-append');

			_this.hideIntroductionFull();
		}

		_this.showAutoTab();

	},	
	showAutoTab: function() {
		var objLi = this.$el.find('.doctor-detail-tab-nav li');
		var lenTab = objLi.length;
		var singleTabSize = 100/lenTab;
		objLi.css('width',singleTabSize+'%');
		
	},
	showIntroductionFull: function(e){
		e.preventDefault();
		$('.introduction-sort').hide();
		$('.introduction-full').show();
	},
	hideIntroductionFull: function(e){
		$('.introduction-sort').show();
		$('.introduction-full').hide();
	},
	handleViewportChange: function(width, height) {}
	
});

/**
 * DoctorDetailTab:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.hero-banner' classes and initialize lpch.DoctorDetailTab
 */
$(window).bind('initializeComponents', function() {
	$('.doctor-detail-tab').each(function(index) {
		new lpch.DoctorDetailTab({
	        el: this
	    });
	});
});