var BinarySearchTree = function(value) {
  var obj = Object.create(binarySearchTree.prototype);
  obj.value = value;
  obj.left = {};
  obj.right = {};
  return obj;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value < this.value) {
    // check for children.. if none, define.. if yes, recursion with invoke
    this.left = BinarySearchTree(value);
  } else if (value > this.value) {
    this.right = BinarySearchTree(value);
  }


};

BinarySearchTree.prototype.contains = function() {

};

BinarySearchTree.prototype.depthFirstLog = function() {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
