// worker.js
let ctx;
let width = 0;
let height = 0;
let dpr = 1;
const BOX_COUNT = 1000;
const boxes = [];

// 初始化方块数据 (避免在渲染循环中创建对象)
function initBoxes() {
    for (let i = 0; i < BOX_COUNT; i++) {
        boxes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: 8 + Math.random() * 12, // 8-20px
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2,
            hue: Math.random() * 360
        });
    }
}

// 更新方块位置 (核心计算逻辑)
function updateBoxes() {
    for (let i = 0; i < BOX_COUNT; i++) {
        const box = boxes[i];
        
        // 边界反弹
        if (box.x < 0 || box.x > width) box.speedX *= -1;
        if (box.y < 0 || box.y > height) box.speedY *= -1;
        
        // 更新位置
        box.x += box.speedX;
        box.y += box.speedY;
    }
}

// 渲染所有方块
function renderBoxes() {
    ctx.clearRect(0, 0, width, height);
    
    for (let i = 0; i < BOX_COUNT; i++) {
        const box = boxes[i];
        
        // 使用HSL实现彩色渐变
        ctx.fillStyle = `hsla(${box.hue}, 70%, 50%, 0.8)`;
        ctx.fillRect(
            box.x - box.size/2, 
            box.y - box.size/2, 
            box.size, 
            box.size
        );
    }
}

// 主渲染循环
function render() {
    updateBoxes();
    renderBoxes();
    requestAnimationFrame(render);
}

// 消息处理器
onmessage = (e) => {
    const { type, canvas, width: w, height: h, dpr: devicePixelRatio } = e.data;
    
    if (type === 'init') {
        ctx = canvas.getContext('2d');
        width = canvas.width;
        height = canvas.height;
        dpr = devicePixelRatio || 1;
        initBoxes();
        render(); // 启动渲染循环
    } 
    else if (type === 'resize') {
        width = w;
        height = h;
        dpr = devicePixelRatio;
        // 重置方块位置 (避免方块被挤出屏幕)
        initBoxes();
    }
};