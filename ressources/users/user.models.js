import mongoose from 'mongoose';
var bcrypt = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
    email: {type: String},
    password : {type : String}
})
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

export const User = mongoose.model('user', userSchema);