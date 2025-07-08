const artistProfileSchema = require("../models/artistProfile.js");


module.exports.renderArtistProfile = async (req,res) => {
    const artistProfile = await artistProfileSchema.find({});
    res.render("artistProfile.ejs", {artistProfile});
}