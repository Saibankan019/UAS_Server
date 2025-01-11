const prisma = require('../db');  
const jwt = require('jsonwebtoken');  
const bcrypt = require('bcrypt');  
  
const JWT_SECRET = process.env.JWT_SECRET || 'your-jwt-secret';  
  
const registerUser = async (req, res) => {  
    const { firstName, lastName, email, password, username, phone, description, profilePic } = req.body;  
    try {  
        const hashedPassword = await bcrypt.hash(password, 10);  
        const user = await prisma.user.create({  
            data: {  
                firstName,  
                lastName,  
                email,  
                password: hashedPassword,  
                username,  
                phone,  
                description,  
                profilePic,  
            },  
        });  
        const token = jwt.sign({ userId: user.id }, JWT_SECRET);  
        res.status(201).json({ user, token });  
    } catch (error) {  
        console.error(error);  
        res.status(400).json({ message: 'Error registering user' });  
    }  
};  
  
const loginUser = async (req, res) => {  
    const { email, password } = req.body;  
    try {  
        const user = await prisma.user.findUnique({  
            where: { email },  
        });  
        if (!user) {  
            return res.status(401).json({ message: 'Invalid email or password' });  
        }  
        const isPasswordValid = await bcrypt.compare(password, user.password);  
        if (!isPasswordValid) {  
            return res.status(401).json({ message: 'Invalid email or password' });  
        }  
        const token = jwt.sign({ userId: user.id }, JWT_SECRET);  
        res.json({ user, token });  
    } catch (error) {  
        console.error(error);  
        res.status(400).json({ message: 'Error logging in' });  
    }  
};  
  
const getUserProfile = async (req, res) => {  
    const { userId } = req.params; // Get userId from URL parameters  
    try {  
        const user = await prisma.user.findUnique({  
            where: { id: parseInt(userId) },  
            include: {  
                courses: true, // Include courses related to the user  
            },  
        });  
        if (!user) {  
            return res.status(404).json({ message: 'User not found' });  
        }  
        res.json(user);  
    } catch (error) {  
        console.error(error);  
        res.status(400).json({ message: 'Error fetching user profile' });  
    }  
};  
  
const updateUser = async (req, res) => {  
    const userId = req.user.id; // Get userId from the authenticated user  
    const { firstName, lastName, email, username, phone, description, profilePic } = req.body;  
  
    try {  
        const updatedUser = await prisma.user.update({  
            where: { id: userId }, // Use the authenticated user's ID  
            data: {   
                firstName,   
                lastName,   
                email,
                username,   
                phone,   
                description,   
                profilePic   
            },  
        });  
        res.json(updatedUser);  
    } catch (error) {  
        console.error(error);  
        res.status(400).json({ message: 'Error updating user' });  
    }  
};  
  
module.exports = {  
    registerUser,  
    loginUser,  
    getUserProfile,  
    updateUser,  
};  
