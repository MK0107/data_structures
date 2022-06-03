/*
  Summary: A data structure that stores a hierarchical collection of values.
  Description:
    1. 

  Notable Uses: File systems, directories, and comment threads.
  Time Complexity (worst): varies for different kinds of trees.
*/

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.parent = null;
  }

  setParent(value) {
    let node = new Tree(value);
    this.parent = node;
  } 

  addChild(value) {
    let node = new Tree(value);
    node.setParent(this);
    this.children.push(node);
    return node;
  }  

  removeChild(value) {
    if (this.children.length === 0) {
      return null;
    }
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].value === value) {
        this.children.splice(i, 1);
        return this.children[i];
      }
    }
  }

  contains(value) {
    if (this.value === value) {
      return true;
    }
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(value)) {
        return true;
      }
    }
    return false;
  }

  traverse() {
    debugger;
    if (this.children.length === 0) {
      return this.value;
    }
    let result = '';
    for (let i = 0; i < this.children.length; i++) {
      result += this.children[i].traverse() + ' ';
    }
    return result;
  }

  traverseDepthFirstPreOrder() {

  }

  traverseDepthFirstPostOrder() {

  }

  traverseDepthFirstInOrder() {
  }

  traverseBreadthFirst() {
  }

  size() {
  }

  isBalanced() {
  }

  min() {
  }

  max() {
  }

  forEach(cb) {
  }
}

var root = new Tree(1);
var branch2 = root.addChild(2);
var branch3 = root.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);
console.log(root.traverse());