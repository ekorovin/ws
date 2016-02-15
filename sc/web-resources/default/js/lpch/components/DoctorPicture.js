/**
 * DoctorPicture:		Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the site header
 */
lpch.DoctorPicture = lpch.BaseView.extend({
	
	pictureProfile: null,
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		var orientation = module.view.getCurrentOrientation();	
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		//TODO: Init BxSlider for DoctorPicture here
		if(orientation == 'smartphone') {
			_this.initPictureProfilePhone();
		}
		else {
			_this.initPictureProfileDesktop();
		}
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	
	handleLayoutChange: function(layout) {
		var _this = this;
		var orientation = layout.get('orientation');

		if(orientation != 'smartphone') {
			_this.reInitPictureProfileDesktop();
		}
		
	},

	// init picture profile slider for mobile
	initPictureProfilePhone: function(){
		this.pictureProfile = this.$el.find('#picture-profile').bxSlider({
			auto: false,
			minSlides: 1,
			maxSlides: 1,
			controls: true,
			useCSS: false,
			pager: false,
			startSlide: 0,
			hideControlOnEnd: true,
			infiniteLoop: false,
			pause: 6000,
			autoHover: true,
			mode: 'fade',
			onSliderLoad: function(){
			}
		});
	},
	// init picture profile slider for Tablet & desktop
	initPictureProfileDesktop: function(){

		var pictureProfile = this.$el.find('#picture-profile');

		var bxPager = $('<div class="thumb-picture-profile" id="bx-pager-custom"></div>');

		bxPager.insertAfter(pictureProfile);

		$('>li',pictureProfile).each(function(){
			var index = $(this).index();
			var imgSrc = $(this).attr('data-img');
			var li = $('<a class="item-thumb" data-slide-index="'+index+'" href=""><img src="'+imgSrc+'" alt="Doctor Picture" /></a>')
			li.appendTo(bxPager);
		})

		this.pictureProfile = this.$el.find('#picture-profile').bxSlider({
			pagerCustom: '#bx-pager-custom'
		});
		
		// track clicks on thumbnail imgs
		this.$el.find(".item-thumb").click(function(event) {
			module.view.trackEvent($(this).attr('title') || $(this).text() || $(this).find('img').first().attr('alt'));
		});
	},

	reInitPictureProfileDesktop: function(){

		$('#bx-pager-custom').remove();
		this.pictureProfile.destroySlider();
		this.initPictureProfileDesktop();

	},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * DoctorPicture:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.hero-banner' classes and initialize lpch.DoctorPicture
 */
$(window).bind('initializeComponents', function() {
	$('.doctor-picture').each(function(index) {
		new lpch.DoctorPicture({
	        el: this
	    });
	});
});