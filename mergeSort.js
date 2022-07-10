
function merge(arr1, arr2) {
    let mergedSortedArray = []

    let i = 0, j = 0;

    while (i < arr1.length || j < arr2.length) {
        if (i < arr1.length && j < arr2.length) {
            if (arr1[i] <= arr2[j]) {
                mergedSortedArray.push(arr1[i]);
                i++;
            } else {
                mergedSortedArray.push(arr2[j])
                j++;
            }
        } else {
            if (!arr1[i]) {
                mergedSortedArray.push(arr2[j])
                j++;
            } else {
                mergedSortedArray.push(arr1[i]);
                i++;
            }
        }

        console.log(mergedSortedArray, j)
    }




    return mergedSortedArray
}

merge([1, 10, 50, 54, 62, 600, 700], [2, 14, 99, 100, 699])
function mergeMethod2(arr1, arr2) {
    let mergedSortedArray = []

    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {

            mergedSortedArray.push(arr1[i])
            i++
        } else {
            mergedSortedArray.push(arr2[j])
            j++
        }

    }

    while (i < arr1.length) {
        mergedSortedArray.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        mergedSortedArray.push(arr2[j])
        j++
    }
    console.log(mergedSortedArray, j)

    return mergedSortedArray
}
mergeMethod2([1, 10,], [2, 14, 99, 100, 699])


function mergedSort(arr) {
    if (arr.length <= 1) return arr;
    //break the array into parts
    let mid = Math.floor(arr.length / 2)
    let left = mergedSort(arr.slice(0, mid))
    let right = mergedSort(arr.slice(mid))
    return merge(left, right)



}

mergedSort([10, 24, 76, 73])