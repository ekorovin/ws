/**
 * TopicIndex:	Implementation
 * Description:	An extension of the lpch.BaseView object
 * 				Allows for declaration of interactivity for TopicIndex components
 */
lpch.TopicIndex = lpch.BaseView.extend({

	$treeList: null,
	$listItems: null,
	$stayWellP: null,
	$stayWellImg: null,
	$listItemLinks: null,
	$stayWellContainer: null,

	SLIDE_SPEED: 300,
	EXPANDED: 'expanded',
	HAS_CHILD: 'has-child',
	LAST_CHILD: 'last-child',

	initialize: function() {
		// Self-reference for scoping
		var _this = this,
			orientation = module.view.getCurrentOrientation();
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object

		_this.$treeList = this.$el.find('.tree-list');
		_this.$listItems = _this.$treeList.find('li');
		_this.$listItemLinks = _this.$treeList.find('a');
		_this.$stayWellContainer = _this.$el.find('.stay-well');
		_this.$stayWellP = this.$stayWellContainer.find('p');
		_this.$stayWellImg = this.$stayWellContainer.find('img');

		_this.initStayWellContent(orientation);
		_this.$listItems.removeClass('has-child');
		for (var i = 0; i < _this.$listItems.length; i++) {
			_this.initItem(_this.$listItems.eq(i));
		};

		_this.$listItemLinks.bind('click', _this, _this.expandChild);

		this.$el.find('.topic-footer a').click(function(e) {
			module.view.trackEvent($(this).attr('title') || $(this).text());
		});
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	initItem: function($treeItem) {
		var _this = $treeItem,
			_view = this;

		if (_this.find('ul').length > 0) {
			_this.addClass(_view.HAS_CHILD);
		}
		if (_this.is(':last-child')) {
			_this.addClass(_view.LAST_CHILD);
		}
	},
	expandChild: function(e) {
		var _parent = $(this).parent(),
			_view = e.data;
		
		module.view.trackEvent($(this).attr('title') || $(this).clone().children().remove().end().text());
		
		if (_parent.hasClass('has-child')) {

			_parent.find('>ul').slideToggle(_view.SLIDE_SPEED, function() {

				_parent.toggleClass(_view.EXPANDED);
				$(this).removeAttr('style');

				if (!_parent.hasClass(_view.EXPANDED) && _parent.find('.' + _view.EXPANDED).length > 0)

					_parent.find('.' + _view.EXPANDED)
						.removeClass(_view.EXPANDED);

			});


			return false;
		}
	},
	handleLayoutChange: function(layout) {
		var orientation = layout.get('orientation');

		this.initStayWellContent(orientation);
	},

	handleViewportChange: function(width, height) {},

	initStayWellContent: function(orientation) {
		if (orientation == 'smartphone') {
			this.$stayWellImg.before(this.$stayWellP);
		} else {
			this.$stayWellImg.after(this.$stayWellP);
		}
	}

});
/**
 * TopicIndex:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.accordion' classes and initialize lpch.TopicIndex
 */
$(window).bind('initializeComponents', function() {

	$('.topidx-component').each(function() {
		new lpch.TopicIndex({
			el: this
		});
	});

});