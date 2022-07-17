class PriorityQueue {
    constructor() {
        this.values = [];

    }

    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort()
    }
    dequeue() {
        return this.values.shift()
    }


    sort() {
        //sorting from highest to lowest so we can just pop off the smallest
        this.values.sort((a, b) => {
            a.priority - b.priority
        })
    }
}


class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }
    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({ vertex: v2, weight: weight })
        this.adjacencyList[v2].push({ vertex: v1, weight: weight })
    }
    dijkstra(start, end) {
        let listKeys = Object.keys(this.adjacencyList);
        let distances = {}
        let vertices = new PriorityQueue()
        let previous = {}
        let smallest
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                vertices.enqueue(vertex, 0)
                distances[vertex] = 0;
            } else {
                distances[vertex] = Infinity;

                vertices.enqueue(vertex, Infinity)
            }
            previous[vertex] = null;
        }
        console.log(distances, vertices, previous);

        while (vertices.values.length) {


            smallest = vertices.dequeue().val;

            if (smallest === end) {
                //build the path to return
            }

            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][neighbor]
                    console.log(nextNode)
                    //calculate the distance to the next node
                    let candidate = distances[smallest] + nextNode.weight;
                    console.log(candidate)

                    if (candiate < distances[nextNode.node]) {

                    }

                }
            }




        };


        console.log(smallest)

    }


}

let graph = new WeightedGraph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addEdge("A", "B", 4)
graph.addEdge("A", "C", 2)
graph.addEdge("B", "E", 3)
graph.addEdge("C", "D", 2)
graph.addEdge("C", "F", 4)
graph.addEdge("D", "E", 3)
graph.addEdge("D", "F", 1)
graph.addEdge("E", "F", 1)

// console.log(graph.adjacencyList)
console.log(graph.dijkstra('A', 'C'))


// shape

let pq = new PriorityQueue()
pq.enqueue("A", 4)
pq.enqueue("D", 3)
pq.enqueue("F", 1)

// console.log(pq)


