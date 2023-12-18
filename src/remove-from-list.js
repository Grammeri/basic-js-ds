const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // Creating a dummy head node that points to the start of the list
  let dummy = new ListNode(-1);
  dummy.next = l;

  // Initializing current node to traverse through the list
  let current = dummy;

  // Traversing the list
  while (current.next !== null) {
    // If the next node needs to be removed
    if (current.next.value === k) {
      current.next = current.next.next; // Skip the node with value k
    } else {
      // Move to the next node if no deletion is required
      current = current.next;
    }
  }

  // Return the updated list, excluding the dummy head node
  return dummy.next;
}

module.exports = {
  removeKFromList
};
