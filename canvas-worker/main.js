// main.js
const canvas = document.getElementById('main-canvas');

// 1. 创建 Worker 实例
const worker = new Worker('./worker.js', { type: 'module' });

// 2. 将主线程的 Canvas 控制权转移为 OffscreenCanvas
const offscreen = canvas.transferControlToOffscreen();

// 3. 将 OffscreenCanvas 传递给 Worker 
// 注意：第二个参数 [offscreen] 是必须的，表示转移所有权（Transferable）
worker.postMessage({ canvas: offscreen }, [offscreen]);