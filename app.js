const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

app.set("view engine", "ejs");
app.use(cors());

const useRouter = require("../backend-playAround/routes/BuyerRouter");

app.use("/users", useRouter);

const PORT = 3000;
mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on("error", (errorMessage) => console.log(errorMessage));
db.once("open", () => console.log("Connected successfully to the database.."));
app.listen(PORT);
console.log(`Server started listening at port number "${PORT}"`);
