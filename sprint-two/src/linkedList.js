var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  console.log()

  list.addToTail = function(value){
    var newNode = Node(value);
    if (!list.tail) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
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
  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
