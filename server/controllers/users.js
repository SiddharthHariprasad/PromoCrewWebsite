import UserDetails from '../models/UserDetails.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signin = async (req, res) => {
    const { email, password } = req.body;    

    try {
        const existingUser = await UserDetails.findOne({ email });

        if (!existingUser) return res.status(404).json({ message: "User doesn't exist!"});
        
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid Credentials!" });
        
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        
        res.status(200).json({ result: existingUser, token });
        
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}

export const signup = async (req, res) => {
    const {email, password, confirmPassword, firstName, lastName, serviceProvider} = req.body;
    
    try {
        const existingUser = await UserDetails.findOne({ email });
        
        if (existingUser) return res.status(400).json({ message: "User already exist!"});
    
        if (password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match"});
        
        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = await UserDetails.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`, serviceProvider });

        const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ result: newUser, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}