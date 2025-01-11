// src/routes/courseRoutes.js    
const express = require('express');    
const {    
    createCourse,    
    getAllCourses,    
    getCourseById,    
    updateCourse,    
    deleteCourse,    
} = require('../controllers/courseController');    
const { authenticate } = require('../middleware/authenticate');    
    
const router = express.Router();    
    
// Endpoint untuk membuat kursus (memerlukan token)    
router.post('/add', authenticate, createCourse);    
    
// Endpoint untuk mendapatkan semua kursus (tidak memerlukan token)    
router.get('/', getAllCourses);    
    
// Endpoint untuk mendapatkan kursus berdasarkan ID (tidak memerlukan token)    
router.get('/:courseId', getCourseById);    
    
// Endpoint untuk memperbarui kursus (memerlukan token)    
router.put('/update/:courseId', authenticate, updateCourse);    
    
// Endpoint untuk menghapus kursus (memerlukan token)    
router.delete('/delete/:courseId', authenticate, deleteCourse);    
    
module.exports = router;    
