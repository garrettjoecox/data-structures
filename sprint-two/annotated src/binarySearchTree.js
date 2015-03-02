// Tree Constructor
var BinarySearchTree = function(value){
    // Declares a new tree inheriting the functions bstTreeMethods provides
    var tree = Object.create(bstTreeMethods);
    // Declaring tree's default properties
    tree.value = value;
    tree.right = null;
    tree.left = null;
    // Returns the tree object (with functions & properties attached)
    return tree;
};

// Tree Methods
var bstTreeMethods = {};

// Inserts a value into the tree
bstTreeMethods.insert = function(value) {
    // Creating a new tree instance
    var newTree = BinarySearchTree(value);
    // Deciding whether newTree should go left or right
    if (value < this.value) {
        // If left or right exist recurse insert, else insert tree.
        this.left ? this.left.insert(value) : this.left = newTree;
    } else {
        this.right ? this.right.insert(value) : this.right = newTree;
    };
};

// Returns whether or not a tree & decendent's values contain target
bstTreeMethods.contains = function(target) {
    // Declares variable based on if Tree's value is target
    var doesContain = (this.value === target);
    // If children exist & recursive contains function returns true, toggle doesContain flag
    if (this.left && this.left.contains(target)) doesContain = true;
    if (this.right && this.right.contains(target)) doesContain = true;
    // Return flag
    return doesContain;
};

// Executes a callback on every value in the tree using Depth First
bstTreeMethods.depthFirstLog = function(func) {
    // Executes on this tree
    func(this.value);
    // If children exist recurse depthFirstLog
    this.left && this.left.depthFirstLog(func);
    this.right && this.right.depthFirstLog(func);
};

// Executes a callback on every value in the tree using Breadth First
bstTreeMethods.breadthFirstLog = function(func){
    // Declare a queue array starting with current tree(this)
    var q = [this];
    // While queue contains items
    while (q.length > 0) {
        // Declare a node for the first item in the queue
        var node = q[0];
        // Execute the callback on node's value
        func(node.value);
        // If node has children push them into queue
        node.left && q.push(node.left);
        node.right && q.push(node.right);
        // Shift the first item off of the array
        q.shift();
    };
};