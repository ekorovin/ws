lpch.SearchServiceItemView = lpch.BaseView.extend({
	tagName: "li",
	className: "row-fluid",
	initialize: function(){
		this.template = _.template(module.view.model.templates.get('serviceItemTemplate').get('html'));
		this.render();
		this.model.on("hide", this.hide, this);
		this.model.on("show", this.hide, this);
	},
	hide: function(category){
		if(this.model.get("content-type")==category)
			this.$el.hide(0);
	},
	show: function(category){
		if(this.model.get("content-type")==category)
			this.$el.show(0);
	},
	render: function(){		
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});