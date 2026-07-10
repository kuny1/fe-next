import { Graph, Vertex } from './adjacency-list';

/**
 * 
 * @param {*} graph 
 * @param {*} start 
 * @returns 
 * @description 一条道走到黑
 */
function dfs(graph: Graph, start: Vertex) {
  const visited = new Set();
  const result: Vertex[] = [];
  function traverse(v: Vertex) {
    visited.add(v);
    result.push(v);
    for (const neighbor of graph.adjList.get(v) || []) {
      const next = typeof neighbor === "object" ? neighbor.node : neighbor;
      if (!visited.has(next)) {
        traverse(next);
      }
    }
  }
  traverse(start);
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
  const result = dfs(g, "A");
  console.warn(result);
}

basic_test();
