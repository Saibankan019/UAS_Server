const express = require('express');  
const router = express.Router();  
const {  
    createAnnouncement,  
    getAllAnnouncements,  
    getAnnouncementById,  
    updateAnnouncement,  
    deleteAnnouncement,  
    validateAnnouncement,  
} = require('../controllers/announcementController');  
  
// Route to create an announcement (POST)  
router.post('/add', validateAnnouncement, createAnnouncement); // Validate before creating  
  
// Route to get all announcements (GET)  
router.get('/', getAllAnnouncements);  
  
// Route to get an announcement by ID (GET)  
router.get('/:announcementId', getAnnouncementById);  
  
// Route to update an announcement (PUT)  
router.put('/update/:announcementId', validateAnnouncement, updateAnnouncement); // Validate before updating  
  
// Route to delete an announcement (DELETE)  
router.delete('/delete/:announcementId', deleteAnnouncement);  
  
module.exports = router;  
