let str="hello";
let str1 = str.split(""); 
let i=0,j=str1.length-1;
while(i<j){
    let temp=str1[i];
    str1[i]=str1[j];
    str1[j]=temp;
    i++;
    j--;
}
for(let k=0;k<str1.length;k++){
    console.log(str1[k]);
}