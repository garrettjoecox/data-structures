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

//worth hi-chews
bstTreeMethods.breadthFirstLog = function(func){
  var q = [];

  q.push(this);

  while (q.length > 0) {
    var node = q[0];
    func(node.value);
    console.log(node)
    if (node.left) { q.push(node.left) }
    if (node.right) { q.push(node.right) }
    q.shift();
  }

}


//worth lots of hi-chews
bstTreeMethods.rebalanceTree = function(){
  // find min depth
  // find max depth
  // compare. if max > 2x min, rebalance
  // to rebalance, make new tree
  // using an ordered array, starting in the middle
  // (i.e.: re-order old tree, and make new tree
  // from middle of array)
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
