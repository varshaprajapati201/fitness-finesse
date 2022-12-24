const mongoose=require('mongoose')
const username = process.env.DB_USER;
const password = process.env.DB_PASS;

const URL =`mongodb+srv://${username}:${password}@atlascluster.q4fqqjb.mongodb.net/fitness?retryWrites=true&w=majority`;
mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connected to database")
}).catch((e)=>{
    console.log(e);
})