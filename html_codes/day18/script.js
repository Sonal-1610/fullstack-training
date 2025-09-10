//dom manipulation
//document object model
// console.log(window);
// console.log(this);
// console.log(document.getElementById("container"));

let mydiv=document.getElementById("container");
// mydiv.id="box";
// console.log(mydiv.className);
// mydiv.className="header";
// console.log(mydiv.className);


// mydiv.id="box";
// console.log(document.getElementById("box"));
// mydiv.style.backgroundColor="red";
// mydiv.style.border="3px solid black";
// mydiv.style.borderRadius="50%";

// console.log(mydiv.classList);
// mydiv.classList.add("header");
// mydiv.classList.remove("box");
// mydiv.classList.toggle("hello");
// let mylink=document.getElementById("link");
// console.log(mylink);
// console.log();
// mylink.href="https://facebook.com";
// let input=document.getElementById("password");
// InputDeviceInfo.type="text";
// console.log(mydiv.getAttribute("id"));
// console.log(mydiv.getAttribute("class"));
// mydiv.setAttribute("class","header");

// mydiv.setAttribute("style","border:3px solid green");
// console.log(mydiv.innerHTML);

// let newpara=document.getElementById("para");
// console.log(newpara.innerText);
// console.log(newpara.innerHTML);
// console.log(newpara.textContent);


// newpara.innerHTML="<ul><li>first element</li></ul>"
// newpara.innerText="<ul><li>first element</li></ul>"

let newdivs=Array.from(mydiv);
console.log(newdivs);
for(let i=0;i<mydiv.clientHeight;i++){
    if(i%2==0){
        mydiv[i].style.background="red";
    }
    else{
        mydiv[i].style.background="yellow";
    }
    mydiv[i].style.padding="10px";
}

newdivs.map((item)=>{
    item.style.background="pink";
})
let arr=[10,20,30];








