class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeNodes(head) {
  let dummy = new ListNode(0); // 新的头节点
  let current = dummy; // 指向合并后链表的当前节点
  let sum = 0; // 用于计算和

  let node = head.next; // 跳过头节点（值为0）

  while (node) {
    if (node.val === 0) {
      if (sum > 0) { // 只有在 sum > 0 时才添加新的节点
        current.next = new ListNode(sum);
        current = current.next; // 更新当前节点
        sum = 0; // 重置 sum
      }
    } else {
      sum += node.val; // 累加当前值
    }
    node = node.next; // 移动到下一个节点
  }

  return dummy.next; // 返回合并后链表的头节点
}

// 示例用法
const head = new ListNode(0, new ListNode(3, new ListNode(1, new ListNode(0, new ListNode(4, new ListNode(5, new ListNode(2, new ListNode(0))))))));
const mergedHead = mergeNodes(head);

// 打印结果
let current = mergedHead;
while (current) {
  console.log(current.val); // 输出合并后的节点值
  current = current.next;
}