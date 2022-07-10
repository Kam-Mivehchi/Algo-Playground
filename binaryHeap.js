class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    insert(val) {
        this.values.push(val)
        console.log(this.values)
        // let idx = this.values.length - 1
        // let parentIdx = 0;

        // while (this.values[idx] > this.values[parentIdx]) {
        //     let temp = this.values[parentIdx];
        //     this.values[parentIdx] = this.values[idx];
        //     this.values[idx] = temp;

        //     idx = parentIdx;

        // }

        this.bubbleUp()

        return this
    }

    bubbleUp() {

        let idx = this.values.length - 1;
        const element = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)

            let parent = this.values[parentIdx]

            if (element < parent) {
                break;

            }
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx

        }


    }

    remove() {
        let max = this.values[0]
        let end = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown()
        }
        return max
    }


    sinkDown() {

        let idx = 0;

        const length = this.values.length;
        const element = this.values[0]


        while (idx < length) {
            let leftIdx = idx * 2 + 1
            let rightIdx = idx * 2 + 2
            let left;
            let right;
            let swap = null;

            if (leftIdx < length) {
                left = this.values[leftIdx]
                if (left > element) {
                    swap = leftIdx;
                }
            }
            if (rightIdx < length) {
                right = this.values[rightIdx]
                if ((right > element && swap === null) || (swap !== null && right > left)) {
                    swap = rightIdx;
                }
            }

            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element

            idx = swap
        }

    }
        // sinkDown() {

    //     let idx = 0;

    //     const length = this.values.length;
    //     const element = this.values[0]


    //     while (idx < length) {
    //         let leftIdx = idx * 2 + 1
    //         let rightIdx = idx * 2 + 2
    //         let left = this.values[leftIdx]
    //         let right = this.values[rightIdx]
    //         if (left > element && right > element) {
    //             if (left > right) {

    //                 this.values[leftIdx] = element;
    //                 this.values[idx] = left;
    //                 idx = leftIdx
    //             } else {

    //                 this.values[rightIdx] = element;
    //                 this.values[idx] = right;
    //                 idx = rightIdx
    //             }
    //         } else if (left > element) {

    //             this.values[leftIdx] = element;
    //             this.values[idx] = left;
    //             idx = leftIdx
    //         } else if (right > element) {

    //             this.values[rightIdx] = element;
    //             this.values[idx] = right;
    //             idx = rightIdx
    //         } else {
    //             break;
    //         }
    //     }

    // }

    
}

let heap = new MaxBinaryHeap()
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
console.log(heap)
heap.remove()
console.log(heap)