const express = require('express')
const app = express();

// Configurations
const port = 8080

// Import our data
const products = require('./products.js');

// Get Products
app.get('/data', (req, res) => {
    res.send(products)
})
        

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

