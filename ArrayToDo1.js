
let arr = [5,7,3,2]
let arr1 = [9,33,7];

// Push Front - method 1 - using addational array
function addfront(arr,value){
    let arr2 = [];
    arr2[0] = value;
    for (i=1;i<=arr.length;i++){
    arr2[i] = arr[i-1];
    }
    console.log(arr2);
    }
    // addfront(arr,8);

// Push Front - method 2 - using only one array

function addfront(arr,value){
    // this for loop to shift array one index to the right.
    for (i=arr.length-1; i>=0; i--){
    arr[i+1] = arr[i];
    }
    arr[0] = value;
    console.log(arr);
    }
    // addfront(arr,8);

// Pop Front -- if empty ==> return 
function popfront(arr){
    for (i=0;i<arr.length;i++){
    arr[i] = arr[i+1];
    }
    arr.length = arr.length-1;
    console.log(arr);
    }
    // popfront(arr);

// Insert at - method 1 - using addational array
function insertat(arr,pos,value){
    var arr2 = []
    for (var i=0; i<pos+1; i++){
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

// Insert at - method 2 - using only one array 

function insertat2(arr,pos,value){
    for (var i=arr.length-1; i>=pos; i--){
        arr[i+1] = arr[i];    
    }
    arr[pos] = value;
    console.log(arr);
    }

insertat2(arr1,1,42)
insertat2([100,200,5], 2, 311)
insertat2([63,48,55,91,23], 3, 1999)