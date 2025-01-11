const express = require('express');  
const router = express.Router();  
const {  
    addFeedback,  
    getAllFeedbacks,  
    updateFeedback,  
    deleteFeedback,  
} = require('../controllers/feedbackController');  
const { authenticate } = require('../middleware/authenticate');  
  
// Add feedback route  
router.post('/add', authenticate, addFeedback);  
  
// Get all feedbacks route  
router.get('/:courseId', authenticate, getAllFeedbacks);  
  
// Update feedback route  
router.put('/:feedbackId', authenticate, updateFeedback); // Add this line  
  
// Delete feedback route  
router.delete('/:feedbackId', authenticate, deleteFeedback); // Ensure this line is also present  
  
module.exports = router;  
