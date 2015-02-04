var Stack = function() {
  this.length = 0;
  this.storage = {};

};
  Stack.prototype.size = function() {
    return this.length;
  };
  Stack.prototype.push = function(value) {
    this.storage[this.length] = value;
    this.length++;
  };
  Stack.prototype.pop = function() {
    this.length && this.length--;
    var popped = this.storage[this.length];
    delete this.storage[this.length];
    return popped;
  };

// var someInstance = new Stack();

