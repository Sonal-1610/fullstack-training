let arr = [1, 2, 3, 2, 4, 1];
let freq = {};
let ans = [];

// Count frequency
for (let i = 0; i < arr.length; i++) {
    if (!freq[arr[i]]) {
        freq[arr[i]] = true;
        ans.push(arr[i]); // Only push if not already seen
    }
}

for (let i = 0; i < ans.length; i++) {
    console.log(ans[i]);
}
