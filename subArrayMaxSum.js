/**
 * Created by NamTV on 08/01/17.
 */
// var array = [-1,3,-3,6];
var array = [1 ,3 ,-5, 2, 7, 6, -2, 4, -32 ,1000];
function subArrayMaxSumN3(array) {
    var max = array[0];
    var start = 0;
    var end = 0;
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j <= i; j++) {
           var t = sumOfSubArray(array,j,i);
           if(t > max){
               max = t;
               start = j;
               end = i;
           }
        }
    }
    return [max,start,end];
}
function sumOfSubArray(array,start,end) {
    var result  = 0;
    for (var i = start; i <= end; i++) {
        result += array[i];
    }
    return result;
}

function subArrayMaxSumN2(array) {
    var sum = [[]];
    for (var i = 0; i < array.length; i++) {
        sum[i] = [];
        sum[i][i] = array[i];
    }
    var max = array[0];
    var start = 0;
    var end = 0;
    for (var i = 0; i < array.length; i++) {
        for (var j = i+1 ; j < array.length; j++) {
            sum[i][j] = sum[i][j-1]+array[j];
            if(sum[i][j] > max){
                start = i;
                end = j;
                max = sum[i][j];
            }
        }
    }
    console.log(max,start,end);
}

function subArrayMaxSumN(array) {
    var sum = 0;
    var start = 0;
    var end = 0;
    var max = array[0];
    var startTemp = 0;
    for (var i = 1; i < array.length; i++) {
        sum += array[i];
        if(sum < 0){
            sum = 0;
            startTemp = i+1;
        }
        if(sum > max){
            end = i;
            max = sum;
            start = startTemp;
        }
    }
    return [max,start,end];
}

// console.log(subArrayMaxSumN2(array));
console.log(subArrayMaxSumN(array));