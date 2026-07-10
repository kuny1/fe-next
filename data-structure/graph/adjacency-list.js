/**
 * 用普通对象表示有向图（无向图）
 */
const graph_use_object = {
  A: ["B", "C"],
  B: ["D"],
  C: ["D"],
  D: [],
};

/**
 *
 */
class Graph {
  constructor(isDirected = false) {
    this.adjList = new Map(); // 邻接表存储
    this.isDirected = isDirected;
  }
  // 添加顶点
  addVertex(vertex) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    }
  }
  // 添加边
  addEdge(v1, v2, weight) {
    // 确保两个顶点都存在
    if (!this.adjList.has(v1)) this.addVertex(v1);
    if (!this.adjList.has(v2)) this.addVertex(v2);
    // 边的信息，可存储权重等
    const edge = weight !== undefined ? { node: v2, weight } : v2;
    //
    this.adjList.get(v1).push(edge);
    // 无向图时，反向也加一条
    if (!this.isDirected) {
        const reverseEdge = weight !== undefined ? { node: v1, weight } : v1;
        this.adjList.get(v2).push(reverseEdge);
    }
  }
  // 获取某个顶点的所有邻居
  getNeighbors(vertex) {
    this.adjList.get(vertex) || [];
  }
  // 打印图（调试用）
  print() {
    for (let [vertex, neighbors] of this.adjList) {
      const neighborStr = neighbors
        .map((n) => (typeof n === "object" ? `${n.node}(${n.weight})` : n))
        .join(", ");
      console.log(`${vertex} -> ${neighborStr}`);
    }
  }
}


exports.Graph = Graph;
