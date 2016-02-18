Papers = new Meteor.Collection("papers");
Sessions = new Meteor.Collection("sessions");
Logs = new Meteor.Collection("logs");

Meteor.methods({
    updateAccepted: function(paperIds){
	Papers.update({},
		      {$set: {active: false}},
		      {multi:true}
		     );
	Papers.update({_id : { $in: paperIds}},
		      {$set: {active: true}},
		      {multi:true});
    }
});

