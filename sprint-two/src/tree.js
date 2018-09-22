var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  return _.extend(newTree, treeMethods);
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target, elem) {
  var elem = elem || this;
  var found = false;

  if (elem.value === target) {
    return true;
  } else if (elem.children.length) {
    for (var i = 0, len = elem.children.length; i < len; i++) {
      found = treeMethods.contains(target, elem.children[i]);
      if (found) {
        return found
      };
    }
  }
  return found;
};

treeMethods.removeChildren = function(value) {
  // removes children below value
  // may be able to reuse contains
};

//refactor to include nodes

/*
 * Complexity: What is the time complexity of the above functions?
 */
