var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {5
    if (list.head === null) {
      list.tail = {value: value, next: null};
      list.head = list.tail;
    } else {
      list.tail.next = {value: value, next: null};
      list.tail = {value: value, next: null};
    }
  };

  list.removeHead = function() {
    var removed = list.head;
    list.head = list.head.next;
    return removed.value;
  };

  list.contains = function(target, elem) {
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
