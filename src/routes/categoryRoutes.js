// src/routes/categoryRoutes.js  
const express = require('express');  
const { createCategory, getAllCategories, updateCategory, deleteCategory } = require('../controllers/categoryController');  
const { authenticate } = require('../middleware/authenticate');  
  
const router = express.Router();  
  
// Route untuk membuat kategori  
router.post('/add', authenticate, createCategory);  
  
// Route untuk mendapatkan semua kategori  
router.get('/', getAllCategories);  
  
// Route untuk memperbarui kategori  
router.put('/:categoryId', authenticate, updateCategory);  
  
// Route untuk menghapus kategori  
router.delete('/:categoryId', authenticate, deleteCategory);  
  
module.exports = router;  
