var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.endQ = 0;
  instance.startQ = 0;
  instance.storage = {};
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.endQ] = value;
  this.endQ++;
};

queueMethods.dequeue = function(){
  var popped = this.storage[this.startQ];
  delete this.storage[this.startQ];
  this.startQ++;
  return popped;
};

queueMethods.size = function(){
  var length = 0;
  _.each(this.storage, function(item){
    length++;
  });
  return length;
};

