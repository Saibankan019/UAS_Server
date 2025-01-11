const prisma = require('../db');      
const { body, validationResult } = require('express-validator'); // Import express-validator for validation    
  
// Validation middleware for creating announcements    
const validateAnnouncement = [    
    body('courseId').isInt().withMessage('Course ID must be an integer'),    
    body('teacherId').isInt().withMessage('Teacher ID must be an integer'),    
];    
  
// Function to create an announcement      
const createAnnouncement = async (req, res) => {      
    const errors = validationResult(req); // Validate incoming request    
    if (!errors.isEmpty()) {    
        return res.status(400).json({ errors: errors.array() });    
    }    
  
    const { courseId, teacherId } = req.body;      
  
    try {      
        const announcement = await prisma.announcement.create({      
            data: {      
                courseId,      
                teacherId, // Ensure teacherId is set correctly      
            },      
        });      
        res.status(201).json(announcement);      
    } catch (error) {      
        console.error('Error creating announcement:', error);      
        res.status(500).json({ message: 'Error creating announcement' });      
    }      
};      
  
// Function to get all announcements      
const getAllAnnouncements = async (req, res) => {      
    try {      
        const announcements = await prisma.announcement.findMany({      
            include: {      
                teacher: true, // Show information about the teacher      
                course: true, // Show information about the related course      
            },      
        });      
        res.json(announcements);      
    } catch (error) {      
        console.error('Error fetching announcements:', error);      
        res.status(500).json({ message: 'Error fetching announcements' });      
    }      
};      
  
// Function to get an announcement by ID      
const getAnnouncementById = async (req, res) => {      
    const { announcementId } = req.params;      
  
    try {      
        const announcement = await prisma.announcement.findUnique({      
            where: { id: parseInt(announcementId) },      
            include: {      
                teacher: true, // Show information about the teacher      
                course: true, // Show information about the course      
            },      
        });      
        if (!announcement) {      
            return res.status(404).json({ message: 'Announcement not found' });      
        }      
        res.json(announcement);      
    } catch (error) {      
        console.error('Error fetching announcement:', error);      
        res.status(500).json({ message: 'Error fetching announcement' });      
    }      
};      
  
// Function to update an announcement      
const updateAnnouncement = async (req, res) => {        
    const { announcementId } = req.params;        
    const { courseId, teacherId } = req.body;    
  
    console.log('Updating announcement with ID:', announcementId); // Log the announcement ID  
    console.log('Request Body:', req.body); // Log the request body  
  
    try {        
        const updatedAnnouncement = await prisma.announcement.update({        
            where: { id: parseInt(announcementId) },        
            data: {        
                courseId,        
                teacherId,        
            },        
        });        
        res.json(updatedAnnouncement);        
    } catch (error) {        
        console.error('Error updating announcement:', error); // Log the error details  
        res.status(500).json({ message: 'Error updating announcement', error: error.message }); // Include error message in response  
    }        
};  
  
      
  
// Function to delete an announcement      
const deleteAnnouncement = async (req, res) => {      
    const { announcementId } = req.params;    
  
    try {      
        await prisma.announcement.delete({      
            where: { id: parseInt(announcementId) },      
        });      
        res.status(204).send(); // No Content      
    } catch (error) {      
        console.error('Error deleting announcement:', error);      
        res.status(500).json({ message: 'Error deleting announcement' });      
    }      
};      
  
module.exports = {      
    createAnnouncement,      
    getAllAnnouncements,      
    getAnnouncementById,      
    updateAnnouncement,      
    deleteAnnouncement,      
    validateAnnouncement, // Export the validation middleware    
};      
