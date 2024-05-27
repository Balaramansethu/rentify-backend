const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const buyerRouter = require("../backend-playAround/routes/BuyerRouter")
const sellerRouter = require("./routes/SellerRouter")
const loginRouter = require('./routes/loginRoute')
const signupRouter = require('./routes/signupRoute')
const userDataRouter = require('./routes/userDataRoute')

app.use(express.json())
app.use(cors())

app.use("/api/v1/seller", sellerRouter)
app.use("/api/v1/buyer", buyerRouter)
app.use('/api/v1/login',loginRouter)
app.use('/api/v1/signup',signupRouter)
app.use('/api/v1/userdata',userDataRouter)


const PORT = 3500
mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on("error", (errorMessage) => console.log(errorMessage))
db.once("open", () => console.log("Successfully connected to the database.."))

app.listen(PORT, console.log(`Server started listening at port number "${PORT}"`))
