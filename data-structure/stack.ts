class Stack<T> {
  private items: T[] = [];

  push(item: T): void {        // O(1)
    this.items.push(item);
  }

  pop(): T | undefined {       // O(1)
    return this.items.pop();
  }

  /**
   * @returns 
   * @description 在保持结构完整的前提下，获得对顶端元素的知情权
   */
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  get size(): number {
    return this.items.length;
  }
}