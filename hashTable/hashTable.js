/*
  Summary: Unordered collection that maps keys to values using hashing.
  Description:
    1. Stores data as key-value pairs.
    2. Can be seen as an evolution of arrays that removes the limitation of sequential 
        numerical indices and allows using flexible keys instead.
    3. Uses a hash function to map keys to values.
    4. If hashing two or more keys returns same value, this is called hash collision.
    5. A set is a variation of a hash table where the keys are unique.
  Notable Uses: Caching, data partitioning, and data compression.
  Time Complexity (worst):
    1. Insertion: O(n)
    2. Deletion: O(n)
    3. Search: O(n)
    4. Access: O(n)
*/

// Hash Function
var hashFunc = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};


class HashTable {
  constructor() {
    this.limit = 8;
    this.count = 0;
    this.storage = [];
  }

  insert(key, value) {
      let index = hashFunc(key, this.limit);
      let bucket = this.storage[index];

      if (!bucket) {
        bucket = [];
        this.storage[index] = bucket;
      }
      
      let override = false;
      for (let i = 0; i < bucket.length; i++) {
        let tuple = bucket[i];
        if (tuple[0] === key) {
          tuple[1] = value;
          override = true;
        }
      }

      if (!override) {
        bucket.push([key, value]);
        this.count++;

        if (this.count > this.limit * 0.75) {
          this.resize(this.limit * 2);
        }
      }

      return this;
  }

  retrieve(key) {
      let index = hashFunc(key, this.limit);
      let bucket = this.storage[index];

      if (!bucket) {
        return null;
      }

      for (let i = 0; i < bucket.length; i++) {
        let tuple = bucket[i];
        if (tuple[0] === key) {
          return tuple[1];
        }
      }

      return null;
  }

  remove(key) {
    let index = hashFunc(key, this.limit);
    let bucket = this.storage[index];

    if (!bucket) {
      return null;
    }
    
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        bucket.splice(i, 1);
        this.count--;
        if (this.count < this.limit * 0.25) {
          this.resize(this.limit / 2);
        }
      }
      return tuple[1];
    }
  }

  resize(newLimit) {
    let oldStorage = this.storage;
    this.limit = newLimit;
    this.count = 0;
    this.storage = [];

    oldStorage.forEach(bucket => {
      if (!bucket) {
        return;
      }
      for (let i = 0; i < bucket.length; i++) {
        let tuple = bucket[i];
        this.insert(tuple[0], tuple[1]);
      }
    })
    console.log('HashTable Resized');
  }
}

let ht = new HashTable();
ht.insert('hello1', 1);
ht.insert('hello2', 2);
ht.insert('hello3', 3);
ht.insert('hello4', 4);
ht.insert('hello5', 5);
ht.insert('hello6', 6);
ht.insert('hello7', 7);
console.log(ht);