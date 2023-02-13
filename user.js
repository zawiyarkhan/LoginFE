const mongoose = require('mongoose')
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        validate: [isEmail]
    },
    password: {
        type: String,
        required: true,
        minlength:5

    }
})

userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.statics.login = async function(email, password){
    try {
        const user = await this.findOne({email});
        console.log(user);
        if (user) {
            const auth = await bcrypt.compare(password, user.password);
            console.log(auth);
            if (auth){
                return user;
            }
        }
    } catch (error) {
        console.log(error);
    }
}

const User = mongoose.model('Users',UserSchema)
module.exports = User