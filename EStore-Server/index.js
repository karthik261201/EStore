const express = require('express');
const productCategories = require('./routes/ProductCategories');
const products = require('./routes/products');
const users = require('./routes/users');
const orders = require('./routes/orders');
const cors = require('cors');
const app = express()
const PORT = 5001;
const bodyparser = require('body-parser')

app.use(cors());

app.use(bodyparser.json())
app.use('/productCategories',productCategories)
app.use('/products',products)
app.use('/users',users)
app.use('/orders',orders)

const server = app.listen(PORT, () => {
    console.log("App is running on the port 5001");
})