class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }


}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }


    insert(val) {
        let newNode = new Node(val)

        if (this.root === null) {
            this.root = newNode
            return this
        } else {
            let current = this.root;
            while (true) {

                if (val < current.value) {
                    if (current.left) {
                        current = current.left
                    } else {
                        current.left = newNode
                        return this
                    }
                } else if (val > current.value) {
                    if (current.right) {
                        current = current.right
                    } else {
                        current.right = newNode
                        return this
                    }

                } else {
                    current = current.right
                }
                // console.log(current)
            }
        }
    }

    find(val) {
        if (!this.root) return false;
        let current = this.root
        let found = false
        while (current && !found) {
            if (current.value === val) {
                found = true
            } else if (val > current.value) {
                current = current.right

            } else {
                current = current.left;
            }
        }
        if (!found) return undefined
        return current;
    }

    bfs() {
        let queue = [];
        let ans = [];
        let node = this.root
        queue.push(node);


        while (queue.length) {
            node = queue.shift()
            ans.push(node.value);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }

        }
        return ans
    }

    preOrder() {
        let result = [], current = this.root;

        function traverse(node) {
            result.push(node.value)
            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
        }
        traverse(current)

        return result;

    }
    postOrder() {
        let result = [], current = this.root;

        function traverse(node) {
            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
            result.push(node.value)
        }
        traverse(current)

        return result;

    }
    inOrder() {
        let result = [], current = this.root;

        function traverse(node) {
            if (node.left) {
                traverse(node.left)
            }
            result.push(node.value)
            if (node.right) {
                traverse(node.right)
            }
        }
        traverse(current)

        return result;

    }

}



let bst = new BinarySearchTree()
let tree = new BinarySearchTree()

//      10
//   5      13
// 2  7   11  16

bst.insert(10)
bst.insert(5)
bst.insert(13)
bst.insert(11)
bst.insert(2)
bst.insert(16)
bst.insert(7)

// console.log(bst)
// console.log(bst.preOrder())
// console.log(bst.postOrder())

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(20)
tree.insert(3)
tree.insert(8)


console.log(tree)
console.log(tree.preOrder())
console.log(tree.postOrder())
console.log(tree.inOrder())