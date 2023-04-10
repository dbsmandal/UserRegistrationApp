const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
const userRoute=require("./routes/user")
dotenv.config();

app.use(express.json());


mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("MongoDB Conected!")
    })
    .catch((err) => {
        console.log(err)
    });

    app.use("/api/users",userRoute);
app.listen(8800, () => {
    console.log("Backend Server is Running!")
})