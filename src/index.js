const express = require('express');        
const cors = require('cors');        
const dotenv = require('dotenv');        
const { PrismaClient } = require('@prisma/client');        
  
// Load environment variables from .env file    
dotenv.config();        
  
const app = express();        
const prisma = new PrismaClient();        
  
// Middleware untuk mengizinkan CORS    
app.use(cors());        
app.use(express.json());        
  
// Middleware untuk logging    
app.use((req, res, next) => {      
    console.log(`${req.method} ${req.url}`);      
    next();      
});      
  
// Rute dasar    
app.get('/', (req, res) => {        
    res.send('Welcome to the LMS API!'); // Pesan sambutan        
});        
  
// Health check endpoint    
app.get('/health', (req, res) => {      
    res.status(200).json({ status: 'OK' });      
});      
  
// Import routes    
const userRoutes = require('./routes/userRoutes');        
const courseRoutes = require('./routes/courseRoutes');        
const announcementRoutes = require('./routes/announcementRoutes');        
const completionRoutes = require('./routes/completionRoutes');        
const feedbackRoutes = require('./routes/feedbackRoutes');        
const bookmarkRoutes = require('./routes/bookmarkRoutes');        
const categoryRoutes = require('./routes/categoryRoutes');        
  
// Use routes    
app.use('/users', userRoutes);        
app.use('/courses', courseRoutes);        
app.use('/announcements', announcementRoutes);        
app.use('/completions', completionRoutes);        
app.use('/feedbacks', feedbackRoutes);        
app.use('/bookmarks', bookmarkRoutes);        
app.use('/categories', categoryRoutes);        
  
// Error handling middleware    
app.use((err, req, res, next) => {      
    console.error(err.stack);      
    res.status(500).json({ message: 'Something went wrong!' });      
});      
  
// Start server    
const PORT = process.env.PORT || 3001;        
  
// Check if DATABASE_URL is defined    
if (!process.env.DATABASE_URL) {      
    console.error('DATABASE_URL is not defined in .env file');      
    process.exit(1);      
}      
  
// Start the server    
app.listen(PORT, () => {        
    console.log(`Server is running on http://localhost:${PORT}`);        
});        
