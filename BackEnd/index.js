const express = require("express");
const Products= require("./Products/Products")
require('./db/config')
const cors = require("cors");
const app = express();
const port = 8000; 
app.use(express.json());
app.use(cors());
app.post("/products", async (req, res) => {
    try {
        const savedProduct = await Products.insertMany(req.body);
    //   const savedProduct = await product.save();
      res.status(201).json(savedProduct);
      console.log(savedProduct)
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  app.get("/products",async (req, res)=>{
   try{
    const getdata= await Products.find()
    res.send(getdata)
   }catch(error){
    res.send(error)
   }
  })
  app.get("/products/:id",async (req, res)=>{
    try{
     const getdata= await Products.find({_id: req.params.id})
     res.send(getdata)
    }catch(error){
     res.send(error)
    }
   })
  app.delete("/products", async (req, res) => {
    try {
      const getdata = await Products.deleteMany();
      res.send(getdata);
    } catch (error) {
      res.send(error);
    }
  });
  


// app.post("/products", async(req, res) => {
// try{
//     const products = new Products(req.body)
// const savedProduct = await products.save()
// console.log(savedProduct)
// // res.send(productsres)
// res.status(201).json(savedProduct);
// }catch (error){
// console.log(error)
// res.send(error)
// }
// });

app.listen(port);
