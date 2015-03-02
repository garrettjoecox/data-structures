// Linked List Constructor
var LinkedList = function(){
    // Declares the actual list
    var list = {};
    // Starts the list off with a null Head and Tail
    list.head = null;
    list.tail = null;

    // Add's a node to the tail
    list.addToTail = function(value){
        // Declare a new node using the value passed in
        var newNode = Node(value);
        // Grab the last node in the list
        var oldNode = list.tail;
        // If the tail doesn't exist (If there's no tail, there's no head)
        if (!list.tail) {
            // Declare the new node as the head and the tail
            list.head = newNode;
            list.tail = newNode;
        // If the tail does exist
        } else {
            // Set the current tail's next property to the new node
            oldNode.next = newNode;
            // Set the tail as the new node
            list.tail = newNode;
        };
    };

    // Removes the head from the list
    list.removeHead = function(){
        // Declare the head and what's after it using it's next property
        var oldHeadValue = list.head.value;
        var newHead = list.head.next;
        // Set the new head as the one after the original head
        list.head = newHead;
        // Return the original(removed) head
        return oldHeadValue;
    };

    // Returns whether or not the list contains the target
    list.contains = function(target){
        // Declare a flag based on if the head's value is target
        var doesContain = (list.head.value === target);
        // Declare the starting node in the while loop as the node after the head
        var currentNode = list.head.next;
        // Runs until current node is null
        while (currentNode) {
            // If current node's value is target toggle the flag
            if (currentNode.value === target) doesContain = true;
            // Setting the current node with this node's next property
            currentNode = currentNode.next;
        };
        // Returns the flag
        return doesContain;
    };
    // Returns the list object (with functions & properties attached)
    return list;
};

var Node = function(value){
    var node = {};
    node.value = value;
    node.next = null;
    return node;
};