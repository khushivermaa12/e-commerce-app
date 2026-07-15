const express = require('express');
const cors = require('cors');
const connectDB = require('./config/mongodb.js');
const { connectCloudinary } = require('./config/cloudinary.js');
const userRoutes = require('./routes/userRoutes.js');
const productRoutes = require('./routes/productRoutes.js');
require('dotenv').config();
//app config
const app = express();
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()
//middleware
app.use(express.json());
app.use(cors());
//api endpoint
app.use('/api/user', userRoutes)
app.use('/api/product',productRoutes)
app.get('/', (req, res) => {
    res.send("API working");
})
app.listen(port, () => console.log(`server started on PORT ${port}`))