const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/skillscraftRegistration",{
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(()=>{
    console.log("Connection Successfull!")
}).catch((e)=>{
    console.log(e)
})