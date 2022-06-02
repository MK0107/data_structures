/* 
  Summary: linked list implementation which is a linear collection of elements ordered by links instead of physical placement in memory.
  Description: 
    1. Each element is called a node - first being head and last being tail.
    2. Nodes are sequential - each node stores a reference (pointer) to one or more adjacent nodes.
  Notable Uses: Implementation of stacks, queues, and graphs.
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

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  insert(index, value) {
    const node = new Node(value);
    if (index < this.length) {
      let current = this.head;
      let previous = null;
      let i = 0;
      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }
      node.next = current;
      previous.next = node;
    }
    this.length++;
  }

  delete(index) {
    if (index < this.length) {
      let current = this.head;
      let previous = null;
      let i = 0;
      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }
      previous.next = current.next;
    }
    this.length--;
  }

  search(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  print() {
    let current = this.head;
    let string = '';
    while (current) {
      string += current.value + ' ';
      current = current.next;
    }
    console.log(string);
  }

  reverse() {
    let current = this.head;
    let previous = null;
    while (current) {
      const temp = current.next;
      current.next = previous;
      previous = current;
      current = temp;
    }
    this.head = previous;
  }

}

const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.print(); // 1 2 3

console.log('------break------');

ll.insert(2, 'X');
ll.print(); // 1, 2, X, 3

console.log('------break------');

ll.delete(2);
ll.print(); // 1, 2, 3

console.log('------break------');

console.log(ll.search(3)); // true
console.log(ll.search(4)); // false

console.log('------break------');

ll.reverse();
ll.print(); // 3, 2, 1