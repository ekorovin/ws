lpch.BaseModel = Backbone.Model.extend({
	
	getSibling: function(value) {
		if (this.collection)
			return isNaN(value)
			       ? collection.get(value)
			       : collection.at(value);

		return null;
	},

	bindCollection: function(attribute, collection) {
		if (!this._collectionBindings)
			this._collectionBindings = {};

		this._collectionBindings[attribute] = collection;
	},

	getID: function(attribute) {
		var model = attribute
		          ? this.get(attribute)
		          : this;

		if (model)
			return model.get('id');
	},

	getPosition: function(attribute) {
		var collection = !attribute
		               ? this.collection
		               : (this.get(attribute) instanceof Backbone.Model
		                  ? this.get(attribute).collection
		                  : this._collectionBindings[attribute]);

		if (collection) {
			var value = attribute
			          ? this.get(attribute)
			          : this;

			if (value)
				return collection.indexOf(value);
		}

		return -1;
	},

	moveTo: function(attribute, value) {
		var collection = this._collectionBindings[attribute];

		if (collection) {
			var position = isNaN(value)
			             ? collection.indexOf(collection.get(value))
			             : value;

			if (position > -1
			&& position < collection.length)
				this.set(attribute, collection.at(position));
		}
	},

	movePrevious: function(attribute) {
		var collection = this._collectionBindings[attribute];

		if (collection)
			this.moveTo(attribute, this.getPosition(attribute) - 1);
	},

	moveNext: function(attribute) {
		var collection = this._collectionBindings[attribute];

		if (collection)
			this.moveTo(attribute, this.getPosition(attribute) + 1);
	}
});