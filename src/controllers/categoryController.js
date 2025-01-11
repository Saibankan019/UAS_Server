const prisma = require('../db');  
  
const createCategory = async (req, res) => {  
    const { name } = req.body;  
  
    try {  
        const category = await prisma.category.create({  
            data: { name },  
        });  
        res.status(201).json(category);  
    } catch (error) {  
        console.error(error);  
        res.status(400).json({ message: 'Error creating category' });  
    }  
};  
  
const getAllCategories = async (req, res) => {  
    try {  
        const categories = await prisma.category.findMany();  
        res.json(categories);  
    } catch (error) {  
        console.error(error);  
        res.status(400).json({ message: 'Error fetching categories' });  
    }  
};  
  
const updateCategory = async (req, res) => {  
    const { categoryId } = req.params;  
    const { name } = req.body;  
  
    try {  
        const category = await prisma.category.update({  
            where: { id: parseInt(categoryId) },  
            data: { name },  
        });  
        res.json(category);  
    } catch (error) {  
        console.error(error);  
        res.status(400).json({ message: 'Error updating category' });  
    }  
};  
  
const deleteCategory = async (req, res) => {  
    const { categoryId } = req.params;  
  
    try {  
        await prisma.category.delete({  
            where: { id: parseInt(categoryId) },  
        });  
        res.status(204).send(); // No Content  
    } catch (error) {  
        console.error(error);  
        res.status(400).json({ message: 'Error deleting category' });  
    }  
};  
  
module.exports = {  
    createCategory,  
    getAllCategories,  
    updateCategory,  
    deleteCategory,  
};  
