var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target){
  var wasFound = false;
  if (this.value === target){
    wasFound = true;
  } else {
    for (var i = 0; i < this.children.length; i++){
      if (this.children[i].contains(target)) {
        wasFound = true;
      }
    }
  }
  return wasFound;
};
