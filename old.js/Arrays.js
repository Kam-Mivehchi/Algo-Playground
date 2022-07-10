const strings = ['a', 'b', 'c', 'd'];
//4 items taking up 4 shelfs each (32 bit) using up 16 bytes of storage

//arrays are best for lookup push and pop
strings[2]

//push- add to end 
strings.push('e')//0(1)

//pop =remove from extends
strings.pop(); //0(1)

///not the best for insert or delte

//unshift - add to beginnging of array
//has to loop trough the array and resign the indexes
strings.unshift('x');  //0(n)



//splice add item at an idex or remove items
strings.splice(2, 0, 'alien') //0(n)

console.log(strings)


//static array- has a predetermined number of spots

//dynamic Array- copies array and takes it to a new location in memory

//Classes in javascript

//object are reference types - not built in to JS os ES unlike(int,null,bool,undefined, hello)
//created by programmer
console.log(this)

//instantation

class Player {
    //everynew player will have these properties
    constructor(name, type) {
        this.name = name;
        this.type = type;

    }
    //calling the introduce fn will have log the message with the given name and type
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}

//creating a new player with additonal attrivutes

class Wizard extends Player {
    //have to call the contructr
    constructor(name, type) {
        //allows you to have acces to old constructor when you extend
        super(name, type)
    }
    play() {
        console.log(`Im a ${this.type}`)
    }
}
const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Kamyar', 'GoozeMonster')

wizard2.introduce()


class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }
    get(index) {
        return this.data[index]
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        delete this.data[this.length - 1]

    }
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
    }
}
const newArray = new MyArray();;
console.log(newArray)
newArray.push('hi')
newArray.push('hyo')
newArray.push('ivan')
console.log(newArray)

newArray.delete(1)
console.log(newArray)