let arr = [2, 21, 5, 109, 3, 95];
let large = arr[0];
for( i = 0; i < arr.length; i++ ) {
    if( large < arr[i]) {
        large = arr[i];
    }
}
console.log(large);