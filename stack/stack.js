/*
  Summary: A sequential collection where elements are added at one end and removed from the same end.
  Description:
    1. First-in, last-out (FILO) data structure.
    2. Often implemented on top of a linked list where the head is used for both insertion and removal.
  Notable Uses: Undo history, command history, and queueing.
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

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.length++;
  }

  pop() {
    if (!this.top) {
      return null;
    } else {
      const node = this.top;
      this.top = this.top.next;
      this.length--;
      return node.value;
    }
  }

  peek() {
    return this.top.value;
  }

  isEmpty() {
    if (this.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  clear() {
    this.top = null;
    this.length = 0;
  }

  print() {
    let current = this.top;
    let str = '';
    while (current) {
      str += `${current.value} `;
      current = current.next;
    }
    console.log(str);
  }
}

const stack = new Stack();
stack.push('a');
stack.push('b');
stack.push('c');
stack.print();

console.log('------break------');

console.log(stack.pop()); // c
stack.print();

console.log('------break------');

console.log(stack.peek()); // b

console.log('------break------');

console.log(stack.isEmpty()); // false

console.log('------break------');

stack.clear();
stack.print();