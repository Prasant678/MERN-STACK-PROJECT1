import mongoose from "mongoose";

export const dbconnect = ()=>{
    mongoose.connect("mongodb+srv://prasantrao917:prasant567@cluster0.bmd1w76.mongodb.net/?retryWrites=true",{dbName : "Event_massage"}).then(()=>{
        console.log("connected sucessfully");
    }).catch(err=>{
        console.log("Not connected", err);
    })
};