//static arrays only have a certain amount of data
//bad performance for anything that shifts index

//objs only fault isnt ordered

//linked lists-list that is linked
//JS doesnt have linked lists but java does

//contains a set of nodes
//nodes have two elements 
//      -the value of the data
//      - a pointer to the next node in line

// first node is called head
// last node is called the tail

// linked lists are null terminated after tail comes a null

const basket = ['apples', 'grapes', 'pears'];

//  Linked list: Apples  --> grapes --> pears

// Apples                                  //apples at memory location 8947 points to grapes
// 8947 --> grapes                         //grapes at that location points to pears
//             8742 --> pears              //pears at that memory points to null thus terminating the list
//                         372-->null


//stored independently and ordered can sort it
//can insert just by moving some pointers
//bad for lookups
//you always start at the head and traverse down the list until you get to the memory location you need
//slower than iterating through an array really good at inserting and deleting

//pointer is a reference to an object in memory

// const obj1 = {
//     a: true
// }
// const obj2 = obj1
// console.log(obj2)

//10 ---> 5---> 16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }
// console.log(myLinkedList)

class Node {
    constructor(value) {
        this.value = value,
            this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }
    // prepend
    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head
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
            next: null
        }
        // printList(index)
        if (index >= this.length) {
            return this.append(value);
        }
        const leader = this.traverseToIndex(index - 1)
        const holdingPointer = leader.next
        leader.next = newNode
        newNode.next = holdingPointer;
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

        let before = this.traverseToIndex(index - 1)
        let after = this.traverseToIndex(index + 1)
        before.next = after;
        this.length--;
    }
}
const myLinkedList = new LinkedList(10)

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList()
myLinkedList.insert(2, 99)
myLinkedList.insert(3, 99)
myLinkedList.remove(4
)
myLinkedList.printList()
console.log(myLinkedList)

// Doubly linked list

// links the the node before it as well as after it
// constructor(value) {
//     this.head = {
//         value: value,
//         next: null,
//         prev: null
//     }
//     this.tail = this.head
//     this.length = 1
// }
// append(value) {
//     const newNode = {
//         value: value,
//         next: null,
//         prev: null
//     }

//     this.head.next = newNode
//     this.tail = newNode
//     this.tail.prev = this.head.value
//     this.length++
// }

