/**
 * @description: 数组操作示例
 */
const arr: number[] = [10, 20, 30];
arr[1] = 25; // 随机访问 O(1)
arr.push(40); // 末尾添加 O(1) 均摊
arr.splice(1, 0, 15); // 中间插入 O(n)

console.warn(arr);

