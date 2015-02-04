var Queue = function(){
  var someInstance = {};
  var queueStart = 0;
  var queueEnd = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

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
