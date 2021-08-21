const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    Full_Name:String,
    Profile_Image:String,
    Uid:String,
    StoreStatus:Boolean,
    address:String,
    storeName:String,
    mobile:String,
    pincode:String,
    town:String,
    location:{
        type: { type: String },
        coordinates: []
       
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema,'Store');