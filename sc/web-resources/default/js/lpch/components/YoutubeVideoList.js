lpch.YtVideoModel = Backbone.Model.extend({});


lpch.YtVideoView = Backbone.View.extend({
	tagName: "li",
	initialize: function(){
		this.template = _.template(module.view.model.templates.get("youtube-video-list").get('html'));
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});

lpch.YtVideosCollection = Backbone.Collection.extend({
	model: lpch.YtVideoModel,
	initialize: function(options){
		if(options!=undefined)
			this.url += options.maxResults+"&callback=?";
	},
	parse: function(response){
		var resultObj = [];
		_.each(response.feed.entry,function(val, i){
			var dur = val.media$group.media$content[0].duration;
			dur = parseInt(parseInt(dur)/60)+":"+(parseInt(dur)%60<10? ("0"+parseInt(dur)%60): parseInt(dur)%60);
			var desc = val.media$group.media$description.$t;
			desc = desc.length>70 ? desc.slice(0,67)+"...": desc;
			var title = val.media$group.media$title.$t;
			title = title.length>23 ? title.slice(0,23)+"...": title;
			
			resultObj.push({
				"thumb"		: val.media$group.media$thumbnail[1].url,
				"url" 		: '//www.youtube.com/embed/' + val.media$group.yt$videoid.$t + '?rel=0&&amp;mode=transparent',
				"title" 	: title,
				"desc"		: desc,
				"duration" 	: dur
			});
		});
		return resultObj;
	},
	url: "https://gdata.youtube.com/feeds/api/users/PackardChildrensHosp/uploads?v=2&alt=json&max-results="
});


lpch.YtVideosView = lpch.BaseView.extend({
	initialize: function(options){
		lpch.BaseView.prototype.initialize.call(this);
		this.render();
	},
	render: function(){
		this.collection.each(function(model,i){
			var tempYtVideo = new lpch.YtVideoView({model: model});
			this.$el.append(tempYtVideo.render().el);
		},this);
		return this;
	}
});

$(window).bind('initializeComponents', function() {
	var ytVideoData = new lpch.YtVideosCollection({maxResults:2});
	ytVideoData.fetch({
		success: function(){
			$('.social-youtube-videos').each(function(index) {
				var $this = $(this);

				window.videoslist = new lpch.YtVideosView({
					el: $("ul.yt-videos-list").get(0),
			        collection: ytVideoData
			    });
			    setTimeout(function (argument) {					
					$this.find('.youtube')
						.colorbox({
							iframe: true,
							innerWidth: 620,
							innerHeight: 404,
							fixed: true,
							onOpen: function() {
								module.view.trackEvent($(this).attr('title'));
							},
							onComplete: function() {
								var orientation = module.view.getCurrentOrientation();
								if (orientation == 'smartphone') {
									$.colorbox.resize({
										innerWidth: 320,
										innerHeight: 200
									});
								}
							}
						});
				}, 10);
			});
		},
		reset: true
	});
});

