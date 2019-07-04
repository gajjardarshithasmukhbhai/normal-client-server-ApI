const express=require("express");
const app=express();
const body=require("body-parser");
const router=require('./router/API.js');
app.use(body.json ());
app.use((req,res,next)=>{
	res.setHeader("Access-Control-Allow-Origin",'*');
	res.setHeader("Access-Control-Allow-Methods",'GET,POST,DELETE');
	res.setHeader("Access-Control-Allow-Headers",'Content-Type,Authorization');
	next();
});
app.use("/feed",router);
app.listen(8080,()=>{
	console.log("i am run for mern stack and api app");
});