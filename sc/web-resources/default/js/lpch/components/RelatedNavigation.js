/**
 * RelatedNav:		Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the RelatedNav component
 */
lpch.RelatedNav = lpch.BaseView.extend({ 
	NAME: "Related Navigation",
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

		_this.$treeList = _this.$el.find('.tree-list');
		_this.$listItems = _this.$treeList.find('li');
		_this.$listItemLinks = _this.$treeList.find('a');

		_this.$listItems.removeClass('has-child');

		$('ul.tree-list').children().find("ul").each( function(index) {
			$(this).parent().addClass(_this.HAS_CHILD);
			$(this).parent().find(".arrow-icon").addClass("collapsed");
			//hide all menus first
			$(this).hide();

			if( $("ul.tree-list > li").hasClass("current") ) {
				//flips the arrow down for the top level li.current
				$(this).parent().filter('.current').find(".arrow-icon").removeClass("collapsed").addClass("expanded");
				//shows the nested submenu that has its parent li marked current.
				$("ul.tree-list > li.current > ul").show();
			}

			//finds nested .current li's. walk back up the tree and fold down arrow.
			if($("ul.tree-list > li > ul > li").hasClass("current")) {
				$("ul.tree-list > li > ul > li.current").parent().parent().find(".arrow-icon").removeClass("collapsed").addClass("expanded");
				//shows the nested submenu that has one of its li children marked current
				$("ul.tree-list > li > ul > li.current").parent().show();
			}
		});

		if (_this.$treeList.is(':last-child')) {
			_this.$treeList.addClass(_this.LAST_CHILD);
		}

		this.$el.find('.topic-footer a').click(function(e) {
			module.view.trackEvent($(this).attr('title') || $(this).text());
		});
		
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	handleLayoutChange: function(layout) {
		var orientation = layout.get('orientation');
	},
	handleViewportChange: function(width, height) {}

});

/**
 * RelatedNav:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.related-navigation' classes and initialize lpch.RelatedNav
 */
$(window).bind('initializeComponents', function() {
	$('.related-navigation').each(function(index) {
		new lpch.RelatedNav({
	        el: this
	    });
	});
});