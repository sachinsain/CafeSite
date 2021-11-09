const express=require('express')
const fs=require('fs')
const PORT=3000;
const app=express();
const Home=fs.readFileSync('./view/index.html')
//routes
app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.send(Home);
})

//server
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})