// Array Based
var Set = function(){
  var set = Object.create(setPrototype);

  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage.push(item);
};

setPrototype.contains = function(item){
  return _.contains(this._storage, item) ? true : false;
};

setPrototype.remove = function(item){
  var foundIndex = _.indexOf(this._storage, item);

  this._storage[foundIndex] = null;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// Object Based

// var Set = function(){
//   var set = Object.create(setPrototype);

//   set._storage = {};
//   return set;
// };

// var setPrototype = {};

// setPrototype.add = function(item){
//   this._storage[item] = item;
// };

// setPrototype.contains = function(item){
//   return this._storage[item] ? true : false;
// };

// setPrototype.remove = function(item){
//   delete this._storage[item];
// };

// /*
//  * Complexity: What is the time complexity of the above functions?
//  */
