class DoubleLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head
        this.length = 1;
    }
    append(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }
    // prepend
    prepend(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        }

        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length++;
        return this;
    }


    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(array)
        return array
    }
    insert(index, value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        // printList(index)
        if (index >= this.length) {
            return this.append(value);
        }
        const leader = this.traverseToIndex(index - 1)

        const follower = leader.next  // holds value that is currently at the index
        newNode.prev = leader;
        newNode.next = follower;
        leader.next = newNode
        follower.prev = newNode
        return this.printList()
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next
            counter++;
        }
        return currentNode
    }
    remove(index) {

        const before = this.traverseToIndex(index - 1)
        const curr = before.next;
        const after = curr.next;
        before.next = after;
        after.prev = before;
        this.length--;
    }
    reverse() {

        //switching previous to next
        //firs
        if (!this.head.next) {
            return this.head
        }
        let first = this.head;
        this.tail = this.head
        let second = first.next;
        while (second) {
            const temp = second.next
            second.next = first
            first = second
            second = temp

        }
        this.head.next = null;
        this.head = first;
        return this.printList()
    }
}
const doubleLinkedList = new DoubleLinkedList(10)
console.log(doubleLinkedList)

doubleLinkedList.append(5);
doubleLinkedList.append(16);
doubleLinkedList.prepend(1);
doubleLinkedList.printList()
doubleLinkedList.insert(1, 99)
// doubleLinkedList.insert(3, 99)
doubleLinkedList.reverse()
// doubleLinkedList.printList()
console.log(doubleLinkedList)

//takes more memory

//but allows traversal forward and bacckwards
//deleting a previous node is better on double linked lists
//use singly linked when memory is expensive and you want fast insertion or deletion from front not searching

