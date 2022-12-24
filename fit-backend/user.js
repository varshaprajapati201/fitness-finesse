const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        // required:true,
        uppercase: true
    },
    password:{
        type:String,
        // required:true,
        // minlength:6
    },
    confirmPassword:{
        type:String,
        // required:true,
        // minlength:6
    },
    userName:{
        type:String,
        // required:true,
        uppercase: true,
    },
    phoneNumber:{
        type:String,
        uppercase: true,
    },
    dob:{
        type:String,
        uppercase: true,
    },
      country:{
        type:String,
        // required:true,
        uppercase: true,
    },
      state:{
        type:String,
        // required:true,
        uppercase: true,
    },
      area:{
        type:String,
        // required:true,
        uppercase: true,
    },
    img:{
      type:String,
    }
})

userSchema.pre('save', async function(next) {

    if(this.isModified('password')){
      this.password=await bcrypt.hash(this.password,8);
      this.confirmPassword=await bcrypt.hash(this.confirmPassword,8);
    }
    next();
  });

const Associate=new mongoose.model("user",userSchema);

module.exports=Associate;