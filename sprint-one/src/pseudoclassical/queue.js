var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.first = 0;
  this.last = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.last] = value;
  this.last++;
};

Queue.prototype.dequeue = function() {
  if (Object.keys(this.storage).length > 0) {
    var removed = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return removed;
  }
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};


