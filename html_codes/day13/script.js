// let arr=[10,20,30,40,50,60,true,false,"sonal",[100,200,300,400,"rajwani",[0,1,2,3,4,5,false]]];

// console.log(arr[arr.length-1][arr[arr.length-1].length-1][arr[arr.length-1][arr[arr.length-1].length-1].length-1]);

// let obj={
//     firstname:"sonal",
//     lastname:"rajwani",
// }
// console.log(obj.lastname);
// obj.gender="female";
// console.log(obj.gender);

// console.log(obj["firstname"]);
// console.log(obj);

// function sqArr(arr){
//     let sq=[];
//     for(let i=0;i<arr.length;i++){
//         sq[i]=arr[i]**2;
//     }
//     return sq;
// }
// let arr=sqArr([10,20,30,40,50]);

// for(let i=0;i<arr.length;i++){
//         console.log(arr[i]);
//     }

// let arr=[10,20,30,40,50];
// for(let index in arr){
//     console.log(index);
// }

// let elements=[10,20,30,40,50];
// for(let element of elements){
//     console.log(element);
// }

// let num=0;
// while(num<10){
//     console.log(num);
//     num++;
// }
// let num=0;
// do{
//  console.log(num);
//    num++;
// }while(num<10);

    let obj={
    firstname:"sonal",
    lastname:"rajwani",
    address:"jaipur",
    section:"FSD",
    gender:"female",
}

let keys=Object.keys(obj);
console.log(keys);
for(let element of keys){
    console.log(obj[element]);
}