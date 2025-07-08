const mongoose = require("mongoose");
const initData = require("./data.js");
const artistProfile= require("../models/artistProfile.js");

const MONGO_URL = "mongodb://localhost:27017/ServicePortal";

async function main(){
    await mongoose.connect(MONGO_URL);
}

main().then(()=>{
    console.log("Connection successfull");
}).catch( (err) =>{
    console.log("Connection unsuccefull");
});


const initDB = async()=>{
    await artistProfile.insertMany(initData.data);
    console.log("Data was initialized ");
}

initDB();