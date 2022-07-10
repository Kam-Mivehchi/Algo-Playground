class Node {
    constructor(val, priority) {
        this.value = val;
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.values = [
            new Node(56, 1),
            new Node(29, 2),
            new Node(25, 1),
            new Node(22, 2),
            new Node(88, 3),
            new Node(57, 3),
            new Node(76, 1),
            new Node(74, 5),
            new Node(84, 4),
            new Node(21, 4),
            new Node(54, 5),
            new Node(82, 6),
            new Node(19, 7),
            new Node(86, 10),
            new Node(75, 10),
        ]
    }


    enqueue(val, priority) {
        let newItem = new Node(val, priority)

        this.values.push(newItem);

        this.bubbleUp(newItem)
        return this
    }

    bubbleUp(node) {
        let idx = this.values.length - 1;
        const priority = node.priority;
        while (idx > 0) {

            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx]

            if (priority > parent.priority) break;

            this.values[parentIdx] = node;
            this.values[idx] = parent;
            idx = parentIdx;


        }

    }

    dequeue() {
        let end = this.values.pop();
        const min = this.values[0]
        if (this.values.length > 0) {
            this.values[0] = end;

            this.sinkDown()

        }

        return min;
    }

    sinkDown() {
        const element = this.values[0]
        const length = this.values.length
        let idx = 0

        while (idx < length - 1) {
            let leftIdx = idx * 2 + 1
            let rightIdx = idx * 2 + 2
            let swap = null;
            let left, right;

            if (leftIdx < length) {
                left = this.values[leftIdx]

                if (left.priority < element.priority) {
                    swap = leftIdx
                }
            }
            if (rightIdx < length) {
                right = this.values[rightIdx];
                if ((swap === null && right.priority < element.priority) || (swap !== null && right.priority < left.priority)) {
                    swap = rightIdx
                }
            }

            if (swap === null) break;

            this.values[idx] = this.values[swap]
            this.values[swap] = element;
            idx = swap;

        }

    }



}

let pq = new PriorityQueue()



// for (let i = 0; i < 20; i++) {
//     pq.enqueue(Math.floor(Math.random() * 100), Math.ceil(Math.random() * 10))
// }

const starting = pq
// pq.insert(39)
// pq.insert(33)
// pq.insert(18)
// pq.insert(27)
// pq.insert(12)
// pq.insert(55)
console.log(pq)
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())

// pq.remove()
// console.log(pq)