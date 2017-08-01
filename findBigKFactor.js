/**
 * Created by NamTV on 08/01/17.
 */
function findIndexKBigKFactor(array, k) {
    var partitionIndex;
    var start = 0;
    var end = array.length - 1;
    do {
        partitionIndex = partition(array, start, end);
        if (partitionIndex < k - 1) {
            start = partitionIndex + 1;
        } else if (partitionIndex > k - 1) {
            end = partitionIndex - 1;
        }
    } while (partitionIndex != k - 1);
    return partitionIndex;
}
function partition(array, left, right) {
    var pivot = array[Math.floor((left + right) / 2)];
    var i = left;
    var j = right;
    while (i < j) {
        while (array[i] > pivot) {
            i++;
        }
        while (array[j] < pivot) {
            j--;
        }
        if (array[i] != array[j]) {
            swap(array, i, j);
        } else {
            j--;
        }
    }
    console.log(pivot, i, j, array);
    return i;
}
function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

var array = [1, 23, 6453, 74, 345, 23, 6, 345, 6453, 34, 345, 7, 23, 6, 6453];
// var index = findBigKFactor(array, 2);
// var max = array[0];
// var match = 0;
// var mapMatch = {}
// for (var i = 1; i < index; i++) {
//
//     if (mapMatch[max]) {
//         match++;
//     } else {
//         mapMatch[max] = true;
//     }
//
//
// }
var quickSort = require('./quicksort');
function findBigKFactorOn(array, k) {
    // array.sort(function (a,b) {
    //     console.log(a,b,a-b>0);
    //     return a-b>0
    // });
    quickSort.quickSort(array,0,array.length-1);
    console.log(array);
    if (k == 1) {
        return array[0];
    }

    for (var i = 1; i < array.length; i++) {
        if (array[i-1] != array[i]) {
            k--;
        }
        if (k == 1) {
            return array[i];
        }
    }
    return null;
}

console.log(array[findIndexKBigKFactor(array,5)]);