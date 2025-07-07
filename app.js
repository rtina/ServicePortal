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
app.get("/login", (req, res) => {
    res.render("commonpage/login.ejs");
});

app.post("/login", (req, res) => {
    // Here you would typically validate credentials
    // For now, we'll just redirect to landing page
    res.redirect("/landingpage");
});

app.get("/landingpage", (req,res)=>{
    res.render("commonpage/landingpage.ejs");
});

app.get("/browse", (req,res)=>{
    res.render("client/findArtist.ejs");
})

app.get("/profile" , (req,res)=>{
    res.render("commonpage/profile.ejs");
});

app.get("/servicepage" , (req,res)=>{
    res.render("client/service.ejs");
})

app.listen(4000, ()=>{
    console.log("Server is listening to the port no 4000");
});
