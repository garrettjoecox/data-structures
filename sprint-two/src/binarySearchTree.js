var BinarySearchTree = function(value){
  var tree = Object.create(bstTreeMethods);
  tree.value = value;
  tree.right = null;
  tree.left = null;

  return tree;
};

var bstTreeMethods = {};

bstTreeMethods.insert = function(value) {
  var newTree = BinarySearchTree(value);
  if (value < this.value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = newTree;
    }
  } else {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = newTree;
    }
  }
};

bstTreeMethods.contains = function(target) {
  var contains = (this.value === target);

  if (this.left) {
    if (this.left.contains(target)) {
      contains = true;
    }
  }
  if (this.right) {
    if (this.right.contains(target)) {
      contains = true;
    }
  }

  return contains;
};

bstTreeMethods.depthFirstLog = function(func) {
  func(this.value);

  if (this.left) {
    this.left.depthFirstLog(func);
  }
  if (this.right) {
    this.right.depthFirstLog(func);
  }

};

//extra credit
bstTreeMethods.breadthFirstLog = function(func){

}
/*
 * Complexity: What is the time complexity of the above functions?
 */
