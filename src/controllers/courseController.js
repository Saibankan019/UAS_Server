const prisma = require('../db');  
  
const createCourse = async (req, res) => {  
    const teacherId = req.user.id;  
    const { name, description, url, site, price, maxStudents, categoryId } = req.body;  
  
    try {  
        const categoryExists = await prisma.category.findFirst({  
            where: { id: categoryId },  
        });  
  
        if (!categoryExists) {  
            return res.status(400).json({ message: 'Invalid categoryId' });  
        }  
  
        const course = await prisma.course.create({  
            data: {  
                name,  
                description,  
                url,  
                site,  
                price,  
                maxStudents,  
                teacherId,  
                categoryId,  
            },  
        });  
        res.status(201).json(course);  
    } catch (error) {  
        console.error(error);  
        res.status(400).json({ message: 'Error creating course' });  
    }  
};  
  
const getAllCourses = async (req, res) => {  
    try {  
        const courses = await prisma.course.findMany({  
            include: {  
                teacher: true,  
                category: true,  
            },  
        });  
        res.json(courses);  
    } catch (error) {  
        console.error(error);  
        res.status(400).json({ message: 'Error fetching courses' });  
    }  
};  
  
const getCourseById = async (req, res) => {  
    const { courseId } = req.params;  
  
    try {  
        const course = await prisma.course.findUnique({  
            where: { id: parseInt(courseId) },  
            include: {  
                teacher: true,  
                category: true,  
            },  
        });  
        if (!course) {  
            return res.status(404).json({ message: 'Course not found' });  
        }  
        res.json(course);  
    } catch (error) {  
        console.error(error);  
        res.status(400).json({ message: 'Error fetching course' });  
    }  
};  
  
const updateCourse = async (req, res) => {  
    const { courseId } = req.params;  
    const { name, description, url, site, price, maxStudents, categoryId } = req.body;  
  
    try {  
        if (categoryId) {  
            const categoryExists = await prisma.category.findUnique({  
                where: { id: categoryId },  
            });  
  
            if (!categoryExists) {  
                return res.status(400).json({ message: 'Invalid categoryId' });  
            }  
        }  
  
        const updatedCourse = await prisma.course.update({  
            where: { id: parseInt(courseId) },  
            data: {  
                name,  
                description,  
                url,  
                site,  
                price,  
                maxStudents,  
                categoryId,  
            },  
        });  
        res.json(updatedCourse);  
    } catch (error) {  
        console.error(error);  
        res.status(400).json({ message: 'Error updating course' });  
    }  
};  
  
const deleteCourse = async (req, res) => {  
    const { courseId } = req.params;  
  
    try {  
        await prisma.course.delete({  
            where: { id: parseInt(courseId) },  
        });  
        res.status(204).send(); // No Content  
    } catch (error) {  
        console.error(error);  
        res.status(400).json({ message: 'Error deleting course' });  
    }  
};  
  
module.exports = {  
    createCourse,  
    getAllCourses,  
    getCourseById,  
    updateCourse,  
    deleteCourse,  
};  
