function swap(array, idx1, idx2) {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
}


function selectionSort(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr, count++)

            if (arr[j] < arr[min]) {
                min = j
            }
        }
        swap(arr, i, min)
        if (arr[i] !== min) {
        }
        console.log(arr)
    }

    return arr
}
selectionSort([5, 44, 38, 19, 47, 15])


function selectionSortOptimized(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {

            console.log(arr, count++)
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (arr[i] !== min) {
            swap(arr, i, min)
        }
        console.log(arr)
    }

    return arr
}
selectionSortOptimized([5, 44, 38, 19, 47, 15])