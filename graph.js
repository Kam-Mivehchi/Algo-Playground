

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

    dfsRecursive(vertex, visited = {}, results = []) {
        if (!vertex) return null;


        results.push(vertex)
        visited[vertex] = true;
        // for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
        //     if (!visited[this.adjacencyList[vertex][i]]) {
        //         this.dfs(this.adjacencyList[vertex][i], visited, results)
        //     }
        // }
        this.adjacencyList[vertex].forEach(neighbor => {
            if (!visited[neighbor]) {
                this.dfsRecursive(neighbor, visited, results)
            }
        })

        return results
    }

    dfsIterative(vertex) {
        let stack = []
        let results = []
        let visited = {}
        let list = this.adjacencyList
        stack.push(vertex)
        visited[vertex] = true
        while (stack.length) {
            let current = stack.pop()
            results.push(current)


            list[current].forEach(neighbor => {
                if (!visited[neighbor]) {

                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
            // if (!visited[current]) {
            //     results.push(current)
            //     visited[current] = true
            //     list[current].forEach(neighbor => {


            //         stack.push(neighbor)

            //     })
            // }
        }
        return results

    }

    bfsIterative(vertex) {
        let queue = [vertex]
        let result = []
        let visited = {}
        visited[vertex] = true

        while (queue.length) {
            let current = queue.shift()
            result.push(current)
            this.adjacencyList[current].forEach(neighbor => {
                if (!visited[neighbor]) {
                    queue.push(neighbor)
                    visited[neighbor] = true
                }
            })


        }
        return result
    }
    bfsIterative(vertex, visited = {}, results = []) {


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
console.log(graph.dfsRecursive('A'))
console.log(graph.dfsIterative('A'))
console.log(graph.bfsIterative('A'))
// Depth First search

