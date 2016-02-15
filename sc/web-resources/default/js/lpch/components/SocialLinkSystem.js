lpch.SocialLinkSystem = lpch.BaseView.extend({
	
	NAME: "Social",
	
	initialize: function() {
		var _this = this;
		this.bindSocialRelatedLocation();
		
		// tracking some social widget clicks
		$('.social-newletter a, .social-sharing a').click(function(event) {
			module.view.trackEvent($(this).attr('title') || $(this).text());
		});
		
		lpch.BaseView.prototype.initialize.call(this);
	},

	bindSocialRelatedLocation: function () {
		var $html = $('html, body'),
			$win = $(window),
			scrollTop = 0;

		$('.social-related-locations-wrap').each(function () {
			var $wrap = $(this),
				items = $wrap.find('.location-btn'),
				curIdx = items.find('.active').index() || 0;

			$.each(items, function (idx) {
				var $this = $(this),					
					rel = $this.attr('data-rel');

				$.event.add(this, 'click', itemClick($this, rel, idx));
			});
			function itemClick($link, rel, idx){
				return function (e) {
					e.preventDefault();
					items.removeClass("active");
					$link.addClass('active');

					$html.stop().animate({
						scrollTop: $('#' + rel).offset().top - 30
					}, 500);
				}
			}
			$('.btn-back-to-top').click(function (e) {
				e.preventDefault();

				$html.stop().animate({
					scrollTop: 0
				}, 500);
			});

			$win.scroll(function (e){
				scrollTop = $win.scrollTop();

				var fscrollTop = $('#location-facebook').offset().top,
					yscrollTop = $('#location-youtube').offset().top,
					bscrollTop = $('#location-blog').offset().top,
					jscrollTop = $('#location-join-us-mobile').offset().top;

				if (scrollTop <= fscrollTop){
					items.removeClass("active");
					items.eq(0).addClass('active');
				}	else if (scrollTop <= yscrollTop){
					items.removeClass("active");
					items.eq(1).addClass('active');
				} else if (scrollTop <= bscrollTop){
					items.removeClass("active");
					items.eq(2).addClass('active');
				} else if (scrollTop <= jscrollTop){
					items.removeClass("active");
					items.eq(3).addClass('active');
				}
			});
		});
	},

	handleLayoutChange: function(layout) {
		
	},

	handleViewportChange: function(width, height) {

	}
});

$(window).bind('initializeComponents', function() {		
	new lpch.SocialLinkSystem({
		el: this
	});
});

