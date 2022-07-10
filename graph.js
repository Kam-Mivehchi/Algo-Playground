

class undirectedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    //does not deal with duplicates will overwrite
    addVertex(name) {
        if (!this.adjacencyList[name]) this.adjacencyList[name] = []

        return this.adjacencyList
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
        return this.adjacencyList
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(item => item !== v1)
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(item => item !== v2)
        // let long = this.adjacencyList[v1].length > this.adjacencyList[v2].length ? this.adjacencyList[v1].length : this.adjacencyList[v2].length
        // for (let i = 0; i < long; i++) {
        //     if (this.adjacencyList[v2][i] === v1) {
        //         this.adjacencyList[v2].splice(i, 1)
        //     }
        //     if (this.adjacencyList[v1][i] === v2) {
        //         this.adjacencyList[v1].splice(i, 1)
        //     }
        // }
        return this.adjacencyList
    }
    removeVertex(vertex) {
        //list of items we have to remove edges from
        let connections = this.adjacencyList[vertex];

        for (let i = 0; i < connections.length; i++) {
            this.removeEdge(connections[i], vertex)
        }
        delete this.adjacencyList[vertex];
        return this.adjacencyList
    }

    dfs(vertex, visited = {}, results = []) {
        if (!vertex) return


        results.push(vertex)
        visited[vertex] = true;
        for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
            if (!visited[this.adjacencyList[vertex][i]]) {
                this.dfs(this.adjacencyList[vertex][i], visited, results)
            }
        }

        return results
    }
}
//      {
//          dog: ['cat', 'mouse'],
//          cat: ['dog', 'mouse'],
//          mouse: ['dog', 'cat']
//      }
let graph = new undirectedGraph()
// console.log(graph.addVertex('dog'))
// console.log(graph.addVertex('cat'))
// console.log(graph.addVertex('mouse'))
// console.log(graph.addEdge('dog', 'cat'))
// console.log(graph.addEdge('dog', 'mouse'))
// console.log(graph.addEdge('mouse', 'cat'))
// // console.log(graph.removeEdge('mouse', 'cat'))
// // console.log(graph.removeEdge('dog', 'cat'))
// // console.log(graph.removeEdge('dog', 'mouse'))
// // console.log(graph.removeEdge('mouse', 'cat'))
// // console.log(graph.removeVertex('cat'))
// // console.log(graph.removeVertex('dog'))
// console.log(graph.dfs('dog'))
let values = ['A', 'B', 'C', 'D', 'E', 'F']
for (let i = 0; i < values.length; i++) {
    graph.addVertex(values[i])
}
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('C', 'E')
graph.addEdge('D', 'E')
graph.addEdge('D', 'F')
graph.addEdge('E', 'F')
console.log(graph.adjacencyList)
// Depth First search
