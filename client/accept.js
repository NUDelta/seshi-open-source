Template.accept.events({
    'click .submitAcceptedList' : function (){
	var paperIDs = $('.accept-text').val().trim().split('\n').map(function(x) { return x.trim()});
	
	Meteor.call('updateAccepted', paperIDs,
		    function(error, id){
			var count = Papers.find({active:true}).count()
			alert("We will work with " +  count + " accepted papers");
		    });
    }
    
});


activePapers = function(){
    return Papers.find({active: true});
}

Template.accept.helpers({
    activePapers: function(){
	return activePapers();
    },
    inactivePapers: function(){
	return Papers.find({active: false});
    },
    activeCount: function(){
	return activePapers().count();
    },
    paperCount: function(){
	return Papers.find().count();
    }
});
