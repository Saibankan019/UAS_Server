const express = require('express');  
const router = express.Router();  
const {  
    addCompletion,  
    getAllCompletions,  
    deleteCompletion,  
} = require('../controllers/completionController');  
const { authenticate } = require('../middleware/authenticate');  
  
// Add completion route  
router.post('/add', authenticate, addCompletion);  
  
// Get all completions route  
router.get('/', authenticate, getAllCompletions);  
  
// Delete completion route  
router.delete('/:completionId', authenticate, deleteCompletion); // Add this line  
  
module.exports = router;  
