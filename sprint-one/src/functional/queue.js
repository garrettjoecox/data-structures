var Queue = function(){
    var someInstance = {};
    var queueStart = 0;
    var queueEnd = 0;
    var storage = {};

    someInstance.enqueue = function(value){
        storage[queueEnd] = value;
        queueEnd++;
    };

    someInstance.dequeue = function(){
        var popped = storage[queueStart];
        delete storage[queueStart];
        queueStart++;
        return popped;
    };

    someInstance.size = function(){
        var length = 0;
        _.each(storage, function(item){
            length++;
        });
        return length;
    };
    return someInstance;
};