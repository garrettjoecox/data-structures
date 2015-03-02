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
    var doesContain = this.value === target;
    _.each(this.children, function(child){
        if (child.contains(target)) { doesContain = true; }
    });
    return doesContain;
};
