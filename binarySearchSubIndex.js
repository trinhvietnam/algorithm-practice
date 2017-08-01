function binarySearchSubIndex(array,key,left,right){
	if(left > right ) return null;
	if(array[left] == key ) return left;
	var middle = Math.floor((left+right)/2);
	if(array[middle] > key){
		return binarySearchSubIndex(array,key,left,middle-1);
	}else if(array[middle] < key){
		return binarySearchSubIndex(array,key,middle+1,right);
	}else{
		return binarySearchSubIndex(array,key,left,middle);
	}
}
var array = [ 1, 2, 2, 2, 4, 4, 5, 5, 6, 6 ];
console.log(binarySearchSubIndex(array,2,0,array.length-1),array.length-1);