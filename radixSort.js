
//take in nujmber and a target digit and return it
function getDigit(num, digit) {

    return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
}

console.log(getDigit(12345, 2))

function digitCount(num) {
    if (num === 0) return 1;

    return Math.floor(Math.log10(Math.abs(num))) + 1
}
console.log(digitCount(12345))


function maxDigits(arr) {

    let max = 0

    for (let i = 0; i < arr.length; i++) {
        let digits = digitCount(arr[i])

        if (digits > max) {
            max = digits
        }
    }
    return max

}

console.log(maxDigits([1, 22, 3234, 23421, 234,]))



function radixSort(arr) {
    let maxLoop = maxDigits(arr)

    for (let k = 0; k < maxLoop; k++) {
        let bucket = Array.from({ length: 10 }, () => [])
        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k)
            bucket[digit].push(arr[i])
        }
        arr = bucket.flat()
    }
    return arr
}
console.log(radixSort([1, 22, 3234, 23421, 234,]))

