var HashTable = function(){
    this._limit = 8;
    this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
    var index = hashThis(key, this._limit);
    var bucket = this._storage.get(index) ? this._storage.get(index) : [];
    bucket.push([key, value]);
    this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(key){
    var index = hashThis(key, this._limit);
    var bucket = this._storage.get(index);
    var result = null;
    _.each(bucket, function(item){
        if (item[0] === key) result = item[1];
    });
    return result;
};

HashTable.prototype.remove = function(key){
    var index = hashThis(key, this._limit);
    var bucket = this._storage.get(index);
    for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i]
        if ( tuple[0] === key){
            bucket.splice(i, 1)
        };
    };
};