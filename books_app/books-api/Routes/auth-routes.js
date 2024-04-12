const {Router} = require('express');
const User = require('../models/user')
const router = Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//POST /api/auth/register
router.post('/register', async(req, res) => {
    const {name, email, password, mobile} = req.body;
    let user = await User.findOne({email: email});
    if(user){
        res.status(400).json({message: 'user already exists'});
        return;
    }
    let hashedPassword = await bcrypt.hash(password,10);
    let newUser = new User({
        name: name,
        email: email,
        password: hashedPassword,
        mobile: mobile
    });
    await newUser.save();
    res.status(201).json(newUser);
});

//POST /api/auth/login
router.post('/login', async(req, res) => {
    const { email, password} = req.body;
    let user = await User.findOne({email: email});
    if(!user){
        res.status(400).json({ message: 'Invalid email or password'});
        return;
    }
    let isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        res.status(400).json({ message: 'Invalid email or password' });
        return;
    }
    //user is authenticated, noe to generate the JWT token
    const payload = {
        sub: user._id.toString(),
        email: user.email,
        name: user.name,
        mobile: user.mobile,
        iss: 'bookstore',
        aud: 'bookstore-client'
    };
    const token = await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h'});
    res.status(200).json({
        email: user.email,
        token: token,
        name: user.name
    });
});

exports.authRouter = router;