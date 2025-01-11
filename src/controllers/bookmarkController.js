const prisma = require('../db');  
  
const addBookmark = async (req, res) => {  
    const { courseId } = req.body; // Assuming courseId is provided in the request body  
    const studentId = req.user.id; // Get from JWT payload  
  
    try {  
        const bookmark = await prisma.bookmark.create({  
            data: {  
                studentId,  
                courseId, // Directly include courseId in the data object  
            },  
        });  
        res.status(201).json(bookmark);  
    } catch (error) {  
        console.error(error);  
        res.status(400).json({ message: 'Error adding bookmark' });  
    }  
};  
  
const getAllBookmarks = async (req, res) => {  
    const studentId = req.user ? req.user.id : null; // Get from JWT payload if available  
  
    try {  
        const bookmarks = await prisma.bookmark.findMany({  
            where: studentId ? { studentId } : {}, // If studentId is available, filter by it; otherwise, return all bookmarks  
            // Remove the include statement if course is not related  
        });  
        res.json(bookmarks);  
    } catch (error) {  
        console.error(error);  
        res.status(400).json({ message: 'Error fetching bookmarks' });  
    }  
};  
  
 
  
const deleteBookmark = async (req, res) => {  
    const { bookmarkId } = req.params; // Get bookmarkId from URL parameters  
  
    try {  
        await prisma.bookmark.delete({  
            where: { id: parseInt(bookmarkId) },  
        });  
        res.status(204).send(); // No Content  
    } catch (error) {  
        console.error(error);  
        res.status(400).json({ message: 'Error deleting bookmark' });  
    }  
};  
  
module.exports = {  
    addBookmark,  
    getAllBookmarks,  
    deleteBookmark,  
};  
