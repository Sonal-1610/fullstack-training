//promise - its just a simple object which is used to store future value

// function fetchData(){
//     let data={
//         fname:"sonal",
//         lname:"rajwani",
//         gender:"female",
//     }

//     return new Promise((resolve,reject)=>{
//         let random=Math.floor(Math.random()*100);
//         console.log(random);
//         setTimeout(()=>{
//             if(random%2==0)
//             resolve(data);
//             else{
//             reject("error");
//           }
//         },2000)
//         })
// }
// console.log("after fetch data");

// let result=fetchData();
// // console.log(result);

// // method .then .catch both accept callback function ans this is called chainning 
// //result pending
// // .then -fulfilled 
// // .catch-reject
// //'https://fakestoreapi.com/products'
// result
// .then((res)=>{
//    return res.json();
// })

// // .catch((error)=>{
// //     console.log(error);
// //     alert("error");
// // })

// .then((data)=>{
//     console.log(data);
//     let tbody=document.getElementById("tbody");
//     data.forEach((item) => {
//         let tr=document.createElement("tr");
//         tr.innerHTML=`<td>${item.id}</td><td>${item.title}</td><td>${item.price}</td><td>${item.category}</td><td>${item.rating.rate}</td>`;
//         tbody.appendChild(tr);
//     });
// })

// .catch((error)=>{
//     console.log(error);
// })


//event loop
