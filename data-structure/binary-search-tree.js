/**
 * 左小右大猜数字
 */

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BST {
  root = null;
  insert(val) {
    const node = new Node(val);
    // 如果没有根节点，直接把新节点作为根节点
    if (!this.root) {
      this.root = node;
      return;
    }
    let cur = this.root;
    while (true) {
      if (val < cur.val) {
        //
        if (!cur.left) { cur.left = node; return; }
        // [精髓] 将指针从顶部移动到左侧（ value -，次小）
        // 如果下一轮比较发现，比次小还小，继续往左移
        cur = cur.left;
      } else {
        if (!cur.right) { cur.right = node; return; }
        cur = cur.right;
      }
    }
  }
  // 很像二分查找
  find(val) {
    let cur = this.root;
    while (cur) {
      if (val === cur.val) return cur;
      cur = val < cur.val ? cur.left : cur.right;
    }
    return null;
  }
}
