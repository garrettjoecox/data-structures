var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(i)) {
    console.log('reset');
    this._storage.set(i, {});
  }
  var temp = this._storage.get(i);
  temp[k] = v;
  this._storage.set(i, temp);
  console.log(this._storage.get(i));
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(i);
  console.log(temp);
  return temp[k];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(i);
  temp[k] = null;
  this._storage.set(i, temp);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
