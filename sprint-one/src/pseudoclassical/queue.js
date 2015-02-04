var Queue = function() {
  this.startQ = 0;
  this.endQ = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
  this.storage[this.endQ] = value;
  this.endQ++;
};

Queue.prototype.dequeue = function(){
  var popped = this.storage[this.startQ];
  delete this.storage[this.startQ];
  this.startQ++;
  return popped;
};

Queue.prototype.size = function(){
  var length = 0;
  _.each(this.storage, function(item){
    length++;
  });
  return length;
};


