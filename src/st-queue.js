const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.linkedList = null;
  }

  getUnderlyingList() {
    return this.linkedList;
  }

  enqueue(value) {
    if (!this.linkedList) {
      return this.linkedList = new ListNode(value);
    }

    let current = this.linkedList;
    while (current) {
      if (!current.next) {
        return current.next = new ListNode(value);
      } else {
        current = current.next;
      }
    }
  }

  dequeue() {
    if (!this.linkedList) return null;

    let firstValue = this.linkedList.value;
    this.linkedList.value = this.linkedList.next.value;
    this.linkedList.next = this.linkedList.next.next;
    return firstValue;
  }
}
