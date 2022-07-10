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
    console.log(arr)
    return pivot

}
pivotHelper([4, 8, 2, 1, 5, 7, 6, 3])
// pivotHelper([4, 2, 6, 7, 10, 1, 3], 0, 6)
// pivotHelper([
//     3, 2, 1, 4,
//     10, 6, 7
// ], 0, 6)


function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {

        let pivotIndex = pivotHelper(arr, left, right)

        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    } else {
        return arr
    }





    return arr

}
quickSort([4, 8, 2, 1, 5, 7, 6, 3])
