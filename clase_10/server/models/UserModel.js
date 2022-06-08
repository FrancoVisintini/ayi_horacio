const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  username : {
    type : String
  },
  password : {
    type : String
  },
  email : {
    type : String
  },
  token : {
    
  }
},{
  timestamps : true
})

const UserModel = mongoose.model("User", UserSchema)

module.exports = UserModel