// var wrappedFind = Meteor.Collection.prototype.find;
 
// Meteor.Collection.prototype.find = function () {
//   var cursor = wrappedFind.apply(this, arguments);
//   var collectionName = this._name;
 
//   cursor.observeChanges({
//     added: function (id, fields) {
//       console.log(collectionName, 'added', id);
//     },
 
//     changed: function (id, fields) {
//       console.log(collectionName, 'changed', id);
//     },
 
//     movedBefore: function (id, before) {
//       console.log(collectionName, 'movedBefore', id, before);
//     },
 
//     removed: function (id) {
//       console.log(collectionName, 'removed', id);
//     }
//   });
 
//   return cursor;
// };
