function swap(array, idx1, idx2) {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
}


function insertionSort(arr) {


    for (var i = 1; i < arr.length; i++) {
        var currentVal = arr[i];

        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal
        console.log(arr)
    }
    return arr;
}
console.log(insertionSort2([2, 1, 9, 76, 4]))

function insertionSort2(arr) {

    for (let i = 1; i < arr.length; i++) {
        let curr = i;
        let prev = i - 1
        if (arr[curr] < arr[prev]) {


            while (prev >= 0) {
                if (arr[curr] > arr[prev]) break;
                swap(arr, curr, prev)
                curr = prev;
                prev = curr - 1;
            }
        }
    }
    return arr;
}