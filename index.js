const express = require('express')
const mongoose = require('mongoose')
const app = express();
const dotenv = require('dotenv')
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')

// middleware
app.use(express.json());


dotenv.config();


// routes
app.use('/api/products', productRoute);

const PORT = 4000;

app.get('/', (req, res) => {
    res.send(`live on the port ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`)
});

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to database")
})
.catch(() => {
    console.log("Error in connnecting to database")
})