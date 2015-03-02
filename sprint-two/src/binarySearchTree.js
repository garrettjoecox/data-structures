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
        this.left ? this.left.insert(value) : this.left = newTree;
    } else {
        this.right ? this.right.insert(value) : this.right = newTree;
    };
};

bstTreeMethods.contains = function(target) {
    var doesContain = (this.value === target);
    if (this.left && this.left.contains(target)) doesContain = true;
    if (this.right && this.right.contains(target)) doesContain = true;
    return doesContain;
};

bstTreeMethods.depthFirstLog = function(func) {
    func(this.value);
    this.left && this.left.depthFirstLog(func);
    this.right && this.right.depthFirstLog(func);
};

bstTreeMethods.breadthFirstLog = function(func){
    var q = [this];
    while (q.length > 0) {
        var node = q[0];
        func(node.value);
        node.left && q.push(node.left);
        node.right && q.push(node.right);
        q.shift();
    };
};