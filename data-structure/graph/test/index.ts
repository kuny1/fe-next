//
import { Graph } from '../adjacency-list';
function basic_test() {
  const g = new Graph(true);
  g.addEdge("A", "B", 5);
  g.addEdge("A", "C", 2);
  g.addEdge("B", "D", 1);
  g.addEdge("C", "D", 8);
  g.print();
  // 输出：
  // A -> B(5), C(2)
  // B -> D(1)
  // C -> D(8)
  // D ->
}

//
basic_test();
