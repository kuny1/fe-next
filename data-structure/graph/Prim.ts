import { getUnDirectedGraph, Graph, Vertex } from './adjacency-list';

/**
 * 最小生成树 -- 普里姆算法
 */

/**
 * MST: Minimum Spanning Tree 最小生成树
 * Prim 算法，也叫：加点法
 * 适合：稠密图（跟边关系不大）
 */
function primGetMST(graph: Graph, start: Vertex) {
    //
    const visited = new Set([start]);
    // 找到距离已知点最近的相邻点
    for (const neighbor of graph.adjList.get(start) || []) {

    }
}

function basic_test() {
    const graph = getUnDirectedGraph();
    const mst = primGetMST(graph, 'V1');
}