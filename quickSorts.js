function swap(array, idx1, idx2) {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
}


function pivotHelper(arr, start = 0, end = arr.length - 1) {
    let pivot = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < arr[start]) {
            pivot++;
            swap(arr, pivot, i)
        }
    }
    swap(arr, pivot, start)

    return pivot

}
// pivotHelper([4, 8, 2, 1, 5, 7, 6, 3])
// pivotHelper([4, 2, 6, 7, 10, 1, 3], 0, 6)
// pivotHelper([
//     3, 2, 1, 4,
//     10, 6, 7
// ], 0, 6)
function pivotHelper2(arr, start = 0, end = arr.length - 1) {

    let pivot = start;

    let currPivotIndex = pivot

    for (let i = start + 1; i <= end; i++) {
        if (arr[pivot] > arr[i]) {
            currPivotIndex++;
            swap(arr, i, currPivotIndex);
        }
    }
    swap(arr, pivot, currPivotIndex)
    console.log(arr)

    return currPivotIndex
}
// pivotHelper2([4, 8, 2, 1, 5, 7, 6, 3])

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {

        let pivotIndex = pivotHelper(arr, left, right)

        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }





    return arr

}
// console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]))


// function quickSort2(arr, left = 0, right = arr.length - 1) {

//     if (left === right) return arr
//     let pivotIndex = pivotHelper2(arr, left, right)

//     quickSort(arr, left, pivotIndex - 1)
//     quickSort(arr, pivotIndex + 1, right)










// }
// console.log(quickSort2([4, 8, 2, 1, 5, 7, 6, 3, 23, 22]))
