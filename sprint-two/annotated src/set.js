// Set Constructor
var Set = function(){
    // Declares the set inheriting the functions setPrototype provides
    var set = Object.create(setPrototype);
    // Declares the set's storage
    set._storage = {};
    // Returns the set's object (with functions & properties attached)
    return set;
};

// Set Functions
var setPrototype = {};
// Add's an item to the set's storage
setPrototype.add = function(item) { this._storage[item] = item; };
// Returns whether or not the set's storage contains the target
setPrototype.contains = function(target) { return this._storage[target] ? true : false; };
// Removes item's from the set's storage
setPrototype.remove = function(item) { delete this._storage[item]; };