/**
 * ============================================
 * 堆数据结构设计与堆排序算法（JavaScript）
 * ============================================
 * 参考：堆是完全二叉树，用数组实现（为了简便，下标从 1开始 ）
 * 【数组表示法】由于堆是完全二叉树，可用数组紧凑存储。对于索引 i：
  - 父节点索引：Math.floor(i / 2)
  - 左子节点索引：2 * i
  - 右子节点索引：2 * i + 1
 */

class MaxHeap {
  constructor(capacity = Infinity) {
    this.data = [null]; // 存储堆元素
    this.capacity = capacity; // 最大容量
  }
  /**
   * 上浮操作（Sift Up）
   * 将索引 i 处的元素向上调整，恢复堆序性质
   * 用于：插入新元素后
   * 时间复杂度：O(log n)
   */
  _siftUp(i) {
    //
    while (i > 1) {
      //
      const parentIdx = this.parent(i);
      // 如果当前节点不大于父节点，堆序已满足，停止
      if (this.data[i] <= this.data[parentIdx]) break;
      // 否则：交换当前节点与父节点
      [this.data[i], this.data[parentIdx]] = [
        this.data[parentIdx],
        this.data[i],
      ];
      // 对交换后的父节点，继续调整堆序
      i = parentIdx;
    }
  }
  /**
   * 下沉操作（Sift Down）
   * 将索引 i 处的元素向下调整，恢复堆序性质
   * 用于：删除堆顶后，或建堆时
   * 时间复杂度：O(log n)
   */
  _siftDown(i) {
    while (true) {
      const left = this.leftChild(i);
      const right = this.rightChild(i);
      let largest = i;
      // 找出当前节点、左子节点、右子节点中的最大值
      if (left <= this.size && this.data[left] > this.data[largest]) {
        largest = left;
      }
      if (right <= this.size && this.data[right] > this.data[largest]) {
        largest = right;
      }
      // 如果最大值就是当前节点，说明堆序已满足
      if (largest === i) break;
      // 交换当前节点与较大的子节点
      [this.data[i], this.data[largest]] = [this.data[largest], this.data[i]];
      i = largest;
    }
  }

  /**
   * 插入元素
   * 时间复杂度：O(log n)
   */
  insert(value) {
    if (this.isFull()) {
      throw new Error("Heap is full");
    }
    // 将新元素放到数组末尾（对应示例图中的 10个元素，第 11个元素初始放到 5的右子树 的位置）
    this.data.push(value);
    /**
     * 目标：上浮调整成堆结构
     * 🌰：示例图中的堆，假设来了一个 index=11 的新元素 20
     * - 20 作为叶子节点，直接满足堆性质
     * - 因为 index=11 的加入，index=5 持有的堆发生了改变，可能需要调整
     * - 调整的方法就是将 index=11 的元素尝试上浮
     */
    this._siftUp(this.size);
  }

  /**
   * 提取堆顶元素（删除并返回）
   * 时间复杂度：O(log n)
   */
  extract() {
    if (this.isEmpty()) {
      throw new Error("Heap is empty");
    }
    const max = this.data[1];
    // 用最后一个元素替换堆顶
    const last = this.data.pop();
    if (!this.isEmpty()) {
      this.data[1] = last;
      this._siftDown(1);
    }
    return max;
  }

  /**
   * 原地建堆（Heapify）
   * 从最后一个非叶子节点开始，依次向下堆化
   * 时间复杂度：O(n)
   */
  buildHeap(arr) {
    this.data = [null, ...arr];
    // 最后一个非叶子节点的索引：Math.floor(n/2)
    for (let i = Math.floor(this.size / 2); i > 0; i--) {
      this._siftDown(i);
    }
  }

  // 其他辅助方法
  /**
   * 查看堆顶元素（不删除）
   * 时间复杂度：O(1)
   */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.data[1];
  }

  /** 获取当前堆的大小 */
  get size() {
    return this.data.length - 1;
  }
  /** 判断堆是否为空 */
  isEmpty() {
    return this.size === 0;
  }

  /** 判断堆是否已满 */
  isFull() {
    return this.size >= this.capacity;
  }
  /** 获取父节点索引 */
  parent(i) {
    return Math.floor(i / 2);
  }
  /** 获取左子节点索引 */
  leftChild(i) {
    return 2 * i;
  }
  /** 获取右子节点索引 */
  rightChild(i) {
    return 2 * i + 1;
  }
}



function test_batch() {
  const heap = new MaxHeap(10);
  heap.buildHeap([7, 19, 18, 27, 53, 30, 51, 48, 48, 60]);
  console.warn(heap);
}

/**
 * @description 一个一个值进行操作
 */
function test_sbs() {
  //
  const heap = new MaxHeap(10);
  //
  heap.insert(7);
  heap.insert(19);
  heap.insert(18);
  heap.insert(27);
  heap.insert(53);
  heap.insert(30);
  heap.insert(51);
  heap.insert(48);
  heap.insert(48);
  heap.insert(60);
  //
  heap.extract();
  heap.extract();
  heap.extract();
  heap.extract();
  heap.extract();
  heap.extract();
  heap.extract();
  heap.extract();
  heap.extract();
  heap.extract();
  heap.extract();
  heap.extract();
  heap.extract();
}


//
test_batch();
