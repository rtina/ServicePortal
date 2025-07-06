const express = require('express');
const mongoose = require('mongoose');
const ejsMate = require("ejs-mate");
const path = require("path");
const app = express();
const dbUrl = "mongodb://127.0.0.1:27017/ServicePortal";
const artistProfileSchema = require("./models/artistProfile.js");
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

app.get("/browse", async (req,res)=>{
    const artistProfile = await artistProfileSchema.find({});
    res.render("client/findArtist.ejs" , {artistProfile});
})

app.get("/profile" , (req,res)=>{
    res.render("commonpage/profile.ejs");
});

app.get("/profile/:id", async (req,res)=>{
    const {id} = req.params;
    const artistDetails = await artistProfileSchema.findById(id);
    res.render("commonpage/profile.ejs", {artistDetails});
});

app.get("/servicepage" , (req,res)=>{
    res.render("client/service.ejs");
})

app.get("/signup" , (req,res)=>{
    res.render("User/signup.ejs");
})

app.listen(4000, ()=>{
    console.log("Server is listening to the port no 4000");
});
