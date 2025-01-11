// src/middleware/authenticate.js  
const jwt = require('jsonwebtoken');  
const prisma = require('../db');  
  
const JWT_SECRET = process.env.JWT_SECRET || 'your-jwt-secret';  
  
const authenticate = async (req, res, next) => {  
    const token = req.header('Authorization')?.replace('Bearer ', '');  
  
    if (!token) {  
        return res.status(401).json({ message: 'Akses ditolak. Token tidak ditemukan.' });  
    }  
  
    try {  
        const decoded = jwt.verify(token, JWT_SECRET);  
        const user = await prisma.user.findUnique({  
            where: { id: decoded.userId },  
        });  
  
        if (!user) {  
            return res.status(401).json({ message: 'Akses ditolak. Pengguna tidak ditemukan.' });  
        }  
  
        req.user = user; // Simpan user di request  
        next();  
    } catch (error) {  
        console.error(error);  
        res.status(401).json({ message: 'Token tidak valid' });  
    }  
};  
  
module.exports = { authenticate };  
