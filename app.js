const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("merhabaa")
})

app.listen(3000,()=>{
    console.log("server 3000 portunda calisti");
})