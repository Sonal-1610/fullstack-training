//find findIndex
// let arr=[10,20,30,40,50];
//  let result =arr.find((item)=>{
//     return item>30;
// })
// console.log(result);
//  let res =arr.findIndex((item)=>{
//     return item>30;
// })
// console.log(res);

// let result=arr.find(item=>item>30);
// console.log(result);
// let ans=arr.findIndex(item=>item>30);
// console.log(ans);
// let a=4;
// const sum=a=>a**2;
// console.log(a);

// let arr=[10,20,30,40,50,31];
// let result=arr.some((item)=>item%2===0); //return true if one is true
// console.log(result);
// let res=arr.every((item)=>item%2===0);//return true if all are true
// console.log(res);

// let arr=[10,20,30,40,50,31,["sonal","rajwani",true,[false]],[10,50,90,60,[80]]];

// let newarr=arr.flat(1);
// console.log(newarr);

// let result=arr.join("/");
// console.log(result);
// let date="25-07-2025";
// let newStr=date.split("-");
// let newdateformat=newStr.join("/");
// console.log(newdateformat);

// let arr=[9,6,0,566,898,13,89];
// let arr1=["a","abc","cdhh","hfjbjh","gy"];
// let sortedarr=arr.sort((a,b)=>b-a);
// console.log(sortedarr);
// let arr=[10,20,30,40,50];
// let result=arr.forEach((item)=>{
//     return item**2;
// })
// console.log(result);

// let str="sonal rajwani";
// console.log(str[2]);
// let result=str.charAt(5);
// console.log(result);
// console.log(str.lastIndexOf("a"));
// console.log(str.includes("sonr"));

// let str="sonal rajwani";
// console.log(str.length);
// let result=str.trim()

// let str="sonal";
// let str2=" rajwani"
// console.log(str.concat(" ",str2))
// console.log(str.replaceAll("a","hello"));



//object methods

// let obj={
//     fname:"sonal",
//     lname:"rajwani",
// }
// Object.seal(obj);
// obj



//spread and rest operators(...)



// let arr=[10,20,30];
// let arr1=[...arr];
// arr1.push(1000);
// console.log(arr1);
// console.log(arr);

// let obj1={
//     fname:"harshit",
//     gender:"male",
//     address:"alwar",
// }
// let name="harshit sharma";
// let obj2={...obj1,fname:"abc",name};
// console.log(obj2);

let obj1={
    fname:"harshit",
    gender:"male",
    address:"alwar",
    mobile:"7014834863",
}

let {fname,gender,...rest}=obj1;
console.log(fname)
console.log(rest)