class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (this.first == null) {
            this.first = newNode;
            this.last = newNode;
        } else {

            let old = this.first

            this.first = newNode;
            newNode.next = old;
        }
        this.length++
        return this

    }
    pop() {

        if (this.first === null) return undefined
        let remove = this.first
        if (this.first === this.last) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            remove.next = null;
        }


        this.length--
        return remove;
    }

}

let stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)


console.log(stack)
console.log(stack.pop())

console.log(stack)