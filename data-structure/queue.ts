class Queue<T> {
  private items: T[] = [];

  /**
   * 
   * @param item 
   * @description 入队列
   */
  enqueue(item: T): void {    // O(1)
    this.items.push(item);
  }

  /**
   * 
   * @returns 
   * @description 出队列
   */
  dequeue(): T | undefined {  // 原生 shift 是 O(n)，实际工程可用 “双向链表” 实现 O(1)
    return this.items.shift();
  }

  get size(): number {
    return this.items.length;
  }
}