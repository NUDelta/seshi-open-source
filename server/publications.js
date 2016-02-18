Meteor.publish('papers-sub', function() {
  return Papers.find();
});

Meteor.publish('sessions-sub', function() {
  return Sessions.find();
});
