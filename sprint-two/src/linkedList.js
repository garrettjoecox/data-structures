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
      // if (newNode !== list.head) {
        newNode.previous = oldNode;
        oldNode.next = newNode;
        list.tail = newNode;
      // }
    }
  };
  list.removeHead = function(){
    var oldHeadValue = list.head.value;
    var newHead = list.head.next;

    list.head = newHead;
    return oldHeadValue;
  };

  list.contains = function(target){
    var currentNode = list.head;
    var contains = false;

    if (list.tail.value === target) return true;
    while (currentNode.next) {
      if (currentNode.value === target) {
        contains = true;
      }
      currentNode = currentNode.next;
    }
    return contains;
  };

  list.addToHead = function(value){

  };

  list.removeTail = function(){
    // return removed tail
  }


  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
