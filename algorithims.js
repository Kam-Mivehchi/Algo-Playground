// given 2 arrays letthe user know true or false if the arrays contain a common item 
// how large is the array
//is time complexity or space compexity more important

//2 params-arrays- size limit
//true or false 

//O(a*b) time complexity  
//nested for loop could bexome hash map
function containsCommonItemsNested(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }

    }
    return false
}
//array 1 converts to an obj {
//     a:true,
//     b:true,
//     c:true,
//     x:true
// }
// array2[index]===obj.properties

//create a function that takes in arrays
//0(a+b) way better with bigger arrays
// uses more memory has space complexity of 0(a)
function containsCommonItemsMap(arr1, arr2) {
    //loop; through first array and create object where properties = items in the array
    let map = {}
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = array1[i];
            map[item] = true;
        }
    }
    //loop throught the second array and check if the second array exists on the created object.length;

    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true
        }


    }

    return false
}

//uses built in javascript methods
//better readability if thats important
function containsCommonItemsSome(arr1, arr2) {

    return arr1.some(item => arr2.includes(item))
}





const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'x']

console.time("concatenation");
console.log(containsCommonItemsNested(array1, array2))
console.timeEnd("concatenation");

console.time("concatenation");
console.log(containsCommonItemsMap(array1, array2))
console.timeEnd("concatenation");

console.time("concatenation");
console.log(containsCommonItemsSome(array1, array2))
console.timeEnd("concatenation");

