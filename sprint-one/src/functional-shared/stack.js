var Stack = function() {
  var someInstance = {};
  someInstance.length = 0;
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.length;
};
stackMethods.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};
stackMethods.pop = function() {
  this.length && this.length--;
  var popped = this.storage[this.length];
  delete this.storage[this.length];
  return popped;
};
