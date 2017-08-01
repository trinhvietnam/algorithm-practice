function quickSort(array, start, end) {

    if (start >= end) {
        return array;
    }
    var indexPivot = patition(array, start, end);
    //console.log(start,end,indexPivot,array);
    quickSort(array, start, indexPivot - 1);
    quickSort(array, indexPivot + 1, end);
    return array;
}
function patition(array, start, end) {
    var pivot = array[Math.floor((start + end) / 2)];
    var i = start;
    var j = end;
    //console.log('pivot = ',pivot);
    while (i < j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        //console.log('vo ly ',i,j,array[i],array[j]);
        if (array[i] != array[j]) {
            swap(array, i, j);
        } else {
            j--;
        }
    }
    //console.log('indexPivot = ',i,array);
    return i;
}
function swap(array, i, j) {
    //console.log('doi cho ',i,j);
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    //console.log(array);
}
// var fs = require('fs');
// for (var indexTestCase = 1; indexTestCase < 30; indexTestCase++) {
//
//
//     // var array = fs.readFileSync('./quicksort-testcases/TestCase'+indexTestCase+'.txt').toString().split('\n').map((v) => {
//     var array = fs.readFileSync('./quicksort-testcases/IntegerArray.txt').toString().split('\n').map((v) => {
//         return parseInt(v);
//     })
//         .filter((v) => {
//                 return !isNaN(v)
//             }
//         );
//
//     quickSort(array, 0, array.length - 1);
//     for (var i = 0; i < array.length - 1; i++) {
//         if (array[i] > array[i + 1]) console.log('1111111111111111111111');
//     }
//     console.log(array);
// }
exports.quickSort = quickSort;