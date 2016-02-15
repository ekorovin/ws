//This js file used in service-index.html

lpch.ServiceIndex = lpch.BaseView.extend({

	initialize: function() {
		// Self-reference for scoping
		var _this = this;

		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		_this.initAlphabetNav();
		_this.$('.alphabet-list')
			.bind('touchstart', _this.navTouchStartHandler)
			.bind('touchmove', _this.navTouchMoveHandler)
			.bind('touchend', _this.navTouchEndHandler)
			.mouseover(_this.navTouchStartHandler)
			.mouseout(_this.navTouchEndHandler);
		_this.$('.alphabet-list').find('li a')
			.bind('click', _this, _this.navItemClickHandler)
			.bind('touchstart', _this.indexListItemTouchStartHandler)
			.bind('touchend', _this.indexListItemTouchEndHandler);
		_this.$('.service-list .icon.info').bind('click', _this, _this.showTooltipOnClick);
		_this.$('.service-item')
			.bind('mouseover', _this, _this.showTooltipOnHover)
			.bind('mouseout', _this, _this.closeTooltip)
			.bind('click', function(event) {
				module.view.trackEvent($(this).text());
			});

		_this.upToTop = _this.$('.up-to-top-wrap');
		_this.tooltip = _this.$('.tooltip-wrap');
		_this.tooltip.content = _this.tooltip.find('.tooltip-content');
		_this.tooltipArrow = _this.tooltip.find('.tooltip-arrow'),
		_this.tooltip.find('.close-tooltip')
			.bind('click', _this, _this.closeTooltip);

		_this.navHeightOnMobile = 0;
		_this.navHeightOnTablet = 0;
		_this.setInitNavHeight();
		_this.detectNavListStyle($(window).height());
		$(window).bind('scroll', _this, _this.windowScrollHandler);
		_this.upToTop.find('a.up-to-top').click(_this.scrollToTop);

		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	initAlphabetNav: function() {
		this.$('.alphabet-list li a').removeClass('empty');
		this.$('.alphabet-list li a').each(function() {
			var targetId = $(this).attr('href');
			if ($(targetId).length == 0)
				$(this).addClass('empty');
		});
	},
	navTouchMoveHandler: function(e) {
		e.preventDefault();
		var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
		curTouchX = touch.pageX;
		curTouchY = touch.pageY;
		$(this).find('li').each(function() {
			var item = $(this);
			var thisOffset = item.offset();
			if (curTouchY < (thisOffset.top + item.outerHeight()) && curTouchY > thisOffset.top) {
				item.find('a').trigger('click');
			}
		});
	},
	navTouchStartHandler: function(e) {
		var orientation = module.view.getCurrentOrientation();
		if (orientation == 'desktop') return;
		$(this).addClass('on-touch');
	},
	navTouchEndHandler: function(e) {
		var orientation = module.view.getCurrentOrientation();
		if (orientation == 'desktop') return;
		$(this).removeClass('on-touch');
	},
	navItemClickHandler: function(e) {

		if ($(this).hasClass('empty')) return false;
		
		var _view = e.data;
		var targetId = $(this).attr('href');
		var targetTop = $(targetId).offset().top - $('#header-wrapper').height();
		var orientation = module.view.getCurrentOrientation();
		module.view.trackEvent($(this).text());
		if (orientation == 'desktop') $('html, body').animate({
			'scrollTop': targetTop
		}, 400, 'swing');
		else $(window).scrollTop(targetTop);
		
		// if this object has focus
		if ($(this).is(':focus')) {
			// jump focus to first item in the list
			_view.$el.find('.service-list li' + $(this).attr('href') + ' ul li:first-child .service-item').focus();
		}
		
		e.preventDefault();
	},
	indexListItemTouchStartHandler: function() {
		$(this).parent().addClass('hover');
		e.preventDefault();
	},
	indexListItemTouchEndHandler: function() {
		$(this).parent().removeClass('hover');
		e.preventDefault();
	},
	showTooltipOnHover: function(e) {

		var orientation = module.view.getCurrentOrientation();

		if (orientation != 'desktop') return;

		var _view = e.data,
			_this = $(this),
			targetOfset = _this.offset(),
			content = _this.attr('title'),
			compTop = _view.$el.offset().top,
			compLeft = _view.$el.offset().left;

		_view.tooltip.content.html(content);
		if (content != "") {
			_view.tooltip.stop(true, true).show();
		}

		var posLeft = targetOfset.left + _this.width() + 24,
			posTop = targetOfset.top - _view.tooltip.height() / 2 + _this.height() / 2,
			posArrowTop = _view.tooltip.height() / 2 - _view.tooltipArrow.height() / 2 + 1;

		//remove title attribute to prevent showing default tooltip 
		_this.attr('title', '');
		_view.tooltip.css('top', posTop - compTop);
		_view.tooltip.css('left', posLeft - compLeft);
		_view.tooltipArrow.css('top', posArrowTop);
	},
	showTooltipOnClick: function(e) {

		var orientation = module.view.getCurrentOrientation();

		if (orientation == 'desktop') return;

		var _view = e.data,
			_this = $(this),
			content = _this.parent().find('a').attr('title');


		_view.tooltip.removeAttr('style');
		_view.tooltipArrow.removeAttr('style');
		_view.$('.icon.info').removeClass('active');
		_this.addClass('active');
		_view.tooltip.content.html(content);
		_view.tooltip.stop(true, true).fadeIn(200);


		var targetOfset = _this.offset(),
			compTop = _view.$el.offset().top,
			tooltipWidth = _view.tooltip.width(),
			tooltipOffset = _view.tooltip.offset(),
			tooltipArrowWidth = _view.tooltipArrow.width(),
			tooltipTop = 0,
			tooltipLeft = 0,
			tooltipArrowLeft = 0,
			outerSpace = 0,
			arrowIsOuterRight = false,
			arrowIsOuterLeft = false;

		//set position for tooltip, (difference solution between smartphone and desktop)
		if (orientation == 'smartphone') {
			tooltipTop = targetOfset.top + 29 - compTop;
			tooltipArrowLeft = targetOfset.left - 16 - tooltipOffset.left;
			arrowIsOuterRight = tooltipArrowWidth + tooltipArrowLeft > tooltipWidth;
			arrowIsOuterLeft = tooltipArrowLeft < 0;

			if (arrowIsOuterRight) {
				outerSpace = Math.abs(tooltipWidth - (tooltipArrowWidth + tooltipArrowLeft)) + 20;
			}
			if (arrowIsOuterLeft) {
				outerSpace = tooltipArrowLeft - 10;
			}

			_view.tooltip.css('top', tooltipTop);
			_view.tooltip.css('left', tooltipOffset.left + outerSpace);
			_view.tooltipArrow.css('left', tooltipArrowLeft - outerSpace);
		}
		if (orientation == 'tablet') {
			tooltipLeft = targetOfset.left + 39;
			tooltipTop = targetOfset.top - _view.tooltip.height() / 2 - compTop;
			tooltipArrowLeft = _view.tooltip.height() / 2 - _view.tooltipArrow.height() / 2 + 8;

			_view.tooltip.css('left', tooltipLeft);
			_view.tooltip.css('top', tooltipTop);
			_view.tooltipArrow.css('top', tooltipArrowLeft);
		}

		$(document).bind('touchstart', _view, _view.closeTooltip);

		_view.tooltip.find('*').addBack().bind('touchstart', function(e) {
			e.stopPropagation();
		});
	},
	closeTooltip: function(e) {
		var _view = e.data; //View object
		var className = e.target.className;
		var orientation = module.view.getCurrentOrientation();
		var _this = $(this);

		if (className == 'service-item' && orientation != 'desktop')
			return; //mouse out of service item and not in desktop won't do below actions

		_view.tooltip.removeAttr('style');
		$(this).removeAttr('style');

		//if this function call from hover of list item on desktop version, return the title attribute
		if (className == 'service-item' && orientation == 'desktop')
			_this.attr('title', _view.tooltip.content.html());
		_view.tooltip.content.html('');
		_view.tooltip.find('.tooltip-arrow').removeAttr('style');

		$('.icon.info').removeClass('active');
		$(document).unbind('touchstart', _view.closeTooltip);
		e.preventDefault();
	},
	handleViewportChange: function(width, height) {
		this.detectNavListStyle(height);

		var orientation = module.view.getCurrentOrientation();
		if (this.$('.active').length > 0) {
			var _view = this,
				_this = _view.$('.active');

			_view.tooltip.removeAttr('style').show();
			_view.tooltipArrow.removeAttr('style');

			var targetOfset = _this.offset(),
				compTop = _view.$el.offset().top,
				tooltipWidth = _view.tooltip.width(),
				tooltipOffset = _view.tooltip.offset(),
				tooltipArrowWidth = _view.tooltipArrow.width(),
				tooltipTop = 0,
				tooltipLeft = 0,
				tooltipArrowLeft = 0,
				outerSpace = 0,
				arrowIsOuterRight = false,
				arrowIsOuterLeft = false;

			if (orientation == 'smartphone') {
				tooltipTop = targetOfset.top + 29 - compTop;
				tooltipArrowLeft = targetOfset.left - 16 - tooltipOffset.left;
				arrowIsOuterRight = tooltipArrowWidth + tooltipArrowLeft > tooltipWidth;
				arrowIsOuterLeft = tooltipArrowLeft < 0;

				if (arrowIsOuterRight) {
					outerSpace = Math.abs(tooltipWidth - (tooltipArrowWidth + tooltipArrowLeft)) + 20;
				}
				if (arrowIsOuterLeft) {
					outerSpace = tooltipArrowLeft - 10;
				}

				_view.tooltip.css('top', tooltipTop);
				_view.tooltip.css('left', tooltipOffset.left + outerSpace);
				_view.tooltipArrow.css('left', tooltipArrowLeft - outerSpace);
			} else if (orientation == 'tablet') {
				tooltipLeft = targetOfset.left + 39;
				tooltipTop = targetOfset.top - _view.tooltip.height() / 2 - compTop;
				tooltipArrowLeft = _view.tooltip.height() / 2 - _view.tooltipArrow.height() / 2 + 8;

				_view.tooltip.css('left', tooltipLeft);
				_view.tooltip.css('top', tooltipTop);
				_view.tooltipArrow.css('top', tooltipArrowLeft);
			}
		}
	},
	handleLayoutChange: function(layout) {

		var orientation = layout.get('orientation');
		var navList = $('.index-nav')

		switch (orientation) {
			case 'desktop':
				this.$('.icon.active').removeClass('active');
				this.tooltip.removeAttr('style');
				this.tooltipArrow.removeClass('style');

				if (navList.find('ul').hasClass('dotted'))
					navList.find('ul').removeClass('dotted')
						.find('.dot a').each(function() {
							$(this).html($(this).data('text'));
						});
				break;
			case 'tablet':
				if (this.navHeightOnTablet == 0) this.navHeightOnTablet = navList.height();
				this.$('.up-to-top').removeAttr('style');
				this.detectNavListStyle();
				break;
			default: //smartphone
				if (this.navHeightOnMobile == 0) this.navHeightOnMobile = navList.height();
				this.$('.up-to-top').removeAttr('style');
				this.detectNavListStyle();
				break;
		}
		//console.log(this.navHeightOnMobile + ',' + this.navHeightOnTablet);
	},
	windowScrollHandler: function(e) {
		var orientation = module.view.getCurrentOrientation();
		if (orientation != 'desktop') return;

		var _view = e.data,
			footerHeight = 221,
			scrollTop = $(this).scrollTop(),
			windowHeight = $(this).height(),
			docHeight = $(document).height();

		if (scrollTop > 0) {
			if (scrollTop + windowHeight > docHeight - footerHeight) {
				if (!_view.upToTop.hasClass('absolute'))
					_view.upToTop.addClass('absolute');
			} else {
				if (_view.upToTop.hasClass('absolute'))
					_view.upToTop.removeClass('absolute');
				_view.upToTop.find('a').show();
			}
		} else {
			_view.upToTop.find('a').hide();
		}
	},
	scrollToTop: function(e) {
		$('html, body').animate({
			'scrollTop': 0
		}, 300);
		e.preventDefault();
	},
	detectNavListStyle: function(windowHeight) {
		var orientation = module.view.getCurrentOrientation();
		if (orientation == 'desktop') return;

		var list = this.$('.alphabet-list');
		var initHeight = orientation == 'smartphone' ? this.navHeightOnMobile : this.navHeightOnTablet;

		if (!list.hasClass('dotted')) {
			if (initHeight > windowHeight) {
				list.addClass('dotted');
				list.find('.dot a').each(function() {
					$(this).data('text', $(this).html());
					$(this).html('');
				});
			}
		} else {
			if (initHeight <= windowHeight) {
				list.removeClass('dotted');
				list.find('.dot a').each(function() {
					$(this).html($(this).data('text'));
				});
			}
		}
	},
	setInitNavHeight: function() {
		var _this = this;
		var orientation = module.view.getCurrentOrientation();

		switch (orientation) {
			case 'smartphone':
				_this.navHeightOnMobile = this.$('.index-nav').height();
				_this.navHeightOnTablet = 0;
				break;
			case 'tablet':
				_this.navHeightOnMobile = 0;
				_this.navHeightOnTablet = this.$('.index-nav').height();
				break;
			default:
				break;
		}
	}

});

$(window).bind('initializeComponents', function() {
	if ($('#service_index').length == 0) return;
	new lpch.ServiceIndex({
		el: '#service_index'
	});
});