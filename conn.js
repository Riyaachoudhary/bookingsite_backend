import mongoose from "mongoose";

mongoose.connect('mongodb+srv://rc1472137:jHBEJj5dVKoBm54I@cluster0.h5fik5e.mongodb.net/backendbookingsite');

const con = mongoose.connection;

con.on('open',()=>{
    console.log("connection success");
});

const formSchema =new mongoose.Schema({
    hotelname:String,
    hotelphone:String,
    hotelemail:String,
    hotellocation:String,
    hotelrent:String,
    hotelimage:String

})
const Form = mongoose.model('Form',formSchema)

export{Form}

