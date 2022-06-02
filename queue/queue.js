/*
  Summary: A sequential collection where elements are added at one end and removed from the other end.
  Description:
    1. First in, first out (FIFO) data structure.
    2. Similar to a linked list the first (last added) is tail and the last (next to be removed) is called the head.
  Notable Uses: CPU scheduling, job scheduling, and queueing.
  Time Complexity (worst):
    1. Insertion: O(1)
    2. Deletion: O(1)
    3. Search: O(n)
    4. Access: O(n)
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
  }
  
  dequeue() {
    if (!this.first) {
      return null;
    } else {
      const node = this.first;
      this.first = this.first.next;
      this.length--;
      return node.value;
    }
  }

  peek() {
    return this.first.value;
  }

  isEmpty() {
    if (this.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  clear() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  print() {
    let current = this.first;
    let string = '';
    while (current) {
      string += current.value + ' ';
      current = current.next;
    }
    console.log(string);
  }
}

const queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.print();

console.log('------break------');

console.log(queue.dequeue()); // a
queue.print();

console.log('------break------');

console.log(queue.peek()); // b

console.log('------break------');

console.log(queue.isEmpty()); // false

console.log('------break------');

queue.clear();
queue.print();