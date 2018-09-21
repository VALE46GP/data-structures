

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) {
    this._storage.set(index, [k, v]);
  } else if (this._storage[index][0] !== k) {
    this._storage[index] = [this._storage[index], [k, v]];
  } else {
    this._storage.set(index, [k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!Array.isArray(this._storage[index][0])) {
    return this._storage.get(index)[1];
  } else {
    // return this._storage[index].filter(arr => arr[0] === k)[1];
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, [undefined, undefined]);
  // May need to refactor to create hashtables with empty arrays at each index 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


