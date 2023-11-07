declare type GraphEdge = {to: number, weight: number};
declare type WeightedAdjacencyList = GraphEdge[][];

function hasVisited(seen: boolean[], distances: number[]): boolean {
   return seen.some((s, i) => !s && distances[i] < Infinity);
}

function getLowestUnvisited(seen: boolean[], distances: number[]): number {
    let idx = -1;
    let lowestDistance = Infinity;

    for (let i = 0; i < seen.length; i++) {
        if (seen[i]) {
            continue;
        }

        if (lowestDistance > distances[i]) {
            lowestDistance = distances[i];
            idx = i;
        }
    }

    return idx;
}

export default function dijkstra_list(source: number, sink: number, arr: WeightedAdjacencyList): number[] {
    const seen = new Array(arr.length).fill(false);
    const prev = new Array(arr.length).fill(-1);
    const distances = new Array(arr.length).fill(Infinity);
    distances[source] = 0;

    while (hasVisited(seen, distances)) {
        const curr = getLowestUnvisited(seen, distances);
        seen[curr] = true;

        const adj = arr[curr];

        for (let i = 0; i < adj.length; i++) {
            const edge = adj[i];
            if (seen[edge.to]) {
                continue;
            }

            const distance = distances[curr] + edge.weight;
            if (distance < distances[edge.to]) {
                distances[edge.to] = distance;
                prev[edge.to] = curr;
            }
        }
    }

    const out: number[] = [];
    let curr = sink;

    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    out.push(source);
    return out.reverse();
}
