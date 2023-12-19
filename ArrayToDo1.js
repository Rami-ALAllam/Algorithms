
let arr = [5,7,3,2]
let arr1 = [9,33,7];

// Push Front
function addfront(arr,value){
    let arr2 = [];
    arr2[0] = value;
    for (i=1;i<=arr.length;i++){
    arr2[i] = arr[i-1];
    }
    console.log(arr2);
    }
    addfront(arr,8);

// Pop Front
function popfront(arr){
    for (i=0;i<arr.length;i++){
    arr[i] = arr[i+1];
    }
    arr.length = arr.length-1
    console.log(arr);
    }
    popfront(arr);

// Insert at
function insertat(arr,pos,value){
    var arr2 = []
    for (var i=0; i<arr.length; i++){
        if (i == pos){
            arr2[i] = value
        }
        else{
            arr2[i] = arr[i];
        }     
    }
    for(var r=pos; r<arr.length; r++){
        arr2[r+1]= arr[r]
    }
    console.log(arr2);
    }

insertat(arr1,1,42)
insertat([100,200,5], 2, 311)
insertat([63,48,55,91,23], 3, 1999)
