var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.tail = Node(value);
      list.head = list.tail;
    } else {
      list.tail.next = Node(value);
      list.tail = Node(value);
    }
  };

  list.removeHead = function() {
    if (list.head !== null) {
      var removed = list.head;
      list.head = list.head.next;
      return removed.value;
    } else {
      return null;
    }
  };

  list.contains = function(target, elem) {
    if (list.head === null) {
      return false;
    }
    var elem = elem || list.head;
    if (elem.value === target) {
      return true;
    } else if (elem.next !== null) {
      return list.contains(target, elem.next);
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
