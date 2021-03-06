var Set = function(){
    var set = Object.create(setPrototype);
    set._storage = {};
    return set;
};

var setPrototype = {};
setPrototype.add = function(item) { this._storage[item] = item; };
setPrototype.contains = function(target) { return this._storage[target] ? true : false; };
setPrototype.remove = function(item) { delete this._storage[item]; };