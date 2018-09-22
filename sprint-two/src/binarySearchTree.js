var BinarySearchTree = function(value) {
  var obj = Object.create(BinarySearchTree.prototype);
  obj.value = value;
  return obj;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value < this.value) {
    if (this.hasOwnProperty('left')) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  } else if (value > this.value) {
    if (this.hasOwnProperty('right')) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (value < this.value) {
    if (this.hasOwnProperty('left')) {
      return this.left.contains(value);
    }
  } else if (value > this.value) {
    if (this.hasOwnProperty('right')) {
      return this.right.contains(value);
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.hasOwnProperty('left')) {
    this.left.depthFirstLog(cb);
  }
  if (this.hasOwnProperty('right')) {
    this.right.depthFirstLog(cb);
  }
};

//test for later: what to do if the tree already contains the same insert value


/*
 * Complexity: What is the time complexity of the above functions?
 */
