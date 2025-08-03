import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minLength:6,
    },  
    //not compulsory(optional) can set after signup
    profileImg:{
        type:String,
        default:"" //empty   
    },
    coverImg:{
        type:String,
        default:""
    },
    bio:{
        type:String,
        default:""
    },    
},{timestamps: true})

const User = mongoose.model('User',userSchema)

export default User