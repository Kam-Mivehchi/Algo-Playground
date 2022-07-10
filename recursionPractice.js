// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

// Examples 
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

//method 1
function power(base, exp) {
    let product = 1;

    function helper() {
        if (exp === 0) return;

        product *= base;
        helper(base, exp--)

    }
    helper()
    return product
}

// method 2 no helper must return the recurvsive function

function power2(base, exp, product = 1) {


    if (exp == 0) return product;

    return power(base, exp - 1, product * base)

}


// write a factorial function that
function factorial(num) {
    let product = 1

    function helper() {
        if (num == 0) return;
        product *= num
        num--
        helper()

    }
    helper()

    return product
}


//write a function that acepts a numbver and adds all the numbers from 0

function recursiveRange(number) {
    let sum = 0

    function helper() {
        if (number === 0) return
        sum += number;
        number--;
        helper();
    }
    helper()
    return sum
}


//find the nth item in a fibonacci sequence

function fib(number) {
    // add whatever parameters you deem necessary - good luck!  
    let current = 2
    let seq = [1, 1]

    function helper() {
        if (current === number) return
        seq.push(seq[seq.length - 1] + seq[seq.length - 2])
        current++
        helper()
    }

    helper()
    return seq[seq.length - 1]
}