// Searching
Meteor.startup(function () {
    // on Client and Server

    PapersIndex = new EasySearch.Index({
	collection  : Papers,
	fields      : ['title', 'abstract', 'authorNames', 'authorAffiliations', 'keywords', '_id'],   
        limit       : 500, 
	engine      : new EasySearch.Minimongo()
    });

    SessionsIndex = new EasySearch.Index({
        collection    : Sessions, 
        fields        : ['name', 'paperIndex'], 
        limit         : 1000,  
	engine        : new EasySearch.Minimongo()
    });
});
