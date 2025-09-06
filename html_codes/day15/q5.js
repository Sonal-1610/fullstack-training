let arr1=[1,3,5];
let arr2=[2,4,6];
let arr3=[];
let j=0;
let i=0;
for(;i<arr1.length||j<arr2.length;){
    if(arr1[i]<arr2[j]){
      arr3.push(arr1[i]);
      i++;
    }
    else{
         arr3.push(arr2[j]);
         j++;
    }
}

for(let k=0;k<arr3.length;k++){
    console.log(arr3[k]);
}