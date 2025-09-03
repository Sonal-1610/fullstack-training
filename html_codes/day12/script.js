// let x=5;
// let y=10;
// console.log("sum= ",x+y);
// console.log("subtraction",x-y);
// console.log("multiplication",x*y);
// console.log("division",x/y);
// console.log("modulus",x%y);
// console.log("exponential",x**y);

// let a="sonal";
// x+=y;
// console.log(x);
// x-=y;
// console.log(x);
// x*=y;
// console.log(x);
// x/=y;
// console.log(x);
// x%=y;
// console.log(x);
// x**=y;
// console.log(x);

// y="5";

// console.log(x==y);
// console.log(x===y);
// console.log(x!=y);
// console.log(x!==y);
// console.log(x<y);
// console.log(x>y);
// console.log(x<=y);
// console.log(x>=y);


// let x=true;
// let y=false;

// console.log(x&&y);
// console.log(x||y);
// console.log(!x&&y);
// console.log(x==y);

// console.log(20&&10);
// console.log(10&&20);
// console.log(0&&20);
// console.log(20||[]);
// console.log(""||[]);


// let num1 = 10;
// let num2 = 0;
// let num3 = 20;

// console.log(num1 && num3); //20
// console.log(num2 || num3);  //20

// console.log(num1 || num2); //10
// console.log(num2 && num3);//0

// let str1 = "Hello";
// let str2 = "";
// let num1 = 42;

// console.log(str1 && num1); //42
// console.log(str2 || num1); //42
// console.log(str1 || str2); //"hello"
// console.log(num1 && str2);  //""

// let isTrue = true;
// let isFalse = false;
// let num = 10;

// console.log(isTrue && num);//10
// console.log(isFalse || num); //10
// console.log(isTrue && isFalse);  //false 
// console.log(isFalse || isTrue);//true

// let num1 = 0;
// let num2 = 100;
// let str1 = "JS";
// let str2 = "";

// console.log((num1 || num2) && str1);  //"JS"
// console.log((str2 || num1) || str1); //"JS"
// console.log((str1 && num2) || num1);  //100
// console.log((num1 && str2) || str1);   //"jS"

// let bool1 = true;
// let bool2 = false;
// let num = 0;
// let str = "Code";

// console.log(bool1 && str && num);  //0
// console.log(bool1 || str || num);   //true 
// console.log(bool2 || num || str);    //"code"
// console.log(bool2 && str && num);  //false

// let a = 5;
// let b = 0;
// let c = "Hi";
// let d = "";

// console.log(a && b && c); //0
// console.log(a || b || d); //5
// console.log(b || d || c); //"hi"
// console.log(c && a && d);//""

// let x = 10;
// let y = 0;
// let z = -5;

// console.log(x && y && z); //0
// console.log(x || y || z); //10
// console.log(y || z || x); //-5
// console.log(z && x && y);  //0

// let role="ADMIN";
// role==="ADMIN"&& console.log("your role is admin so you can access this info");

// let arr=[10,20,30,40,50];
// arr.length>0&&console.log(arr[0]," ",arr[1]);

// let x=5;
// let y=10;
// console.log(x&y);
// console.log(x|y);
// console.log(x^y);
// console.log(x<<y);
// console.log(x>>1);


// let number=90;
// if(number>90){
//     console.log("A+");
// }
// else if(number>80){
//     console.log("A");
// }

// let day=1;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     default:
//         console.log("no day");
//         break;
// }

//function
// function fun(a,b){
//     console.log("fun is called");
//     console.log(`value of a is ${a}, value of b is ${b}`);
// }

// fun(10,20);

// let fun1=function(a,b){
//      console.log("fun is called");
//     console.log(`value of a is ${a}, value of b is ${b}`);
// }
// fun1(10,20);

// const fun2=(a,b)=>{
//  console.log("fun is called");
//     console.log(`value of a is ${a}, value of b is ${b}`);
// }
// fun2(100,20);


// for(let i=0;i<10;i++){
//     console.log(i);
// }
function f(n){
for(let i=0;i<n;i++){
    let row="";
   for(let j=0;j<n;j++){
    row+="*";
   }
   console.log(row);
  }
}

f(3);












