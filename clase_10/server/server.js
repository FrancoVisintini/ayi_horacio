const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const User = require("./models/UserModel")
const userRoutes = require("./routes/userRoutes")

const app = express()

app.use(bodyParser.json())
app.use(cookieParser())
app.use(userRoutes)


mongoose.connect("mongodb+srv://test_ayi_cuatro:testayicuatro123@cluster0.hqf55.mongodb.net/test?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to MongoDB")
  })

app.listen(3001, () => {
  console.log("Server is running on port 3001")
})








/* 

REACT + EXPRESS (CSR)

app.get("/",()=>{
  res.sendFile()
})

app.get("*",()=>{
  res.sendFile()
}) 

-------------------------------------------


ReactDom.renderToString(<App/>)(SSR)


-------------------------------------------


Static Site Generation


NEXT.js 

*/


