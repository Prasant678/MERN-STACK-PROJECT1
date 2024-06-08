import mongoose from "mongoose";
import validator from "validator";

const massageSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Name Required"],
        minLength : [3, "Name Must Contain At Least 3 Characters"]
    },
    email : {
        type : String,
        required : [true, "Email Required"],
        validate : [validator.isEmail, "please provide valid Email"]
    },
    subject : {
        type : String,
        required : [true, "Subject Required"],
        minLength : [5, "Subject Must Contain At Least 5 Characters"]
    },
    massage : {
        type : String,
        required : [true, "Massage Required"],
        minLength : [10, "Name Must Contain At Least 10 Characters"]
    }
})

export const Massage = mongoose.model("massage",massageSchema);