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

  removeLast() {
    if (this.head == null) {
      return null
    } else if (this.head.next == null) {
      this.head = null
    } else {
      let node = this.head
      while (node.next) {
        if (node.next.next == null) {
          node.next = null
        } else {
          node = node.next
        }
      }
    }
  }

  insertLast(data) {
    const last = this.getLast()

    if (last) {
      last.next = new Node(data)
    } else {
      this.head = new Node(data)
    }
  }

  getAt(index) {
    let counter = 0
    let node = this.head
    while (node) {
      if (counter === index) {
        return node
      }

      counter ++
      node = node.next
    }
    return null
  }

  removeAt(index) {
    if (!this.head) {
      return null
    }

    if (index == 0) {
      this.head = this.head.next
      return
    }

    let previous = this.getAt(index - 1)
    let link = this.getAt(index + 1)
    previous.next = link

  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data)
    }
    if (index === 0) {
      this.head = new Node(data, this.head)
    } else {
      let oldNode = this.getAt(index)
      let previous = this.getAt(index - 1)
      if (oldNode) {
        previous.next = new Node(data, oldNode)
      } else {
        this.insertLast(data)
      }
    }
  }

  forEach(func) {
    const len = this.size()
    for( let i = 0; i<len; i++) {
      let node = this.getAt(i)
      func(node)
    }
  }
}

module.exports = { Node, LinkedList };
