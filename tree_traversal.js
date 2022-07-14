class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }


}

class Tree {
    constructor() {
        this.root = null;
    }

    //building the tree


    //bfs
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
        let curr = this.root
        let queue = [curr]
        let results = []

        while (queue.length) {
            curr = queue.shift()
            results.push(curr.value)

            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
        return results

    }

    preOrder() {
        let res = []

        let curr = this.root

        function traverse(curr) {
            if (!curr) return
            res.push(curr.value)
            traverse(curr.left)
            traverse(curr.right)

        }
        traverse(curr)
        return res
    }
    postOrder() {
        let res = []

        let curr = this.root

        function traverse(curr) {
            if (!curr) return
            traverse(curr.left)
            traverse(curr.right)
            res.push(curr.value)

        }
        traverse(curr)
        return res
    }
    inOrder() {
        let res = []

        let curr = this.root

        function traverse(curr) {
            if (!curr) return
            traverse(curr.left)
            res.push(curr.value)
            traverse(curr.right)

        }
        traverse(curr)
        return res
    }






}
let tree = new Tree();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
console.log(tree.preOrder())
console.log(tree.postOrder())
console.log(tree.inOrder())
