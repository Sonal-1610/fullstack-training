// document.getElementById("container").addEventListener("click",function(){
//     console.log("Event triggered from event listener");
// })

// document.getElementById("container").addEventListener("mouseenter",function(){
//      document.getElementById("container").style.background="red";
// })


// document.getElementById("container").addEventListener("mouseleave",function(){
//      document.getElementById("container").style.background="pink";
// })

// document.getElementById('signup-form').addEventListener('submit',function(e){
//     e.preventDefault();
//     let name=document.getElementById('name').value;
//     let email=document.getElementById('email').value;

//     let contact=document.getElementById('contact').value;

//     let password=document.getElementById('password').value;

//     console.log({name,email,contact,password});

// })

// let formData={};
// function handlechange (e){
//     FormData={...FormData,[e.target.name]:e.target.value};
//     console.log(formData);
// }

// document.querySelectorAll('input').forEach((item)=>{
//     item.addEventListener('input',handlechange);
// })

//Async JS
//setTimeOut
//setinterval
//cleartimeout
//clearinterval

// setTimeout(()=>{
//     console.log("hello world");
// },2000)

setInterval(()=>{
     console.log("hello world");
},2000)
