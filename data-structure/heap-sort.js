/**
 * ============================================
 * 堆排序算法（Heap Sort）
 * ============================================
 * 思路：利用最大堆，每次取出最大值放到数组末尾
 * 时间复杂度：O(n log n)
 * 空间复杂度：O(1) — 原地排序
 */

class HeapSort {
    /**
     * 堆排序（升序）
     * 步骤：
     * 1. 将无序数组构建成大顶堆
     * 2. 将堆顶元素（最大值）与末尾元素交换
     * 3. 堆大小减1，对堆顶进行下沉调整
     * 4. 重复步骤2-3，直到堆大小为1
     */
    static sort(arr) {
        const n = arr.length;
        if (n <= 1) return arr;

        // 第一步：建堆（从最后一个非叶子节点开始下沉）
        // 最后一个非叶子节点索引 = Math.floor(n/2) - 1
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            HeapSort.heapify(arr, n, i);
        }

        // 第二步：排序
        for (let i = n - 1; i > 0; i--) {
            // 将堆顶（最大值）与当前末尾元素交换
            [arr[0], arr[i]] = [arr[i], arr[0]];
            // 对缩小后的堆进行堆化
            HeapSort.heapify(arr, i, 0);
        }

        return arr;
    }

    /**
     * 下沉堆化（静态方法，原地操作数组）
     * @param {number[]} arr - 数组
     * @param {number} heapSize - 当前堆的大小
     * @param {number} i - 要下沉的节点索引
     */
    static heapify(arr, heapSize, i) {
        while (true) {
            let largest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;

            if (left < heapSize && arr[left] > arr[largest]) {
                largest = left;
            }
            if (right < heapSize && arr[right] > arr[largest]) {
                largest = right;
            }

            if (largest === i) break;

            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            i = largest;
        }
    }
}

console.log('\n=== 堆排序测试 ===');
const arr1 = [3, 1, 4, 1, 5, 9, 2, 6];
console.log('原始数组:', arr1);
HeapSort.sort(arr1);
console.log('排序后:', arr1); // [1, 1, 2, 3, 4, 5, 6, 9]