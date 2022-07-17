//swap
function swap(array, idx1, idx2) {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
}

//naive approach
function bubbleSort(arr) {
    let count = 0
    for (var i = 0; i < arr.length; i++) {

        for (var j = 0; j < arr.length; j++) {
            console.log(arr, count++)
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)

            }
        }
    }

    return arr


}

bubbleSort([37, 45, 29, 8])

//optimized compare less each time through the loop
//starts from the end
function bubbleSort2(arr) {
    let count = 0
    for (let i = arr.length; i > 0; i--) {

        for (let j = 0; j < i - 1; j++) {
            console.log('now', arr, count++)
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }

    }

    return arr


}

bubbleSort2([8, 1, 2, 3, 4, 5, 6, 7])

//optimized will break out of loop if there are no swaps 
function bubbleSort3(arr) {
    let noSwap
    let count = 0
    for (let i = arr.length; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, count++)
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                noSwap = false;
            }
        }
        if (noSwap) {
            break;
        }
    }

    return arr


}

bubbleSort3([8, 1, 2, 3, 4, 5, 6, 7])