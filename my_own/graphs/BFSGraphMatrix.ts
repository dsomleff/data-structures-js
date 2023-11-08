declare type WeightedAdjacencyMatrix = number[][] // Number means weight

/**
 * Return the path that we took while looking for a needle
 */
export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number):number[] | null {
    const seen = new Array(graph.length).fill(false); // all visited nodes are false at the beginning
    const prev = new Array(graph.length).fill(-1); // from where we came from to this node

    seen[source] = true;
    const q: number[] = [source]; // our queue of visited nodes

    do {
        const curr = q.shift() as number; // pop up current node from the q

        if (curr === needle) {
            break; // found it!
        }

        const adjacency = graph[curr];
        for (let i = 0; i < adjacency.length; i++) {
            if (adjacency[i] === 0) {
                continue; // no edge at this point
            }

            if (seen[i]) {
                continue;
            }

            seen[i] = true;
            prev[i] = curr;
            q.push(i);
        }
    } while (q.length);

    if (prev[needle] === -1) {
        return null;
    }

    // build it backwards
    let curr = needle;
    const out: number[] = []; // path from the needle to the source

    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr]; // who added me to the search
    }

    return [source].concat(out.reverse());
}

