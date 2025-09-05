// //array methods
// let arr=[10,20,30,40,50,60];
// //  1 push

// console.log(arr.push(70));  //returns length //add element in the array
// console.log(arr);     

// // 2 pop

// console.log(arr.pop()); //jis element ko yeh nikalta h yeh vhi element ko return krke deta h 
// console.log(arr); 

// // 3 shift

// console.log(arr.shift()); //remove first element and return the removed element
// console.log(arr); 

// // 4 unshift

// console.log(arr.unshift(10)); //return size and add new element
// console.log(arr); 

// const add=(x,y)=>{
//     console.log(x+y);
// }

// const sub=(x,y)=>{
//     console.log(x-y);
// }

// // const mul=(x,y)=>{
// //     console.log(x*y);
// // }

// function div(x,y){
//     console.log(x/y);
// }

// function calculator(a,b,operation){
//  operation(a,b);
// }

// calculator(4,5,(x,y)=>{
//     console.log(x*y);
// });


// function func2(a){
//     console.log(a);
//     a(100);
//     console.log("This is func2");
// }

// function callback1(p1){
//     console.log(p1);
//     console.log("This is func 1 and passing as a callback");
// }

// function callback2(p2){
//     console.log(p2)
//     console.log("Func 3 is called and passing as a callback");
// }

// func2(callback1); // func1 - callback , func2 - higher order function

// func2(callback2);

// let arr=[10,20,30,40];

// let result=arr.map((item)=>{
//     console.log(item**2);
// })

// console.log(result);

// let products=[
//     {
//         phone:"iphone",
//         price:"100$",
//     },
//     {
//         phone:"samsung",
//         price:"100$",
//     },
//     {
//         phone:"IQOO",
//         price:"100$",
//     },
// ]

// let results=products.map((product,index)=>{
//     let newObj={...product,id:index+1};
//     return newObj;
// })

// //map doesn't change original array and returns the new array with the same lengh of the original array

// console.log(results);
// console.log("----------------------******-------------------------");
// console.log(products);

// let arr=[10,20,30,40,50,60];
// let result=arr.map((item)=>{
//     return item>30;
// });
// let result=arr.map((item)=>{
//     if(item>30)
//     return item;// kuch na kuch toh return hoga hi
// });
// console.log(result);

//filter

// let ans=arr.filter((item)=>{
//     return item>30;// ek new array jiski length condition pe depend krti h 
// });
// console.log(ans);
// console.log(typeof ans);

//reduce

// let arr =[10,20,30,40,50,60];
// let result=arr.reduce((acc,curr)=>{
//     return acc+curr; //return single value
// },0 //acc value
// )
// console.log(result);
// console.log(typeof result);

// //splice slice
// let arr =[10,20,30,40,50,60];
// // let res=arr.slice(2,4);

// // console.log(res);
// let result=arr.splice(3,2,"hello","world"); // 2 element remove fom 3 rd index
// let res=arr.splice(3,0,"hello","world"); //0 means no element remove

// console.log(arr);

// console.log(result);
// console.log(res);

// let ans=arr.indexOf("hello",3);
// let answer=arr.lastIndexOf("hello");

// console.log(ans);
// console.log(answer);

//concat
let arr1=[10,20,30];
let arr2=[40,50,60];
let arr3=arr1.concat("sonal",arr2);
console.log(arr3);

let res=arr1.includes(100);
console.log(res);

