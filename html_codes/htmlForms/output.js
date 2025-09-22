let arr = [1, 2, 3, 2, 4, 1,7 ,8];
let lar=-1;

// Count frequency
for (let i = 0; i < arr.length; i++) {
   if(lar<arr[i]){
    lar=arr[i];
   }
}

console.log(lar);
