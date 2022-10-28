const express = require("express");
const mongoose = require("mongoose");
const pageRoute = require('../smartEdu/routes/pageRoute');
const courseRoute = require('../smartEdu/routes/courseRoute');


const app = express();


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'))
// connect Db
mongoose.connect('mongodb://localhost/smartedu-db')
.then(() => {
    console.log('database ile bağlantı başarıyla kuruldu');
});

//templete engine
app.set("view engine","ejs");
app.use(express.static("public"));

// routes
app.use("/", pageRoute);
app.use("/courses", courseRoute);


app.listen(3000,()=>{
    console.log("server 3000 portunda calisti");
})