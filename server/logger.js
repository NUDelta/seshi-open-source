Meteor.methods({
    logAction: function(log){
	Logs.insert(log);
        console.log(log);
    }
});
