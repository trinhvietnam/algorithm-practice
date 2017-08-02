var array = [3,2,34,31,42,42,4];
for(var i = 0; i < array.length - 1; i++){
	for(var j = i + 1;j < array.length; j++ ){
		if(array[i] > array[j]){
			var t= array[j];
			array[j] = array[i];
			array[i] = t;
		}
	}
}
console.log(array);