/**
 * 用普通对象表示有向图（无向图）
 */
export const graph_use_object = {
  A: ["B", "C"],
  B: ["D"],
  C: ["D"],
  D: [],
};

export type Vertex = string;
export type Edge = { node: string, weight: number } | string;

/**
 *
 */
export class Graph {
  public adjList: Map<Vertex, Edge[]>;
  private isDirected: boolean;
  constructor(isDirected = false) {
    this.adjList = new Map(); // 邻接表存储
    this.isDirected = isDirected;
  }
  // 添加顶点
  addVertex(vertex: Vertex) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    }
  }
  // 添加边
  addEdge(v1: Vertex, v2: Vertex, weight: number) {
    // 确保两个顶点都存在
    if (!this.adjList.has(v1)) this.addVertex(v1);
    if (!this.adjList.has(v2)) this.addVertex(v2);
    // 边的信息，可存储权重等
    const edge: Edge = weight !== undefined ? { node: v2, weight } : v2;
    //
    this.adjList.get(v1)!.push(edge);
    // 无向图时，反向也加一条
    if (!this.isDirected) {
      const reverseEdge = weight !== undefined ? { node: v1, weight } : v1;
      this.adjList.get(v2)!.push(reverseEdge);
    }
  }
  // 获取某个顶点的所有邻居
  getNeighbors(vertex: Vertex) {
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


export const getUnDirectedGraph = function () {
  const graph = new Graph(false);
  // v1-v2-v5-v6
  graph.addEdge("V1", "V2", 6);
  graph.addEdge("V2", "V5", 3);
  graph.addEdge("V5", "V6", 6);
  // v1-v4-v6
  graph.addEdge("V1", "V4", 5);
  graph.addEdge("V4", "V6", 2);
  // v1-v3-xxx
  graph.addEdge("V1", "V3", 1);
  graph.addEdge("V3", "V2", 5);
  graph.addEdge("V3", "V4", 4);
  graph.addEdge("V3", "V5", 6);
  graph.addEdge("V3", "V6", 4);
  return graph;
};
