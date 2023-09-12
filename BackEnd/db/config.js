const mongoose= require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/E-comerce")
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });
  