const express=require("express");
const fs=require("fs");

const app=express();

//create =POST
// read=GET
// update=PUT
// delete=DELETE

//product crud
//list of all product & search -GET
//info of a particular product-GET
//create product-POST
//update info of product=PUT
//delete a product=DELETE

app.get("/home",(req,res)=>{
res.send("home route accessed");   // http://localhost:3000
});

app.get("/getAllProduct",(req,res)=>{
  let data=  fs.readFileSync("product.json","utf-8");
  console.log(data);
}); //http://localhost:3000/getAllProduct

app.get("/getProductById",()=>{});  //http://localhost:3000/getProductById

app.post("/createProduct",()=>{});

app.post("/updateProduct",()=>{});

app.delete("/deleteProduct",()=>{});





app.listen(3000,()=>{
    console.log("server is running on port 3000");

});
