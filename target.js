let arr = [3, 2, 1, 4];
let tar = 5;
let val;
for ( i = 0; i < arr.length; i++ ) {
    if (tar > arr[i]) {
        val = tar - arr[i];
    }
    for ( j = i; j < arr.length; j++ ){
        if(arr[j] == val) {
            console.log(arr[j],arr[i]);
        }  
    }
}