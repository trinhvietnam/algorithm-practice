var array = [3,2,34,31,42,42,4];
for(var i = 0; i < array.length - 1; i++){
	var min = array[i];
	var indexMin = i;
	for(var j = i + 1;j < array.length; j++ ){
		if(array[j] < min){
			min = array[j];
			indexMin = j;
		}
	}
	var t = array[i];
	array[i] = min;
	array[indexMin] = t;
}
console.log(array);