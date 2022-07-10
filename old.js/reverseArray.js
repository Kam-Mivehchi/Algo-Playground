//Create  a function that reverses a string

function reverseStringSplit(str) {
    //check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'Enter vaid input'
    }
    //naive answer
    const answer = []
    const array = str.split('')
    for (let i = (array.length - 1); i > -1; i--) {
        answer.push(array[i]);
    }
    return answer.join('')
}

function reverseStringNoSplit(str) {
    //check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'Enter vaid input'
    }
    //naive answer
    const answer = []

    for (let i = (str.length - 1); i > -1; i--) {
        answer.push(str[i]);
    }
    return answer.join('')
}

//using built in java script methods twice as fast
function reverse2(str) {
    return [...str].reverse().join('')
    // return str.split('').reverse().join('')
}
//  we can also spred the str to forgo use of split method 
const reverse3 = str => [...str].reverse().join('')

//compare speed
console.time()


// reverseStringNoSplit('asdkfajsdlfjasldjfalksdjfaljsdflajsdfasdkfajsdlfjasldjfalksdjfaljsdflajsdfasdkfajsdlfjasldjfalksdjfaljsdflajsdfasdkfajsdlfjasldjfalksdjfaljsdflajsdfasdkfajsdlfjasldjfalksdjfaljsdflajsdf')
// reverseStringSplit('asdkfajsdlfjasldjfalksdjfaljsdflajsdfasdkfajsdlfjasldjfalksdjfaljsdflajsdfasdkfajsdlfjasldjfalksdjfaljsdflajsdfasdkfajsdlfjasldjfalksdjfaljsdflajsdfasdkfajsdlfjasldjfalksdjfaljsdflajsdf')
// reverse2('asdkfajsdlfjasldjfalksdjfaljsdflajsdfasdkfajsdlfjasldjfalksdjfaljsdflajsdfasdkfajsdlfjasldjfalksdjfaljsdflajsdfasdkfajsdlfjasldjfalksdjfaljsdflajsdfasdkfajsdlfjasldjfalksdjfaljsdflajsdf')
// reverse3('asdkfajsdlfjasldjfalksdjfaljsdflajsdfasdkfajsdlfjasldjfalksdjfaljsdflajsdfasdkfajsdlfjasldjfalksdjfaljsdflajsdfasdkfajsdlfjasldjfalksdjfaljsdflajsdfasdkfajsdlfjasldjfalksdjfaljsdflajsdf')
console.timeEnd()
//split and no split very similar O(n)
reverseStringNoSplit('asdkfajsdlfjasldjfalksdjfaljsdflajsdf')
reverseStringSplit('asdkfajsdlfjasldjfalksdjfaljsdflajsdf')
//built in javascript methods are much faster spread and split are similar and do the same thing for strings
reverse2('asdkfajsdlfjasldjfalksdjfaljsdflajsdf')
reverse3('asdkfajsdlfjasldjfalksdjfaljsdflajsdf')
console.log(reverseStringNoSplit('asdkfajsdlfjasldjfalksdjfaljsdflajsdf'))
console.log(reverseStringSplit('asdkfajsdlfjasldjfalksdjfaljsdflajsdf'))
console.log(reverse2('asdkfajsdlfjasldjfalksdjfaljsdflajsdf'))
console.log(reverse3('asdkfajsdlfjasldjfalksdjfaljsdflajsdf'))