/**
 * LightSidebar:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for the main site navigation
 */
lpch.LightSidebar = lpch.BaseView.extend({
	$searchInput: null,
	$cancelButton: null,
	$clearTextButton: null,
	$resultsContainer: null,
	
	isIE8: false,
	scrollResultList: null,
	searchResultsListView: null,
	
	SHOW: 'show',
	HAS_RESULT: 'has-result',
	IS_LOADING: 'is-loading',
	//URL: "/web-resources/default/data/search-query.json?search-term=",
	URL: "/en/search/widget.page?search-term=",
	
	initialize: function(options) {
		// Self-reference for scoping
		var _this = this;
		var orientation = module.view.getCurrentOrientation();
		
		this.isIE8 = $('html').hasClass('ie8');
		this.$clearTextButton = this.$('.icon.clear');
		this.$cancelButton = this.$('.button-cancel');
		this.$searchInput = this.$('#lightSideBarSearch');
		this.$resultsContainer = this.$('.light-sidebar-results');

		this.bind("show", this.setupIscroll);
		this.$searchInput.bind('keyup', _this, _this.loadResults);
		this.$cancelButton.bind('click', _this, _this.hide);
		this.$clearTextButton.bind('click', _this, _this.clearText);
		options.originalSearchTextBox.bind('focus', _this, _this.show);
		this.searchResultsListView = new lpch.LightSidebarResultsListView({
			el: this.$('.results-list')
		});
		this.searchResultsListView.bind(_this.HAS_RESULT, _this.hasResults, _this);
		this.searchResultsListView.bind('need-refresh-iscroll', _this.refreshIscroll, _this);

		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},

	setupIscroll: function() {
		var _this = this;
		var orientation = module.view.getCurrentOrientation();

		if (orientation != 'desktop' && this.scrollResultList == null) {
			this.$resultsContainer.height(this.getResultsContainerHeight());
			if (!_this.isIE8)
				this.scrollResultList = new iScroll('light_sidebar_results');
			else
				this.scrollResultList = 0; // flag for ie8
		}
	},
	refreshIscroll: function() {

		var _this = this;
		var orientation = module.view.getCurrentOrientation();
		if (orientation != 'desktop' && _this.scrollResultList != null) {
			//alert(this.getResultsContainerHeight());
			_this.$resultsContainer.height(_this.getResultsContainerHeight());
			if (!_this.isIE8)
				_this.scrollResultList.refresh();
		}
	},
	handleLayoutChange: function(layout) {
		var orientation = module.view.getCurrentOrientation();
		var _this = this;
		if (orientation == 'desktop') {
			if (_this.scrollResultList != null) {
				_this.scrollResultList.destroy();
				_this.scrollResultList = null;
			}
			_this.$resultsContainer.removeAttr('style');
			_this.hide();
		}
	},
	handleViewportChange: function(width, height) {
		this.refreshIscroll();
	},
	show: function(e) {
		var _view = null;
		if (e) {
			e.stopPropagation();
			_view = e.data;
		} else _view = this;

		_view.$el.addClass(_view.SHOW);
		_view.$searchInput.focus();
		_view.trigger("show");

		$(document).bind('click touchstart', _view, _view.hide);
		_view.$el.on('click touchstart', '*', function(e) {
			e.stopPropagation();
		});


		//need to fix bug on Firefox 21
		_view.options.originalSearchTextBox.on('click', function(e) {
			e.stopPropagation();
		});
	},
	hide: function(e) {
		var _view = null;

		if (e) {
			_view = e.data;
			e.preventDefault();
		} else _view = this;

		_view.$el.removeClass(_view.SHOW);
		_view.clearText();
		_view.$resultsContainer.removeClass(_view.IS_LOADING);
		//need to unbind event to fix problem on iPad
		$(document).unbind('click touchstart', _view.hide);
	},
	clearText: function(e) {
		var _view = null;
		var orientation = module.view.getCurrentOrientation();

		if (e) _view = e.data;
		else _view = this;

		_view.$searchInput.val('');
		_view.$resultsContainer.removeClass(_view.HAS_RESULT);
		_view.searchResultsListView.clearResults();
		_view.refreshIscroll();
	},
	loadResults: function(e) {
		var _view = e.data;
		var keyword = $(this).val();

		if (keyword.length > 3) {
			_view.$resultsContainer.addClass(_view.IS_LOADING);

			_view.load(_view.URL + $(this).val(), _view.renderList);
		} else {
			_view.$resultsContainer.removeClass(_view.HAS_RESULT);
			_view.searchResultsListView.clearResults();
			_view.refreshIscroll();
		}
	},
	getResultsContainerHeight: function() {
		var orientation = module.view.getCurrentOrientation();
		var resultsHeight = 0;
		if (orientation == 'tablet') {
			resultsHeight = 258;
		} else {
			var offsetTop = this.$resultsContainer.offset().top;
			resultsHeight = module.view.getViewportHeight() - offsetTop;
		}

		return resultsHeight;
	},
	load: function(url, successCallBack) {
		var _this = this;
		$.getJSON(url, function(data) {
			successCallBack(data.response.docs, _this);
		});
	},
	renderList: function(data, that) {
		var _view = that;
		if (data.length > 0) {
			_view.searchResultsListView.dataResults = data;
			_view.searchResultsListView.render();
		}
		_view.$resultsContainer.removeClass(_view.IS_LOADING);
	},
	hasResults: function() {
		this.$resultsContainer.addClass(this.HAS_RESULT);
	}
});
lpch.LightSidebarResultsListView = lpch.BaseView.extend({
	itemTemplateName: 'lightSidebarResultItem',
	$viewMoreItem: null,
	titleCharsLimit: 28,
	HAS_RESULT: 'has-result',

	events: {
		'click .view-more': 'viewMoreItem'
	},
	initialize: function(options) {
		var _this = this;
		_this.$viewMoreItem = _this.$('.view-more-item');
		_this.itempTemplate = _.template(module.view.model.templates.get(_this.itemTemplateName).get('html'));
	},
	render: function() {
		var _this = this;
		if (_this.dataResults.length == 0 || this.dataResults == null) return this;


		_this.clearResults();

		var i = 1;
		_.each(this.dataResults, function(obj) {
			obj.hiddenTabletClass = i > 4 ? 'hide-default-tablet' : '';
			obj = _this.truncateText(obj);
			i++;
			_this.$viewMoreItem.before(_this.itempTemplate(obj));
		});
		if (_this.dataResults.length > 0) {
			_this.trigger(_this.HAS_RESULT);
		}
		if (_this.$('.hide-default-tablet').length > 0)
			_this.$viewMoreItem.removeAttr('style');
		this.trigger('need-refresh-iscroll');

		return this;
	},
	clearResults: function() {
		this.$('.result-item').remove();
	},
	viewMoreItem: function(e) {
		e.preventDefault();

		this.$('.hide-default-tablet')
			.slice(0, 3)
			.removeClass('hide-default-tablet');

		if (this.$('.hide-default-tablet').length <= 0) this.$viewMoreItem.hide();
		this.trigger('need-refresh-iscroll');
	},
	truncateText: function(obj) {
		if (obj.title)
			obj.title[0] = truncateTextByLimitCharacter(obj.title[0], this.titleCharsLimit);
		else
			obj.name = truncateTextByLimitCharacter(obj.name, this.titleCharsLimit);
		return obj;
	}
});
/**
 * LightSidebar
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then initialize lpch.LightSidebar
 */
$(window).bind('initializeComponents', function() {
	if ($('#light-sidebar').length == 0 || $('.search-nav').length == 0) return;
	new lpch.LightSidebar({
		el: '#light-sidebar',
		originalSearchTextBox: $('.search-nav')
	});
});