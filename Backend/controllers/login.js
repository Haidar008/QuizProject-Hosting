const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function login(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Email is not registered with us",
            });
        }

        const match = await bcrypt.compare(password, user.passWord);

        if (!match) {
            return res.status(403).json({
                success: false,
                message: "Incorrect Password",
            });
        }

        const payload = {
            email: email,
            id: user._id,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
        const options = {
            expiresIn: 2 * 60 * 60 * 1000, // 2 hours
            httpOnly: false,
        };

        res.status(200).cookie("token", token, options).json({
            success: true,
            message: "Login Successful",
            token,
            user,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong, try again",
            error: error.message, // Sending only the error message
        });
    }
}

module.exports = {
    login:login,
};
