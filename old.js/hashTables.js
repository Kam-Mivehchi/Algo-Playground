//aka objects in javascript
//0(1) insert lookup delete search
//lookup may be 0(n) if theres a collision

//aka
// let basket = {}
// let dog = 'dog'

// //no declaration needed
// basket.dog = 1

// //useful if variables are defined
// // basket[dog] = 1
// console.log(basket)


// let user = {
//     age: 54,
//     name: 'Kylie',
//     magic: true,
//     scream: function () {
//         console.log('ahhhhhh')
//     }
// }


// user.age                            //0(1) --Lookup
// user.spell = 'abra kadabra'         //0(1) --insert
// user.scream()                       //0(1) -- lookup

// console.log(user)

// main problem with hash tables
// hash collision with enough data and limited memory
//adds to same memory space slows it down to 0(n/k)->0(n/k)

//can only save object key as a string

// a map allows a key to be any data type(functions or arrays)
//maintains order

const a = new Map()
const b = new Set() //only stores the key

class HashTable {
    constructor(size) {
        this.data = new Array(size);
        [['grapes'], 1000]
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;

    }
    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
            this.data[address].push([key, value])
        }
        this.data[address].push([key, value])
        return this.data

    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }
            }
        }
        return undefined
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray
    }
}

const myHash = new HashTable(50);
// myHash.set('grape', 10000000)
myHash.set('grapes', 10000)
myHash.set('oranges', 10000)
console.log(myHash.get('grapes'))

console.log(myHash.keys())

//had to look over the whole memory space of 50 way slower than an array
//for in loop to loop through object which is very slow
//quick access to certain values
//placed all over the placed

//first recurring character

//given an array with infinite length return the character than repeats first

//novice:can loop through array twice with second loop starting at the index after i

// loop through arrayto add values to hash table(object) if it doesnt exist if it does exist return that index
const array1 = [2, 5, 5, 1, 2, 3, 5, 1, 2, 4]  //return 2    
const array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4]  //return 1
const array3 = [2, 3, 5, 1, 4]              //no repeating return undefined

function firstRecurringCharacter(arr) {

    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        //always remeber the value of 0 is equal to falsy in js
        if (obj[arr[i]] !== undefined) {
            return arr[i]
        }
        obj[arr[i]] = true
    }


}

//improves memory and sytle is 0(n)




console.time()
console.log(firstRecurringCharacter(array1))
console.timeEnd()
// console.time()
// console.log(firstRecurringCharacter(array1))
// console.timeEnd()