var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
          // var findTail = function(elem) {
          //   // find tail
          //   if (elem.next !== null) {
          //     findTail(elem.next);
          //   } else {
          //   return elem;
          //   }
          // };
          // list.tail = findTail(list.head);
          // list.tail.next = value;
    if (list.head !== null) {
      list.tail = {value: value, next: null};
    } else {
      //list.head = {value: value, next: null};
      list.head = {value: value, next: list.tail};
    }
  };

  list.removeHead = function() {
    //list.head = list.head.next;
  };

  list.contains = function(target) {
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
