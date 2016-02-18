Meteor.publish("user-info", function(id) {
    return Meteor.users.find({_id: id}, {fields: {profile: 1}});
});
