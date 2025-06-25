const express = require('express');
const mongoose = require('mongoose');
const ejsMate = require("ejs-mate");
const path = require("path");
const app = express();

//====================== connection to monngodb=====================
async function main(){
    await mongoose.connect(dbUrl);
}

main().then(()=>{
    console.log("Connection successfull");
}).catch( (err) =>{
    console.log("Connection unsuccefull");
});

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname,"views"));
app.use(express.urlencoded({extended : true}));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"public")));


//====================== routes =====================
app.get("/landingpage", (req,res)=>{
    res.render("commonpage/landingpage.ejs");
})


app.listen(8082, ()=>{
    console.log("Server is listening to the port no 8083");
});
