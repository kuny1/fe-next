const { Graph } = require("./adjacency-list");
/**
 *
 * @param {*} graph
 * @param {*} start
 * @returns
 * @description 层层推进
 */
function bfs(graph, start) {
  //
  const result = [];
  // 第 0 层
  const visited = new Set([start]);
  const queue = [start];
  while (queue.length > 0) {
    // 当前点 → 已记录
    const v = queue.shift();
    // 改为 const v = queue.pop() 就是深度优先（后进先出，Stack）
    // const v = queue.pop();
    result.push(v);
    // 传播至下一层：如果是初始状态，则由 A 传播到下一层：B / C
    for (const neighbor of graph.adjList.get(v) || []) {
      const next = typeof neighbor === "object" ? neighbor.node : neighbor;
      if (!visited.has(next)) {
        visited.add(next);
        // 从 A 出发后，queue 变成了 [B, C]
        queue.push(next);
      }
    }
  }
  return result;
}

//
function basic_test() {
  const g = new Graph(true);
  g.addEdge("A", "B", 5);
  g.addEdge("A", "C", 2);
  g.addEdge("B", "D", 1);
  g.addEdge("C", "D", 8);
  //
  const result = bfs(g, "A");
  console.warn(result);
}

basic_test();
