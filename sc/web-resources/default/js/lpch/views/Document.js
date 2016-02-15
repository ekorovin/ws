
lpch.Document = lpch.BaseView.extend({
	
	modelClass: lpch.DocumentModel,
	
	initialize: function() {
		var _this = this;
		this.setElement(document);

		// detect browser and device
		var ua = navigator.userAgent.toLowerCase();
		if(ua.match(/iphone/i) || ua.match(/ipad/i)){
			jQuery('html').addClass('ios');
		}
		if((/android/).test(ua)){
			jQuery('html').addClass('android');
		}
		if(ua.match(/os 6/i)){
			jQuery('html').addClass('ios6');
		}
		if (ua.indexOf("msie 8") != -1) {
			$("html").addClass("ie8");
		}
		if (ua.indexOf("msie") != -1) {
			$("html").addClass("ie");
		} else {
			if((/chrome/).test(ua)){
				jQuery('html').addClass('chrome');
			} else {
				if((/firefox/).test(ua)){
					jQuery('html').addClass('firefox');
				} else {
					if((/safari/).test(ua)){
						jQuery('html').addClass('safari');
					}
				}
			}	
		}

		$('.ls-canvas').wrap('<div class="wrapper" />');
	},
	
	initializeComponents: function() {
		// scope reference
		var _this = this;

		this.$el.find('input, textarea').placeholder();
		
		// for ie8, manipulate the youtube urls to use the old embed code
		if ($('html').hasClass('ie8')) {
			this.$el.find('.youtube').each(function() {
				var url = $(this).attr('href');
				$(this).attr('href', url.replace('/embed/', '/v/'));
			});
		}
		
		// Colorbox initialization
		this.$el.find('.youtube')
			.click(function(e) {
				_this.trackEvent($(this).attr('title'));
			})
			.colorbox({
				iframe:true, 
				innerWidth:620,
				innerHeight:404,
				fixed: true,
				onComplete: function(){
					var orientation = module.view.getCurrentOrientation();
					if(orientation == 'smartphone') {
						var w = module.view.getViewportWidth()-40;
						var h = (module.view.getViewportWidth()-40) * 0.6511612;
						
						$.colorbox.resize({
							innerWidth: w,
							innerHeight: h
						});
					}
				}
			});
		
		// on window resize
		$(window).resize(function() {
			_this.model.set('currentWidth', _this.getViewportWidth());
			_this.model.set('currentHeight', _this.getViewportHeight());
		});

		this.model.on('change:currentWidth', this.handleViewportChange, this);
		this.model.on('change:currentHeight', this.handleViewportChange, this);
		this.model.on('change:currentLayout', this.handleLayoutChange, this);
		
		this.model.set('currentWidth', this.getViewportWidth());
		this.model.set('currentHeight', this.getViewportHeight());
		
		try {
			addthis.init();
		} catch (error) {
			console.log(error.message);
		}
		
		// trigger
		$(window).trigger('initializeComponents');
	},
	
	getViewportWidth: function() {
		var viewPortWidth = $(window).innerWidth();

		/**
		// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
		if (typeof window.innerWidth != 'undefined') {
			viewPortWidth = window.innerWidth;
		}

		// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
		else if (typeof document.documentElement != 'undefined'
		&& typeof document.documentElement.clientWidth !=
		'undefined' && document.documentElement.clientWidth != 0) {
			viewPortWidth = document.documentElement.clientWidth;
		}

		 // older versions of IE
		else {
			viewPortWidth = document.getElementsByTagName('body')[0].clientWidth;
		}
		*/

		return viewPortWidth;
	},

	getViewportHeight: function() {
		var viewPortHeight = $(window).innerHeight();

		/**
		// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
		if (typeof window.innerHeight != 'undefined') {
			viewPortHeight = window.innerHeight;
		}

		// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
		else if (typeof document.documentElement != 'undefined'
		&& typeof document.documentElement.clientHeight !=
		'undefined' && document.documentElement.clientHeight != 0) {
			viewPortHeight = document.documentElement.clientHeight;
		}

		// older versions of IE
		else {
			viewPortHeight = document.getElementsByTagName('body')[0].clientHeight;
		}
		*/
		return viewPortHeight;
	},
	
	getCurrentLayout: function() {
		return this.model.get('currentLayout');
	},

	getCurrentOrientation: function() {
		return this.model.get('currentOrientation');
	},
	
	getParameterByName: function(name) {
		name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);
		return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	},
	
	handleViewportChange: function(model) {
		module.trigger('viewportChange', this.model.get('currentWidth'), this.model.get('currentHeight'));
	},

	handleLayoutChange: function(model, layout) {
		module.trigger('layoutChange', layout);
		
		// Colorbox resize handler
		var orientation = layout.get('orientation');
		if(orientation == 'smartphone') {
			var w = module.view.getViewportWidth()-40;
			var h = (module.view.getViewportWidth()-40) * 0.6511612;
			
			$.colorbox.resize({
				innerWidth: w,
				innerHeight: h
			});
		} else {
			$.colorbox.resize({			
				innerWidth:620,
				innerHeight: 404
			});
		}
	},
	
	/**
	 * 
	 * @param label			Button label
	 * @param action		Optional: Click action
	 * @param category		Optional: Click category
	 */
	trackEvent: function(label, action, category) {
		if (category == null || category == '') {
			category = $('.nav-item.current .dropdown-btn').text();
			if (category == '') category = "Marketing";
		}
		if (action == null || action == '') {
			action = document.title;
		}
		console.log('send', 'event', category, action, label);
		try {
			ga('send', 'event', category, action, label);
		} catch (error) {
			console.log(error.message);
		}
	}
	
});