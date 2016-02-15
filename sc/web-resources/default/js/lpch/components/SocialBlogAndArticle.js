lpch.SocialBlogAndArticle = lpch.BaseView.extend({
	NAME: "Social",
	wordCounts:{
		desktop    : 28,
		tablet     : 20,
		smartphone : 12
	},	
	timer: null,
	stopBubbling: function(e){
		e.stopPropagation();
	},	
	truncate: function(orientation){				
		var _this = this;
		clearTimeout(this.timer);
		this.timer = setTimeout(function(){
			_this.truncateTabsContent(_this.$el, _this.wordCounts[orientation || module.view.getCurrentOrientation()] );			
		}, 200);
	},	
	truncateTabsContent: function(list, limit) {
		$.each(list.find(".blog-item"), function(i, jitem) {
			var desc = $(jitem).find('.description'),
					jct  = desc.find('.content'),
					jctm = desc.find('.content-truncate'),
					ws   = words(jct.html());
			
			if (ws.length > limit) truncateText(jctm, ws, limit);
		});		
	},	
	initialize: function() {
		var _this = this;
		// tracking social link clicks
		this.$el.find('a').click(function(event) {
			//module.view.trackEvent($(this).text());
			console.log($(this).attr('title') || $(this).text());
		});
		
		lpch.BaseView.prototype.initialize.call(this);
		this.truncate();
	},
	handleLayoutChange: function(layout) {
		this.truncate(layout.get('orientation'));
	},
	handleViewportChange: function(width, height) {

	}
});

$(window).bind('initializeComponents', function() {	
	$('.social-blog-article').each(function(index) {
		new lpch.SocialBlogAndArticle({
			el: this
		});		
	});
});

