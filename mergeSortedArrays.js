mergeSortedArray([0, 2, 4, 31], [4, 6, 30]);

//paramaters - 2 sorted arrays no size limit
//return - 1 sorted array containing both array items

//could improve readability by moving push and increment into a seperate function
function mergeSortedArray(arr1, arr2) {
    //input validation
    // if (!arr1 || !arr2) return 'enter valid parameters'
    if (arr1.length === 0) return arr2;
    if (arr2.length === 0) return arr1;



    const answer = [];
    let array1Item = arr1[0];
    let array2Item = arr2[0];
    let i = 1;
    let j = 1;
    while (array1Item || array2Item) {
        // console.log(array1Item, array2Item)
        if (!array2Item || array1Item < array2Item) {
            answer.push(array1Item)
            array1Item = arr1[i];
            i++;
        } else {
            answer.push(array2Item);
            array2Item = arr2[j];
            j++;
        }

    }


    // console.log(answer)
    return answer;
}
console.time()
mergeSortedArray([0, 2, 4, 31], [4, 6, 30])
console.timeEnd()
console.log(mergeSortedArray([0, 2, 4, 31], [4, 6, 30]))