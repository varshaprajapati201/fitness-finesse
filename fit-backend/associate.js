const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const associateSchema=new mongoose.Schema({
  email:{
    type:String,
  },
    userName:{
        type:String,
  
        uppercase: true,
        maxlength:22
    },
    mtime:{
        type:String,
        uppercase: true,
    },
    etime:{
        type:String,
        uppercase: true,
    },
      country:{
        type:String,
        uppercase: true,
    },
      state:{
        type:String,
        uppercase: true,
    },
      area:{
        type:String,
        uppercase: true,
    },
      address:{
        type:String,
        uppercase: true
    },
      contact:{
        type:String,
        uppercase: true,
    },
      desc:{
        type:String,
        maxlength:500,
    },
    img:{
      type:String
    }
})

associateSchema.pre('save', async function(next) {

  if(this.isModified('password')){
    this.password=await bcrypt.hash(this.password,8);
    this.cpassword=await bcrypt.hash(this.cpassword,8);
  }
  next();
});

const Associate=new mongoose.model("associate",associateSchema);

module.exports=Associate;