/**
 * Navigation:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for the main site navigation
 */
lpch.Navigation = lpch.BaseView.extend({
	
	// Technically, this is the Navigation component, not the Header
	// but for event tracking, the tagging workbook considers this Header
	NAME: "Header",
	scrollNavigation: null,

	initialize: function() {
		// Self-reference for scoping//
		var _this = this;
		var orientation = module.view.getCurrentOrientation();
		
		this.initRecentlyVisited();
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		if (Modernizr.touch) {
			this.$el.find('.nav-item').not('.nav-item--recently').find('.dropdown-btn')
			.bind('click', function(e) {
				e.preventDefault();
				// track events on nav-items
				module.view.trackEvent($(this).find("> span").text(), null, _this.NAME);
			})
			.bind('touchend',function(e) {
				e.preventDefault();
				var itemParent = $(this).parent();
				if(!itemParent.hasClass('open')) {
					if (module.view.getCurrentOrientation() == 'desktop') {
						itemParent.addClass('open').removeClass('unactive').siblings().removeClass('open');
					} else {
						itemParent.addClass('open').removeClass('unactive');
					}
				} else {
					itemParent.removeClass('open').addClass('unactive');
				}
				if(_this.scrollNavigation != null && !$('html').hasClass('ie8')) {
					setTimeout(function () {
						_this.scrollNavigation.refresh();
					}, 100);
				}
				return false;
			});
		} else {
			// nav item hover states
			this.$el.find('.nav-item').not('.nav-item--recently').hover(function() {
				if(module.view.getCurrentOrientation() == 'desktop' && !Modernizr.touch) {
					$(this).addClass('open').siblings().removeClass('open');
				}
			},
			function () {
				if (module.view.getCurrentOrientation() == 'desktop' && !Modernizr.touch) {
					$(this).removeClass('open');
				}
			});
			
			// on focus of a nav item, trigger the parent's mouseenter to show the drop down menu
			this.$el.find('.nav-item').not('.nav-item--recently').find('.dropdown-btn').focus(function() {
				$(this).parent().trigger('mouseenter');
			});
			
			// sub nav item hover states
			this.$el.find('.nav-item').not('.nav-item--recently').find('.dropdown-nav-item').hover(
					function(event) {
						// show the relevant dropdown thumbnail
						var $dropdown = $(this).parent().parent();
						$dropdown.find(".dropdown-thumbnail ul li").hide();
						$($dropdown.find(".dropdown-thumbnail ul li")[$(this).index()+1]).show();
					},
					function(event) {
						// show the default dropdown thumbnail
						var $dropdown = $(this).parent().parent();
						$dropdown.find(".dropdown-thumbnail ul li").hide();
						$($dropdown.find(".dropdown-thumbnail ul li")[0]).show();
					}
			);
			// on focus of a sub nav item, trigger the parent's hover state
			this.$el.find('.nav-item').not('.nav-item--recently').find('.dropdown-nav-item a').focus(function() {
				$(this).parent().addClass("hover");
			});
			// on blur of a sub nav item, remove the parent's hover state
			this.$el.find('.nav-item').not('.nav-item--recently').find('.dropdown-nav-item a').blur(function() {
				$(this).parent().removeClass("hover");
			});
			// on the last sub menu item of the last nav item, trigger a mouseleave to hide the dropdown
			this.$el.find('.nav-item').not('.nav-item--recently').last().find('.dropdown-nav-item').last().find('a').blur(function() {
				$(this).parent().parent().parent().parent().parent().trigger('mouseleave');
			});
			
			
			this.$el.find('.nav-item').not('.nav-item--recently').find('.dropdown-btn').bind('click',function(e) {
				if (module.view.getCurrentOrientation() != 'desktop') {
					e.preventDefault();
				}
				// track events on nav-items
				module.view.trackEvent($(this).find("> span").text(), null, _this.NAME);
				var itemParent = $(this).parent();
				if(!itemParent.hasClass('open')) {
					itemParent.addClass('open');
				} else {
					itemParent.removeClass('open');
				}
				// refresh the iscroll nav if necessary
				if (_this.scrollNavigation != null && !$('html').hasClass('ie8')) {
					setTimeout(function () {
						_this.scrollNavigation.refresh();
					}, 100);
				}
			});
			
			this.$el.find('.nav-item').removeClass('current');
			// highlight the appropriate nav item
			var pathname = window.location.pathname;
			if (pathname.search("/plan") >= 0 ||
				pathname.search("/locations") >= 0) {
					this.$el.find('.dropdown--plan').parent().addClass('current');
			} else if (pathname.search("/service") >= 0) {
					this.$el.find('.dropdown--services').parent().addClass('current');
			} else if (pathname.search("/learn") >= 0 ||
					pathname.search("/about") >= 0 ||
					pathname.search("/calendar") >= 0) {
					this.$el.find('.dropdown--learn').parent().addClass('current');
			} else if (pathname.search("/participate") >= 0) {
					this.$el.find('.dropdown--participate').parent().addClass('current');
			}
		}
		
		// track events on dropdown sub nav items
		this.$el.find('.nav-item').not('.nav-item--recently').find('.dropdown-nav-item').bind('click',function(e) {
			module.view.trackEvent($(this).text(), $(this).parent().parent().parent().parent().find("a > span").text(), _this.NAME);
		});
		
		if (this.$el.length > 0 && this.scrollNavigation == null && orientation != 'desktop') {
			this.$el.height(this.getNavHeight());
			if(!$('html').hasClass('ie8')) {
				_this.setupIscroll();
			}
		}
		
		if (orientation != 'desktop'){
			this.$el.addClass('overflow-y-auto');
		}

		this.$el.find('.dropdown').bind('click', function(e){
			if(module.view.getCurrentOrientation() == 'desktop') {
				e.stopPropagation();
			}
		});

		$(document).bind('click', function(){
			if (module.view.getCurrentOrientation() == 'desktop') {
				var menuItem = _this.$el.find('.nav-item');		    	
				menuItem.removeClass('open');
			}
		});
		
		module.bind('toggleNav', function(event) {
			_this.$el.height(_this.getNavHeight());
		});
		
		this.setTabIndex();
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},

	setupIscroll: function(){
		this.scrollNavigation = new iScroll('navigation',{
	        onBeforeScrollStart: function (e) {
	            var target = e.target;
	            while (target.nodeType != 1) target = target.parentNode;

	            if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA')
	                e.preventDefault();
	        }
	    });	
	},
	
	handleLayoutChange: function(layout) {
		if (layout.get('orientation') == 'desktop') {
			this.$el.find('.nav-item').removeClass("open");
			if(this.scrollNavigation != null && !$('html').hasClass('ie8')) {
				this.scrollNavigation.destroy();
				this.scrollNavigation = null;
				this.$el.removeAttr('style');
			}
			this.$el.removeClass('overflow-y-auto');
		} else {
			if($('html').hasClass('android')){
				this.$el.css('z-index','1');
				setTimeout(function(){
					this.$el.css('z-index','1399');
				},100);
			}
			// this.$el.find('.current').addClass("open");
			if(this.$el.length > 0 && this.scrollNavigation == null) {
				this.$el.height(this.getNavHeight());
				if(!$('html').hasClass('ie8')){
					this.setupIscroll();
				}
			}
			this.$el.addClass('overflow-y-auto');
		}
	},
	
	initRecentlyVisited: function() {
		var _this = this;
		
		// use jstorage to get the array from LocalStorage
		var recentlyVisited = $.jStorage.get('recentlyVisited');
		if (!recentlyVisited) recentlyVisited = [];
		var thisPage = { title:document.title, href:document.location.href };
		
		var index = recentlyVisited.length;
		while (index--) {
			var pageObj = recentlyVisited[index];
			if (pageObj.href == thisPage.href) {
				recentlyVisited.splice(index, 1);
			}
		}
		
		recentlyVisited.unshift(thisPage);
		// if the history is more than 5, cut it off
		if (recentlyVisited.length > 5) {
			recentlyVisited.splice(5);
		}
		
		// use jstorage to set the array in LocalStorage
		$.jStorage.set('recentlyVisited', recentlyVisited);
		
		// populate the list
		$.each(recentlyVisited, function(i, obj) {
			var html = '<li class="dropdown-nav-item"><a href="'+obj.href+'">'+obj.title+'</a></li>';
			$(html).appendTo(_this.$el.find('.nav-item--recently .dropdown-nav'));
		});
	},
	
	handleViewportChange: function(width, height) {
		var _this = this;
		var orientation = module.view.getCurrentOrientation();
		if(orientation != "desktop") {
			this.$el.height(this.getNavHeight());
			if(_this.scrollNavigation != null && !$('html').hasClass('ie8')) {
				_this.scrollNavigation.refresh();
			}
		} else {
			this.$el.removeAttr('style');
		}

	},

	getNavHeight: function(){
		var navTop = this.$el.length ? this.$el.offset().top : 0,
			winHeight = module.view.getViewportHeight();
			currentNavHeight = winHeight - navTop;
			return currentNavHeight;
	},
	
	/**
	 * @method	setTabIndex		Method that sets the tab index order for Navigation AND Header
	 */
	setTabIndex: function() {
		var i=1;
		// set tab index for the logo
		$("#header .logo a").each(function() {
			  $(this).attr("tabindex", i++);
		});
		
		// find all top nav items except 'recently clicked' and 'mobile search'
		this.$el.find('.nav-item').not('.nav-item--recently, .nav-item--search').each(function() {
			
			// find the dropdown-btn
			$(this).find('.dropdown-btn').each(function() {
				$(this).attr("tabindex", i++);
			});
			  
			// find the sub nav item links
			$(this).find('.dropdown-nav-item a').each(function() {
				$(this).attr("tabindex", i++);
			});
		});
		
		this.$el.find(".utinity-primary a").each(function() {
			$(this).attr("tabindex", i++);
		});
		
		$("#header .find-btn").each(function() {
			  $(this).attr("tabindex", i++);
		});
	}
	
});

/**
 * Header:		Navigation
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then initialize lpch.Navigation
 */
$(window).bind('initializeComponents', function() {
	new lpch.Navigation({ el: '#navigation' });
});