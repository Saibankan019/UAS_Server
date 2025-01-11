const express = require('express');  
const router = express.Router();  
const {  
    registerUser,  
    loginUser,  
    getUserProfile,  
    updateUser,  
} = require('../controllers/userController');  
const { authenticate } = require('../middleware/authenticate'); // Ensure this path is correct  
  
// User registration route  
router.post('/register', registerUser);  
  
// User login route  
router.post('/login', loginUser);  
  
// Get user profile route  
router.get('/profile/:userId', getUserProfile);  
  
// Update user profile route with authentication  
router.put('/update/:userId', authenticate, updateUser);  
  
module.exports = router;  
