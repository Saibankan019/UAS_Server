const prisma = require('../db');    
  
const addCompletion = async (req, res) => {    
    const { contentId } = req.body; // Assuming contentId is provided in the request body    
    const studentId = req.user.id; // Get from JWT payload    
  
    try {    
        const completion = await prisma.completion.create({    
            data: {    
                studentId,    
                contentId,    
            },    
        });    
        res.status(201).json(completion);    
    } catch (error) {    
        console.error(error);    
        res.status(400).json({ message: 'Error adding completion' });    
    }    
};    
  
const getAllCompletions = async (req, res) => {    
    const studentId = req.user.id; // Get from JWT payload    
  
    try {    
        const completions = await prisma.completion.findMany({    
            where: { studentId },    
            include: { content: true }, // Include content information    
        });    
        res.json(completions);    
    } catch (error) {    
        console.error(error);    
        res.status(400).json({ message: 'Error fetching completions' });    
    }    
};    
  
const deleteCompletion = async (req, res) => {  
    const { completionId } = req.params; // Get completionId from URL parameters  
    const studentId = req.user.id; // Get from JWT payload  
  
    try {  
        // Check if the completion exists and belongs to the user  
        const completion = await prisma.completion.findUnique({  
            where: { id: parseInt(completionId) },  
        });  
  
        if (!completion) {  
            return res.status(404).json({ message: 'Completion not found' });  
        }  
  
        if (completion.studentId !== studentId) {  
            return res.status(403).json({ message: 'You do not have permission to delete this completion' });  
        }  
  
        // Proceed to delete the completion  
        await prisma.completion.delete({  
            where: { id: parseInt(completionId) },  
        });  
  
        res.status(204).send(); // No Content  
    } catch (error) {  
        console.error(error);  
        res.status(400).json({ message: 'Error deleting completion' });  
    }  
};  
  
module.exports = {    
    addCompletion,    
    getAllCompletions,    
    deleteCompletion, // Export the new delete method  
};    
