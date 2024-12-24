const express=require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const routes =require("./Routes/ToDoRoutes")
const app =express()
const PORT=process.env.PORT||5000
const cors = require("cors")

//middleware
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("mongodb connected..")).catch((err)=>console.log(err));
app.use("/api",routes)

app.listen(PORT,()=>console.log(`listening to ${PORT}`))