class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
        this.prev = null;

    }
}


class Double_Linked_List {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode;

            this.tail = newNode;
        }
        this.length++

        return this
    }
    pop() {

        if (!this.head) return undefined;

        let ogTail = this.tail
        if (this.head == this.tail) {
            this.tail = null;
            this.head = null;
            return ogTail.val
        }

        this.tail = ogTail.prev
        ogTail.prev = null;
        this.tail.next = null;

        this.length--
        return ogTail

    }

    shift() {
        if (this.head === null) return undefined;
        let oldHead = this.head
        //if length is 1
        if (oldHead === this.tail) {
            this.head = null;
            this.tail = null

        } else {

            //if length is more than 1
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }



        this.length--;
        return oldHead

    }

    unshift(val) {
        let newNode = new Node(val)

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {

            this.head.prev = newNode;
            newNode.next = this.head
            this.head = newNode

        }

        this.length++;
        return this
    }

    get(idx) {
        if (idx >= this.length || idx < 0) return null
        let curr = null
        if (idx > Math.floor(this.length / 2)) {

            curr = this.tail
            let count = 0
            while (count < (this.length - idx)) {
                curr = curr.prev
                count++
            }
        } else {
            curr = this.head
            let count = 0
            while (count < (idx)) {
                curr = curr.next
                count++
            }
        }

        return curr
    }
    set(val, idx) {
        let update = this.get(idx)
        if (update) {

            update.val = val;
            return true
        }

        return false
    }

    insert(val, idx) {
        if (idx === 0) return this.unshift(val);
        if (idx === this.length - 1) return this.push(val)
        let newNode = new Node(val)
        let curr = this.get(idx)

        if (curr) {
            let oldPrev = curr.prev
            newNode.next = curr
            newNode.prev = curr.prev
            curr.prev = newNode
            oldPrev.next = newNode
            return true
        }

        return false
    }
}

list = new Double_Linked_List()
// console.log(list.push(2).push(24).push(22).push(222))
list.push(2).push(24).push(22).push(222)
console.log(list.unshift(45).insert(300, 1))
console.log(list)