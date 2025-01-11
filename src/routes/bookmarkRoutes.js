// src/routes/bookmarkRoutes.js  
const express = require('express');  
const { addBookmark, getAllBookmarks, deleteBookmark } = require('../controllers/bookmarkController');  
const { authenticate } = require('../middleware/authenticate');  
  
const router = express.Router();  
  
// Route untuk menambahkan bookmark  
router.post('/add', authenticate, addBookmark);  
  
// Route untuk mendapatkan semua bookmark  
router.get('/', getAllBookmarks);  
  
// Route untuk menghapus bookmark  
router.delete('/:bookmarkId', authenticate, deleteBookmark);  
  
module.exports = router;  
