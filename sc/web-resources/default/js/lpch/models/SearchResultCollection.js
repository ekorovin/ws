lpch.SearchResultsCollection = Backbone.Collection.extend({
    initialize: function() {
        this.classCollection = [];
        this.serviceCollection = [];
        this.caregiverCollection = [];
        this.locationCollection = [];
        this.webcrawlCollection = [];
        this.defaultCollection = [];
    },
    model: function(attrs, options) {
        var modelItem;
        switch (attrs["content-type"]) {
            case "class":
                modelItem = new lpch.SearchClassRecordModel(attrs);
                options.collection.classCollection.push(modelItem);
                break;
            case "location":
                modelItem = new lpch.SearchLocationRecordModel(attrs);
                options.collection.locationCollection.push(modelItem);
                break;
            case "service":
                modelItem = new lpch.SearchServiceRecordModel(attrs);
                options.collection.serviceCollection.push(modelItem);
                break;
            case "caregiver":
                modelItem = new lpch.SearchDoctorRecordModel(attrs);
                options.collection.caregiverCollection.push(modelItem);
                break;
            case "webcrawl":
            	modelItem = new lpch.SearchDocumentRecordModel(attrs);
            	options.collection.webcrawlCollection.push(modelItem);
                break;
            default:
            	// any json objects that don't fit in one of the above content-types
            	// are treated as Documents and dumped into a default Array
            	modelItem = new lpch.SearchDocumentRecordModel(attrs);
            	options.collection.defaultCollection.push(modelItem);
            	break;
            
        }
        return modelItem;
    },
    parse: function(response) {
        return response.response.docs;
    },
    clean: function() {
    	// removes all the models that do not relate to a specific content-type
    	this.remove(this.defaultCollection);
    }
});