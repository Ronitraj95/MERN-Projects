import mongoose from "mongoose";


export const connectDB = async()=>{
    await mongoose.connect('_')//use your mongodb url
    .then(()=>console.log("DB Connected"));
}