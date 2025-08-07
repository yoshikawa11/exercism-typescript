type Person = string;
type Family = Record<Person, Person[]>;

export function degreesOfSeparation(
  input: Family,
  origin: Person,
  destination: Person,
): number {
  const adj: Record<Person, Person[]> = {};

  // 双方向グラフを構築（親子関係を辺として無向グラフ化）
  for (const [child, parents] of Object.entries(input)) {
    for (const parent of parents) {
      adj[child] ??= [];
      adj[parent] ??= [];
      adj[child].push(parent);
      adj[parent].push(child);
    }
  }

  // origin または destination が存在しなければ未接続
  if (!(origin in adj) || !(destination in adj)) {
    return -1;
  }

  // BFS で最短距離を探索
  const visited = new Set<Person>();
  const queue: [Person, number][] = [[origin, 0]];
  visited.add(origin);

  while (queue.length) {
    const [person, dist] = queue.shift()!;
    if (person === destination) {
      return dist;
    }
    for (const neighbor of adj[person] ?? []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, dist + 1]);
      }
    }
  }

  return -1; // 到達できなかった場合
}
