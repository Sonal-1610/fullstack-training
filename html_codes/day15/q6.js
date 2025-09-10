let arr = [1, 2, 3, 4];
let arr1 = [3, 4, 5, 6];
let result = [];

for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
}
for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
}

let freq = {};
let ans = [];

for (let i = 0; i < result.length; i++) {
    if (!freq[result[i]]) {
        freq[result[i]] = true;
        ans.push(result[i]);
    }
}

for (let i = 0; i < ans.length; i++) {
    console.log(ans[i]);
}
