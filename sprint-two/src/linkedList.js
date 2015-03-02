var LinkedList = function(){
    var list = {};
    list.head = null;
    list.tail = null;

    list.addToTail = function(value){
        var newNode = Node(value);
        var oldNode = list.tail;
        if (!list.tail) {
            list.head = newNode;
            list.tail = newNode;
        } else {
            oldNode.next = newNode;
            list.tail = newNode;
        };
    };

    list.removeHead = function(){
        var oldHeadValue = list.head.value;
        var newHead = list.head.next;
        list.head = newHead;
        return oldHeadValue;
    };

    list.contains = function(target){
        var doesContain = (list.head.value === target);
        var currentNode = list.head.next;
        while (currentNode) {
            if (currentNode.value === target) doesContain = true;
            currentNode = currentNode.next;
        };
        return doesContain;
    };
    return list;
};

var Node = function(value){
    var node = {};
    node.value = value;
    node.next = null;
    return node;
};