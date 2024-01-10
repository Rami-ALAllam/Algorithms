// Reverse

let arr1=[1,2,3,4,5,6];
let arr2=[10,20,30,40,50,60,70,80,90];
function rev(arr){
	for(i=0; i<arr.length/2; i++){
		temp = arr[i];
		arr[i] = arr[arr.length-1-i];
		arr[arr.length-1-i] = temp;
	}
    console.log(arr);
}
rev(arr1);
rev(arr2);

// Concat

function concat(arr1,arr2){
	let arr3=[];
	for(i=0;i<arr1.length;i++){
		arr3[i]=arr1[i];
		}
	for(i=arr3.length;i<arr1.length+arr2.length;i++){
		arr3[i]=arr2[Math.abs(i-arr1.length)];
		}
	console.log(arr3);
}    
concat(['a','b',0,'j'],[8,9,11,4,5,7,9]);

// Filter

function filter(arr,min,max){
	for(i=0;i<arr.length;i++){
		if (arr[i]<max && arr[i]>min){
			arr[i]=arr[i];
	}
	else{
		arr[i]=null;
	}
		}
	let count = 0;
	for(i=0;i<arr.length;i++){
		if (arr[i] != null){
			arr[count]=arr[i];
			count++;
		}
	}
	arr.length = count;
console.log(arr);
}
filter([5,6,9,12],4,11)

// Rotate

function rotate(arr,val){
	for(r=0; r<val; r++){
	let len = arr.length-1;
	for(i=0;i<len;i++){
		arr[arr.length+i]=arr[i];
		arr[i]=null;
	}
	let count = 0;
	for(i=0;i<arr.length;i++){
		if (arr[i] != null){
			arr[count]=arr[i];
			count++;
		}
	}
	arr.length = count;
}
console.log(arr);
}
rotate([1,2,3],4)