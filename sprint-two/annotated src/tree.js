// Tree Constructor
var Tree = function(value){
    // Declaring the tree object, which doesn't yet have Tree Methods
    var newTree = {};
    // Declaring tree's default properties
    newTree.value = value;
    newTree.children = [];
    // Extending Tree Methods onto the existing tree object.
    _.extend(newTree, treeMethods);
    // Returning the tree object (with functions & properties attached)
    return newTree;
};

// Tree Methods
var treeMethods = {};

// Add's a child to the tree
treeMethods.addChild = function(value){
    // Make's a new 'branch' with the value
    var newChild = Tree(value);
    // Stores the branch as the tree's child
    this.children.push(newChild);
};

// Returns whether or not tree & decendents contain target
treeMethods.contains = function(target){
    // Declares variable based on if Tree's value is target
    var doesContain = this.value === target;
    // Recursively runs the contains function on all of the branches
    _.each(this.children, function(child){
        // If any return true, toggle the does contain flag
        if (child.contains(target)) { doesContain = true; }
    });
    // Return the flag
    return doesContain;
};
