const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserRoutes= require("./routes/UserRoutes");

const app= express();

app.use(cors());
app.use(express.json());

const DB="mongodb+srv://gsatyam:satyam1234@cluster1.ux1obua.mongodb.net/showflix"

mongoose.set("strictQuery",false);
mongoose.set("strictQuery",true);

mongoose.connect(DB,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("DB Connetion Successfull");
})
.catch((err) => {
  console.log(err.message);
});

app.use("/api/user", UserRoutes);

app.listen(5000, () => {
console.log("server started on port 5000");
});