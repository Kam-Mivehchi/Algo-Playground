// each tree has a root element at the top
//then the root has children these are known as siblings
//if the root or child has more children it is known as the parent
//anything without children is known as a leaf


//binary tree
//can only have 1,0,2 nodes
//each child has one parent
// each row has double the nodes of the last in a perfect tree
//in a perfect binary tree the sum of the last row of nodes is equal to the rest of the nodes -1
//over half the stack is in the last row
//O(logN)

class Node {
    constructor(value) {

        this.value = value,
            this.left = null,
            this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null; //first node root 
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    //Left
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left
                }
                else {
                    //right
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }

    }
    lookup(value) {
        let currentNode = this.root
        if (!this.root) {
            return false
        }
        while (currentNode) {
            if (value > currentNode.value) {
                currentNode = currentNode.right
            } else if (value < currentNode.value) {
                //Left
                currentNode = currentNode.left
            } else if (value === currentNode.value) {
                return currentNode
            } else {
                return false
            }

        }
    }
    remove(value) {
        let currentNode = this.root
        if (!this.root) {
            return false
        }
        while (currentNode) {
            if (value === currentNode.right) {
                let temp = currentNode

                currentNode.right = temp.right
                curren
            } else if (value === currentNode.left) {
                //Left
                currentNode = currentNode.left
            } else if () {

            } else {
                return false
            }
        }
    }
}

const tree = new BinarySearchTree;
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.lookup(9)

//target
//                9
//           4          10
//        1     6   15     170
console.log(tree.lookup(91))
JSON.stringify(traverse(tree.root))
function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null :
        traverse(node.left);
    tree.right = node.right === null ? null :
        traverse(node.right)
    return tree;
}