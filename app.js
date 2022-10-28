const express = require("express");
const app = express();

//templete engine
app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.status(200).render('index',{
        pageName:"index"
    })
});

app.get("/about",(req,res)=>{
    res.status(200).render('about',{
        pageName:"about"
    })
})

app.listen(3000,()=>{
    console.log("server 3000 portunda calisti");
})