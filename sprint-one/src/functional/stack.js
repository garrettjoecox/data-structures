var Stack = function(){
    var someInstance = {};
    var storage = {};
    var size = 0;

    someInstance.size = function() { return size; };

    someInstance.push = function(value){
        storage[size] = value;
        size++;
    };

    someInstance.pop = function(){
        size && size--;
        var popped = storage[size];
        delete storage[size];
        return popped;
    };

    return someInstance;
};
