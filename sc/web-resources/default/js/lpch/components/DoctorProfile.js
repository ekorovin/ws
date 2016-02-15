/**
 * DoctorProfile:		Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the site header
 */
lpch.DoctorProfile = lpch.BaseView.extend({
	
	NAME: "Doctor Profile",
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		var orientation = module.view.getCurrentOrientation();		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		if(orientation == "desktop"){
			$('.span12').find('.related-locations').prependTo('.span8 .related-locations-wrap');
		} else {
			$('.span8').find('.related-locations').prependTo('.span12 .related-locations-wrap');
		}

		if(orientation == "tablet"){
			$('.span12').find('.doctor-profile-title').prependTo('.span8 .doctor-profile-title-wrap');
		} else {
			$('.span8').find('.doctor-profile-title').prependTo('.span12 .doctor-profile-title-wrap');
		}
		
		
		/* Add tracking events */
		// vcard, directions tracking
		this.$el.find('.list-link-top a, .arrow-add, .btn-make, .btn-directions').click(function(event) {
			module.view.trackEvent( $(this).attr('title') || $(this).text() );
		});
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	handleLayoutChange: function(layout) {
		if(orientation == "desktop"){
			$('.span12').find('.related-locations').prependTo('.span8 .related-locations-wrap');
		} else {
			$('.span8').find('.related-locations').prependTo('.span12 .related-locations-wrap');
		}

		if(orientation == "tablet"){
			$('.span12').find('.doctor-profile-title').prependTo('.span8 .doctor-profile-title-wrap');
		} else {
			$('.span8').find('.doctor-profile-title').prependTo('.span12 .doctor-profile-title-wrap');
		}
		$('.related-locations').each(function(index) {
			new lpch.Location({
		        el: this
		    });
		});
	},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * DoctorProfile:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.hero-banner' classes and initialize lpch.DoctorProfile
 */
$(window).bind('initializeComponents', function() {
	$('.doctor-profile').each(function(index) {
		new lpch.DoctorProfile({
	        el: this
	    });
	});

	
});