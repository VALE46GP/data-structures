var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return _.extend(newTree, treeMethods);
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push({value: value, children: []});
};

treeMethods.contains = function(target, elem) {
  var elem = elem || this;
  var found = false;
  if (elem.value === target) {
    found = true;
  } else if (elem.children.length) {
    for (var i = 0, len = elem.children.length; i < len; i++) {
      treeMethods.contains(elem.children[i]);
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
