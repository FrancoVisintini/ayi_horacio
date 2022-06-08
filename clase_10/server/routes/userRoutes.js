const express = require('express');
const jwt = require("jsonwebtoken")
const {signUpController,loginController} = require('../controllers/userControllers');

const app = express.Router();

app.post("/testlogin",(req,res)=>{

  try{
    const {JWT_TOKEN} = req.cookies
    const {token} = req.body
    if(token || JWT_TOKEN){
  
        if(token == JWT_TOKEN){}
      
        const decoded_token = jwt.verify(token||JWT_TOKEN,"secretkey")
        if(decoded_token){
          res.send("OK")
        }else{
          res.send("No se puede autenticar el usuario, compruebe los datos nuevamente")
        }
  
    }else{
      res.status(400).send("No se encuentra el usuario")
      return;
    }
  }catch(e){
    res.status(400).send("No se puede autenticar el usuario, compruebe los datos nuevamente")
    return;
  }



})

app.post("/signup", signUpController)

app.post("/login", loginController)

app.get("/currency",()=>{



  //envio la respuesta de una currency en particular 


})


module.exports = app;