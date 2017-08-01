/**
 * Created by NamTV on 08/01/17.
 */
// var array = [1, 3, -5, 2, 7, 6, -2, 4, -32, 10];
var array = [3, 8, 1, 5, 3, 4, 9, 2];
function maxLengthSubArrayContinuousIncreaseN3(array) {
    var start = 0;
    var end = 0;
    var maxLength = 1;
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (isSubArrayIncrease(array, i, j)) {
                if (maxLength < (j - i + 1)) {
                    maxLength = j - i + 1;
                    start = i;
                    end = j;
                }
            }
        }
    }
    return [maxLength, start, end];
}
function isSubArrayIncrease(array, start, end) {
    for (var i = start + 1; i <= end; i++) {
        if (array[i] < array[i - 1]) return false;
    }
    return true;
}

function maxLengthSubArrayContinuousIncreaseN2(array) {
    var temp = [[]];
    var length = array.length;
    for (var i = 0; i < length; i++) {
        temp[i] = [];
        temp[i][i] = 1;
    }
    var start = 0;
    var end = 0;
    var maxLength = 1;
    for (var i = 0; i < length - 1; i++) {
        for (var j = i + 1; j < length; j++) {
            if (temp[i][j - 1] && array[j] >= array[j - 1]) {
                if (maxLength < (j - i + 1)) {
                    maxLength = j - i + 1;
                    start = i;
                    end = j;
                }
                temp[i][j] = 1;
            } else {
                temp[i][j] = 0;
            }
        }
    }
    console.log(temp);
    return [maxLength, start, end];
}

function maxLengthSubArrayIncreateN2(array) {
    var temp = [];
    var track = {};
    var end = 0;
    var max =1;
    for (var i = 0; i < array.length; i++) {
        temp[i] = 1;
        track[i] = [array[i]];
    }
    for (var i = 1; i < temp.length; i++) {
        for (var j = 0; j < i; j++) {
            if (array[j] <= array[i]) {
                var l1 = temp[j] + 1;
                if (l1 >= temp[i]) {
                    temp[i] = l1;
                    track[i] = track[j].concat([array[i]]);
                    if(max < l1){
                        end = i;
                        max = l1;
                    }
                }
            }
        }
    }
    return [max, track[end],end];
}

// console.log(maxLengthSubArrayContinuousIncreaseN3(array));
// console.log(maxLengthSubArrayContinuousIncreaseN2(array));
console.log(maxLengthSubArrayIncreateN2(array));
