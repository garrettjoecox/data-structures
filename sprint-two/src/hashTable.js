var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(i)) {
    this._storage.set(i, []);
  }

  var temp = this._storage.get(i);

  temp.push([k, v]);
  this._storage.set(i, temp);

  // resize to bigger if > 75%

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(i);
  var result;

  _.each(temp, function(item){
    if (item[0] === k) {
      result = item[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(i);
  var indexFound;

  _.each(temp, function(item, index){
    if (item[0] === k){
      indexFound = index;
    }
  });
  temp[indexFound][1] = null;
  this._storage.set(i, temp);

  // resize to smaller if < 25%
};

// .resize
  // to bigger:
  // make sure hash table doubles in size as soon
  // as 75 % of the spaces have been filled
  //
  // to smaller:
  // make sure hash table shrinks when space
  // usage falls below 25%


/*
 * Complexity: What is the time complexity of the above functions?
 */
