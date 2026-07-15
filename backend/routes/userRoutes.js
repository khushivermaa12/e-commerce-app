const express = require('express');
const { loginUser, registerUser, adminLogin } = require('../controllers/userController.js');
const userRoutes = express.Router();
//routes
userRoutes.post('/register', registerUser)
userRoutes.post('/login', loginUser)
userRoutes.post('/admin', adminLogin)

module.exports = userRoutes;