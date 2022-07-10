class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//linked list with only queue and dequeue
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    // add to the end
    enqueue(val) {
        let addMe = new Node(val);

        if (!this.first) {
            this.first = addMe;
            this.last = addMe;
        } else if (!this.first.next) {
            this.first.next = addMe;
            this.last = addMe;
        } else {
            this.last.next = addMe;
            this.last = addMe;
        }

        this.length++;

        return this



    }

    //remove from beginning

    dequeue() {
        if (!this.first) return null;
        //make variable for first
        let remove = this.first
        //update first and last to 0
        if (!this.first.next) {
            this.first = null;
            this.last = null;
        } else {
            //point the old head to null and change first to its next value
            this.first = this.first.next
            remove.next = null;
        }

        this.length--;

        return remove

    }

}

let queue = new Queue();

console.log(queue.enqueue(1).enqueue(1).enqueue(3).dequeue())