const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // assuming you have a User model
const Freelancer = require('../models/Freelancer'); // assuming you have a User model
const nodemailer = require('nodemailer');

const sendVerificationEmail = (email, verificationToken) => {
    let config = {
        service: 'outlook',
        auth: {
            user: "noursamirmj@outlook.com",
            pass: "noor220181935"
        }
    }

    const mailOptions = {
        from: "noursamirmj@outlook.com",
        to: email,
        subject: 'Email Verification',
        html: `<p>Please click the following link to verify your email:</p>
            <a href="http://localhost:3000/verify/${email}" >Verify Email</a>`
    };
    let transporter = nodemailer.createTransport(config);
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};
exports.verify = async (req, res) => {
    email = req.params.email;
    let user = await User.findOne({ email: email });
    if (user != null) {
        user.isVerified = true;
        let updatedResult = await User.update({ isVerified: user.isVerified });
        return res.status(200).json({ status: isupdted, message: updatedResult });
    } else {
        console.log("process rejected");
        return res.status(400).json({
            status: false, message: "process rejected "
        });
    }
}
exports.signup = async (req, res) => {
    try {
        const { Fname, Lname, email, password, role, name, fieldOfWork,
            country,
            city,
            phoneNo,
            rating,
            about,
            bio,
            eduction,
            experience,
            skills,
            cerficates, } = req.body;

        // Check if user already exists
        console.log(req.body);
        let user = await User.findOne({ where: { email } });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        user = await User.create({
            Fname,
            Lname,
            email,
            password: hashedPassword,
            role,
        });
        console.log("role type" + user.role);
        if (user.role === "freelancer") {
            let freelancer = Freelancer.create({
                name,
                fieldOfWork,
                country,
                city,
                phoneNo,
                email,
                password,
                rating,
                about,
                bio,
                eduction,
                experience,
                skills,
                cerficates,
            })
            console.log(freelancer);
        } else if (user.role === "client") {
            console.log("client");
        }

        // Generate JWT token
        const payload = {
            user: {
                id: user.id,
                Fname: user.Fname,
                Lname: user.Lname,
                email: user.email,
            },
        };
        const token = jwt.sign(payload, "wise-dashboard-$*", { expiresIn: '10h' });
        sendVerificationEmail(user.email, token);
        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        let isCorrectPassword = await bcrypt.compare(password, user.password);
        console.log(isCorrectPassword);
        if (!user) {
            res.status(401).json({ message: 'Authentication failed' });
            return;
        }

        if (!isCorrectPassword) {
            res.status(401).json({ message: 'Authentication failed password ' });
            return;
        }

        const token = jwt.sign({ id: user.id }, 'wise-dashboard-$*');

        return res.json({ token });
    } catch (err) {
        console.log(err);
        res.status(500).send('Error while logging in.');
    }
}


