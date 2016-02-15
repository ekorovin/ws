lpch.SearchAllItemView = lpch.BaseView.extend({
	tagName: "li",
	className: "row-fluid",
	initialize: function(){
		this.template = _.template(module.view.model.templates.get('allItemTemplate').get('html'));
		this.render();
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});