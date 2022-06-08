const User = require("../models/UserModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const signUpController = async (req, res) => {
  
  const { username, password } = req.body

  try {

    bcrypt.hash(password, 10, async (err, hash) => {

      if (err) {
        res.status(500).json("Hubo un error al encriptar la contraseña")
      }

      const nuevo_usuario = new User({username, password:hash})
      await nuevo_usuario.save()
  
      res.send("OK")

    })
    

  }catch (e){
    res.status(500).send("Hubo un error")
  }
  
}


const loginController = async (req,res) => {
  
  const { username, password } = req.body

  try {

    const resultado = await User.find({username})

    if(resultado.length == 0 ){
      res.status(400).send("No se encuentra el usuario")
      return;
    }

    const storedPassword = resultado[0].password

    bcrypt.compare(password,storedPassword,(err)=>{
      if(err){
        res.status(400).send("No se puede autenticar el usuario, compruebe los datos nuevamente")
        return;
      }
      
      const token = jwt.sign({
        password , username
      },"secretkey",{
        expiresIn : 60 * 1
      })

      res.cookie("JWT_TOKEN",token)
      res.send({token})

    })

  }catch(e){
    res.status(500).send("Hubo un error")
  }
}

module.exports = {
  signUpController,
  loginController
}