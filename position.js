let arr = [2, 3, 5, 7, 9];
let pos = 1;
for (i = 0; i < arr.length; i++) {
    if(arr[i] == pos) {
        console.log("Position is "+i);
        break;
    }

    else if ( pos < arr[0] ) {
        console.log("Position is "+i);
        break;
    }

    else if ( arr[i] > pos) {
        console.log("Position is "+(i-1));
        break;
    }

    else if (i == arr.length-1 && pos > arr[i]) {
        console.log("Position is "+(i+1));
        break;
    }
}