const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const studentSchema=new Schema({
    name:{
        type:String,
        required:true,
        // unique:true,
        // match:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        validate:{
            validator:function(value){
                return value.endsWith("@krmu.edu.in");
            }
        }
    },
    section:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true,
        enum:["Btech","BCA","MCA"]
    },
    semester:{
        type:Number,
        required:true,
        min:1
    },
    marks:{
        type:Number,
        required:true,
        min:0,
        max:100
    },
    contact:{
        type:Number,
        required:true,
        minlength:10,
        maxlength:10
    },
    city:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("students",studentSchema);