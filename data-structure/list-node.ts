/**
 * @description: 链表节点
 */
class ListNode<T> {
  constructor(
    public value: T,
    public next: ListNode<T> | null = null,
  ) {}
}

/**
 * @description: 链表构造函数
 */
class LinkedList<T> {
  head: ListNode<T> | null = null;

  // 头部插入 O(1)
  prepend(value: T): void {
    // 创建一个新的节点： 值为 value，下一个节点指向原 head 节点
    // 更新 链表 中的 head 指针
    this.head = new ListNode(value, this.head);
  }
  // 在指定节点后插入 O(1)
  insertAfter(node: ListNode<T>, value: T): void {
    // 创建一个新的节点： 值为 value，next 指向原节点的 next，新节点与前后节点建立了关系
    node.next = new ListNode(value, node.next);
  }
  // 删除指定节点后的节点 O(1)
  removeAfter(node: ListNode<T>): void {
    // 将当前节点的 next 指针指向下下个节点，断开与下一个节点的关系。这样原来的 node.next 再也无法被访问到了，==实现了删除操作
    if (node.next) node.next = node.next.next;
  }
  /**
   * 
   * @param predicate: 业务定义：可以是 (val) => val === 10，也可以是 (val) => val > 10
   * @returns 
   * @description 查找 O(n)
   * 
   */
  find(predicate: (value: T) => boolean): ListNode<T> | null {
    let cur = this.head;
    while (cur) {
      if (predicate(cur.value)) return cur;
      cur = cur.next;
    }
    return null;
  }
}
