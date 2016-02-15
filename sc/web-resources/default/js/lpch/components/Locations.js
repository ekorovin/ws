/**
 * Locations:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for Locations components
 */
lpch.Locations = lpch.BaseView.extend({
	maxHeight: 0,
	isDropDown: false,

	$tab: null,
	$tabContent: null,
	$tabItems: null,
	$tabFirstITem: null,
	$tabDefaultItem: null,
	$tabItemLinks: null,
	$locationsItem: null,
	$locationsList: null,
	$contentListItems: null,
	$locationsItemLink: null,
	$dropDownSelectedContent: null,

	ACTIVE: 'active',
	SLIDE_SPEED: 200,
	EXPANDED: 'expanded',
	DEFAULT_ITEM: 'default-item',

	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		var orientation = module.view.getCurrentOrientation();

		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		_this.$tabContent = _this.$('.tab-content');
		_this.$tab = _this.$('#search_result_tab');
		_this.$tabItems = _this.$tab.find('li');
		_this.$tabFirstITem = _this.$tab.find('.first-child');
		_this.$tabDefaultItem = _this.$tab.find('.default-item');
		_this.$tabItemLinks = _this.$tabItems.find('a');
		_this.$contentListItems = _this.$('.content-list li');
		_this.$locationsList = _this.$el.find('.locations-list');

		_this.$locationsItemLink = _this.$locationsList.find('h4');
		_this.$dropDownSelectedContent = _this.$('.dropdown-nav p');
		_this.$locationsListItem = _this.$locationsList.find('.location-list-item');
		

		_this.$tabItemLinks.bind('click', _this, _this.showTab);
		_this.$('.dropdown-nav').bind('click', _this, _this.showDropDownNav);
		_this.$locationsItemLink.bind('click', _this, _this.expandCollapseHandler);

		_this.showAutoTab();
		_this.changeHeight();

		if(orientation == 'smartphone') _this.showDefaultTabItem();

		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	changeHeight: function() {
		var orientation = module.view.getCurrentOrientation(),
			_this = this;
		
		_this.$contentListItems.removeAttr('style');
		_this.maxHeight = 0;
		
		_this.$contentListItems.each(function() {
			var contentHeight = $(this).height();
			if (_this.maxHeight < contentHeight) {
				_this.maxHeight = contentHeight;
			}
		});

		if (orientation != 'smartphone') {
			_this.$contentListItems.css({'height': _this.maxHeight});
		}
		else {
			_this.$contentListItems.removeAttr('style');
		}
	},
	showAutoTab: function() {
		var orientation = module.view.getCurrentOrientation(),
			_this = this;
		if (orientation != 'smartphone') {
			var lenTab = _this.$tabItems.not('.' + _this.DEFAULT_ITEM).length,
				singleTabSize = 100 / lenTab;

			_this.$tabItems.not('.' + _this.DEFAULT_ITEM).css('width', singleTabSize + '%');
		}
	},
	showTab: function(e) {
		var _self = $(this),
			_view = e.data,
			_parent = _self.parent(),
			html = _self.find('.inner').html(),
			isDefaultITem = _parent.hasClass(_view.DEFAULT_ITEM),
			orientation = module.view.getCurrentOrientation();

		e.preventDefault();
		_view.$dropDownSelectedContent.html(html);
		
		if(isDefaultITem) {
			_view.showDefaultTabItem();
		} else _self.tab('show');
		
		_view.changeHeight();

		if (orientation == 'smartphone') {
			_view.$tab.hide();
		}
	},
	showDefaultTabItem: function() {
		var _view = this,
			html = _view.$tabDefaultItem.find('.inner').html();

		_view.$dropDownSelectedContent.html(html);	
		_view.$tab.find('.' + _view.ACTIVE).removeClass(_view.ACTIVE);
		_view.$tabContent.find('.' + _view.ACTIVE).removeClass(_view.ACTIVE);
		_view.$tabDefaultItem.addClass(_view.ACTIVE);		
	},
	closeDropDownNav: function(e) {
		var _view = e.data,
			orientation = module.view.getCurrentOrientation();

		if (orientation == 'smartphone' && _view.isDropDown) {
			_view.$tab.hide();
			_view.$tab.removeAttr('style');
		}
	},
	showDropDownNav: function(e) {
		var _view = e.data;

		_view.$tab.slideDown(_view.SLIDE_SPEED, function() {
			_view.isDropDown = true;
			$(document).on('click', _view, _view.closeDropDownNav);
			$('#search_result_tab, .dropdown-nav').on('click', function(e) {
				e.stopPropagation();
			})
		});
	},
	expandCollapseHandler: function(e) {
		var orientation = module.view.getCurrentOrientation(),
			_view = e.data;
		if (orientation == 'smartphone') {
			var _parent = $(this).parent();
			_parent.toggleClass(_view.EXPANDED);
		}
		return false;
	},
	handleLayoutChange: function(layout) {
		var _this = this,
			orientation = layout.get('orientation');

		if (orientation != 'smartphone') {
			_this.$el.find('.' + _this.EXPANDED).removeClass(_this.EXPANDED);
			_this.showAutoTab();
			_this.$tab.removeAttr('style');
			if(_this.$tabDefaultItem.hasClass(_this.ACTIVE)) {
				_this.$tabFirstITem.find('a').tab('show');
			}
		} else {
			_this.isDropDown = false;
			_this.showDefaultTabItem();
			_this.$tabItems.removeAttr('style');
		}
	},
	handleViewportChange: function(width, height) {
		var orientation = module.view.getCurrentOrientation();
		this.changeHeight();
	}

});
/**
 * Locations:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.accordion' classes and initialize lpch.Locations
 */
$(window).bind('initializeComponents', function() {

	$('.locations-component').each(function() {
		new lpch.Locations({
			el: this
		});
	});

});