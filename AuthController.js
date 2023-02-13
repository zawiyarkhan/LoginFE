const User = require('../Models/User');
const jwt = require('jsonwebtoken');

// handle errors function





// jwt web token
const maxage = 2 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({id}, 'Sweater Weather', {
        expiresIn: maxage
    });
};


// signup function
const SignUp = async (req,res)=>{
    const { email, password } = req.body;

    try {
        const user = await User.create({ email, password });
        const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxage * 1000});
        res.json({user: user._id});
    } catch (error) {
        console.log(error);
    }
}


// loginfunction

const Login = async (req,res)=>{
    
    //console.log("hello there",email)
    try {
        const { email, password } = req.body;
        // console.log("hello there",email)
        const user = await User.login(email, password);
        console.log(user)
        const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxage * 1000});

        res.json({user: user.email});
    } catch (error) {
        console.log(error);
    }
}

const Logout = (req, res)=>{
    res.cookie('jwt', "", {maxAge:1});
    res.send("User logged out");
}

module.exports = {SignUp, Login, Logout};