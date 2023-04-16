const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
class Queue {
 queue=null;

  getUnderlyingList() {
let result 
result = this.queue
return result
  }

  enqueue(value) {

    if (this.queue !== null) {
	let new_queue
	new_queue = this.queue
      while (true) {
        if (new_queue.next === null) {
		new_queue.next = new ListNode(value)
          break
        } else {
		new_queue = new_queue.next
		}
      }

    } 
	else {this.queue = new ListNode(value);}
  }

  dequeue() {
	  let first  = this.queue.value;
      this.queue = this.queue.next;
      return first;
  }
}

module.exports = {
  Queue
};
