// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next=null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
  }

  size() {
    let count = 0
    let node = this.head
    while(node) {
      count += 1
      node = node.next
    }
    return count
  }

  getFirst() {
    return this.head
  }

  getLast() {
    if (!this.head) {
      return null
    }
    let node = this.head
    while (node) {
      if (node.next != null) {
        node = node.next
      } else {
        return node
      }
    }
    return node
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    this.head = this.head.next
  }
}

module.exports = { Node, LinkedList };
