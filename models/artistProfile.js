const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistProfileSchema = new Schema({
    Name: { type: String, required: true },
    specializations: [{ type: String }], // e.g., ['2D Animation', '3D Modeling']
    location: { type: String },
    Rate: { type: Number },
    availabilityStatus: { 
      type: String, 
      enum: ['available', 'busy', 'on_leave'], 
      default: 'available' 
    },
    description : {
        type : String
    }
  });
  
  module.exports = mongoose.model('ArtistProfile', artistProfileSchema);