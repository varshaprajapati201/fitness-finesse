const path = require('path');
const express = require('express')
const staticPath = path.join(__dirname, "../public")
const app = express();
const cors = require('cors')
const bcrypt = require('bcryptjs')
const port = process.env.PORT || 8000
const cloudinary=require('./cloudinary')
const upload =require('./multer')

app.use(express.json());
app.use(express.static(staticPath))
app.use(express.urlencoded({ extended: false }))
app.use(cors());


require('./userMongo')
const user = require('./user')
const associate = require('./associate');
const product = require('./product')



app.post("/registerAssociate",upload.single("img"),async (req, res) => {
  try {
    if (!req.body.name || !req.body.country || !req.body.state || !req.body.area || !req.body.contact || !req.body.address) {
      res.send({ result: "Fill all mandatory fields" })
    }
    if(!req.file.path)
    {
      res.send({result:" Upload a image"})
    }
    else
    {
    const result = await cloudinary.uploader.upload(req.file.path);
    const user = new associate({
      email:req.body.email,
      userName:req.body.name,
      mtime:req.body.mtime,
      etime:req.body.etime,
      country:req.body.country,
      state:req.body.state,
      area:req.body.area,
      address:req.body.address,
      contact:req.body.contact,
      desc:req.body.desc,
      img:result.secure_url
    });
  


    let data = await user.save();
    data = data.toObject();
    res.status(200).send(data);
  }
}
  catch (e) {
    console.log(e)
  }
})
app.post("/registerProduct", async (req, res) => {
  try {

    const user = new product(req.body);


    if (!req.body.name || !req.body.category || !req.body.desc) {
      res.send({ result: "Fill all mandatory fields" })
    }

    let result = await user.save();
    result = result.toObject();
    res.status(200).send(result);
  }
  catch (e) {
    console.log(e)
  }
})


app.post("/registerUser", async (req, res) => {
  try {

    const User = new user(req.body);
    if (req.body.password !== req.body.confirmPassword) {
      res.send({ result: "Password and Confirm Password did not match!!" })
    }

    let check = await user.findOne({ email: req.body.email });

    if (check !== null)
      res.send({ result: "Email Already Taken" });

    if (!req.body.email || !req.body.password || !req.body.confirmPassword || !req.body.userName || !req.body.country || !req.body.state || !req.body.area || !req.body.phoneNumber) {
      res.send({ result: "Fill all mandatory fields" })
    }
    let result = await User.save();
    result = result.toObject();
    delete result.password;
    delete result.confirmPassword;
    delete result.area;
    delete result.country;
    delete result.dob;
    delete result.phoneNumber;
    delete result._id;
    res.status(200).send(result);
  }
  catch (e) {
    console.log(e)
  }
})

app.post("/userLogin", async (req, res) => {
  try {


    if (req.body.password && req.body.email) {

      let result = await user.findOne({ email: req.body.email });
      if (result !== null) {
        result = result.toObject();

        let check = await bcrypt.compare(req.body.password, result.password);
        delete result.password;
        delete result.confirmPassword;
        if (check === true)
          res.status(200).send(result);
        else
          res.send({ result: "Invalid email or password" })

      }
      else
        res.send({ result: "No User Found" })
    }
    else
      res.send({ result: "Enter both email and password" })

  }
  catch (e) {
    console.log(e)
  }
})

app.post("/associateLogin", async (req, res) => {
  try {

    if (req.body.password && req.body.email) {
      let result = await associate.findOne({ email: req.body.email });
      if (result !== null) {
        let check = await bcrypt.compare(req.body.password, result.password);
        result = result.toObject();
        delete result.password;
        delete result.cpassword;
        if (check === true)
          res.status(200).send(result);
        else
          res.send({ result: "Invalid Email or Password" })
      }
      else
        res.send({ result: "Invalid Email or Password" })
    }
    else {
      res.send({ result: "Invalid Email or Password" })
    }
  }
  catch (e) {
    console.log(e)
  }
})

app.get('/getUser/:email', async (req, res) => {
  
  let result = await user.findOne({ email: req.params.email });
  res.send(result)

})

app.get('/gyms', async (req, res) => {
 let result= await associate.find()
    res.send(result);
    

})

app.put('/updateUser/:email', async (req, res) => {

  let result = await user.updateOne({ email: req.params.email }, { $set: req.body });
  res.send(result)

})

app.get('/getValues/:_id',async(req,res)=>{
  let result=await associate.findOne({_id:req.params._id});
  res.send(result);
})

app.listen(port, async (req, res) => {
  try {
    console.log("APP RUNNING :)")
  }
  catch (e) {
    return res.status(400).send(e);
  }
})



