function binarySearchSupIndex(array,key,left,right){
	if(left > right ) return null;
	if(array[right] == key ) return right;
	var middle = Math.floor((left+right)/2);
	if(array[middle] > key){
		return binarySearchSupIndex(array,key,left,middle-1);
	}else if(array[middle] < key){
		return binarySearchSupIndex(array,key,middle+1,right);
	}else{
		return binarySearchSupIndex(array,key,middle,right);
	}
}
var array = [ 1, 2, 2, 2, 4, 4, 5, 5, 6, 6 ];
console.log(binarySearchSupIndex(array,6,0,array.length-1),array.length-1);