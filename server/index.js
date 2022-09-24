const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path'); 
const mongoose = require('mongoose')
const Product = require('./db/Product');
const MONGO_URI = process.env.MONGO_URI;

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

const connectDB = mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, async () => {
  console.log('Connected to DB 📦');
  const products = await Product.find();
  console.log(products);

      
});

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
  });
}

app.post("/add-product", async(req, res) => {

  header("Access-Control-Allow-Origin: http://localhost:5000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type");
  let product = new Product(req.body);
 let result= await product.save((err, product) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(product);
    }
  });
  res.send(result);
  console.log(result);
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} 🚀`);
});