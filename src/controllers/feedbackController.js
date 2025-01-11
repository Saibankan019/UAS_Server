const prisma = require('../db');  
  
const addFeedback = async (req, res) => {  
    const { courseId, feedback } = req.body;  
    const studentId = req.user.id; // Get from JWT payload  
  
    try {  
        const newFeedback = await prisma.feedback.create({  
            data: {  
                courseId,  
                studentId,  
                feedback,  
            },  
        });  
        res.status(201).json(newFeedback);  
    } catch (error) {  
        console.error(error);  
        res.status(400).json({ message: 'Error adding feedback' });  
    }  
};  
  
const getAllFeedbacks = async (req, res) => {  
    const { courseId } = req.params;  
  
    try {  
        const feedbacks = await prisma.feedback.findMany({  
            where: { courseId: parseInt(courseId) },  
            include: { student: true }, // Include student information  
        });  
        res.json(feedbacks);  
    } catch (error) {  
        console.error(error);  
        res.status(400).json({ message: 'Error fetching feedbacks' });  
    }  
};  
  
const updateFeedback = async (req, res) => {  
    const { feedbackId } = req.params; // Get feedbackId from URL parameters  
    const { feedback } = req.body; // Get new feedback content from request body  
    const studentId = req.user.id; // Get from JWT payload  
  
    try {  
        // Check if the feedback exists  
        const existingFeedback = await prisma.feedback.findUnique({  
            where: { id: parseInt(feedbackId) },  
        });  
  
        if (!existingFeedback) {  
            return res.status(404).json({ message: 'Feedback not found' });  
        }  
  
        // Check if the feedback belongs to the user  
        if (existingFeedback.studentId !== studentId) {  
            return res.status(403).json({ message: 'You do not have permission to edit this feedback' });  
        }  
  
        // Proceed to update the feedback  
        const updatedFeedback = await prisma.feedback.update({  
            where: { id: parseInt(feedbackId) },  
            data: { feedback }, // Update the feedback content  
        });  
  
        res.json(updatedFeedback);  
    } catch (error) {  
        console.error(error);  
        res.status(400).json({ message: 'Error updating feedback' });  
    }  
};  
  
const deleteFeedback = async (req, res) => {  
    const { feedbackId } = req.params; // Get feedbackId from URL parameters  
    const studentId = req.user.id; // Get from JWT payload  
  
    try {  
        // Check if the feedback exists  
        const existingFeedback = await prisma.feedback.findUnique({  
            where: { id: parseInt(feedbackId) },  
        });  
  
        if (!existingFeedback) {  
            return res.status(404).json({ message: 'Feedback not found' });  
        }  
  
        // Check if the feedback belongs to the user  
        if (existingFeedback.studentId !== studentId) {  
            return res.status(403).json({ message: 'You do not have permission to delete this feedback' });  
        }  
  
        // Proceed to delete the feedback  
        await prisma.feedback.delete({  
            where: { id: parseInt(feedbackId) },  
        });  
  
        res.status(204).send(); // No Content  
    } catch (error) {  
        console.error(error);  
        res.status(400).json({ message: 'Error deleting feedback' });  
    }  
};  
  
module.exports = {  
    addFeedback,  
    getAllFeedbacks,  
    updateFeedback, // Export the new update method  
    deleteFeedback, // Ensure deleteFeedback is also exported  
};  
