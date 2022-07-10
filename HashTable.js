hash("pink", 100);

function hash(str, arrLen) {


    let total = 0;
    for (let char of str) {
        //this gives 1-26 for lowercase letter a-z
        let value = char.charCodeAt(0) - 96

        total = (total + value) % arrLen;
    }
    return total
}

function hashOpt1(key, arrLen) {
    let total = 0;
    let Prime = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * Prime + value) % arrLen;
    }
    return total
}



// console.log(hash("pink", 100000000))
// console.log(hash("cyan", 100000000))
// console.log(hashOpt1("pink", 100000000))
// console.log(hashOpt1("cyan", 100000000))


class HashTable {

    //array of length 53 by default
    constructor(size = 53) {
        this.keyMap = new Array(size);

    }

    _hash(key) {
        let total = 0;
        let Prime = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * Prime + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let hashValue = this._hash(key);

        if (this.keyMap[hashValue]) {
            this.keyMap[hashValue].push([key, value])
        } else {
            this.keyMap[hashValue] = [[key, value]]
        }
        console.log(this.keyMap)
        return this
    }
    get(key) {
        let find = this._hash(key)
        if (this.keyMap[find]) {

            for (let i = 0; i < this.keyMap[find].length; i++) {
                if (this.keyMap[find][i][0] === key) {
                    return this.keyMap[find][i][1]
                }
            }
        }
        return undefined
    }

    keys() {
        let result = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (!this.keyMap[i]) continue;

            for (let j = 0; j < this.keyMap[i].length; j++) {
                if (result.includes(this.keyMap[i][j][0])) continue
                result.push(this.keyMap[i][j][0])
            }
        }
        return result
    }
    values() {
        let result = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (!this.keyMap[i]) continue;

            for (let j = 0; j < this.keyMap[i].length; j++) {
                if (result.includes(this.keyMap[i][j][1])) continue
                result.push(this.keyMap[i][j][1])
            }
        }
        return result
    }
}
let dict = new HashTable();

dict.set("blue", 432)
dict.set("red", 42)
dict.get("blue")
console.log(dict.get("blue"))
console.log(dict.keys())
console.log(dict.values())