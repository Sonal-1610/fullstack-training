let arr = [1, 2, 3, 4];
let arr1 = [3, 4, 5, 6];
let result = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
        if (arr[i] === arr1[j]) {
            result.push(arr[i]);
            console.log(arr[i]); 
            break; 
        }
    }
}
