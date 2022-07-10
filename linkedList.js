class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}


class Single_linked_List {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        let node = new Node(val)

        if (this.head === null) {
            this.head = node;
            this.tail = node;

        } else {
            this.tail.next = node;
            this.tail = node;

        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let curr = this.head
        let prev = null;

        while (curr.next) {
            prev = curr
            curr = curr.next
        }

        prev.next = null;
        this.tail = prev;
        this.length--

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return curr.value

    }


    shift() {

        if (!this.head) return undefined
        let currentHead = this.head;;


        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }

        return currentHead

    }
    unshift(value) {


        let newHead = new Node(value);
        if (!this.head) {
            this.head = newHead;
            this.tail = this.head;
        } else {

            newHead.next = this.head
            this.head = newHead;
        }
        this.length++
        return this
    }

    get(index) {
        let curr = this.head
        if (index >= this.length || index < 0) return null

        for (let i = 0; i < index; i++) {

            curr = curr.next
        }



        return curr
    }

    set(value, index) {

        let curr = this.get(index)
        if (!curr) return false
        curr.value = value

        return true

    }

    insert(value, index) {
        if (index >= this.length || index < 0) return false
        if (index == this.length - 1) {

            return this.push(value)
        }
        if (index == 0) {

            return this.unshift(value)
        }
        let prev = this.get(index - 1)
        let newNode = new Node(value)

        let temp = prev.next

        prev.next = newNode
        newNode.next = temp
        this.length++
        return true
    }
    remove(index) {
        if (index >= this.length || index < 0) return undefined 

        if (index === 0) {
            return this.unshift()
        }
        if (index === this.length - 1) {
            return this.pop()
        }


        let prev = this.get(index - 1)

        prev.next = prev.next.next

        return true
    }

}
let list = new Single_linked_List
console.log(list.push(23).push(12).push(123).push(13).unshift(14))


console.log(list.get(1))

console.log(list.insert(221, 0).remove(1))
console.log(list)