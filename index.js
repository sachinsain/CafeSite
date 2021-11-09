const express=require('express')
const fs=require('fs')
const Port=process.env.PORT||3000;
const app=express();
const Home=fs.readFileSync('./view/index.html')
//routes
app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.send(Home);
})

//server
app.listen(Port,()=>{
    console.log(`Server is running on http://localhost:${Port}`);
})