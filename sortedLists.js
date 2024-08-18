/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let addList = list1.concat(list2);
    let sortedList = addList.sort();
    return sortedList;
};

console.log(mergeTwoLists([1,2,3], [3,2,4]));