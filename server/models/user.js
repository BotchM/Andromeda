const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: { type: String, required:true },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    last_login: Date,
});
const User = mongoose.model('User', UserSchema, "user");

exports.addNewUser = async (user) => {
    // Check if email exists
    const email = await User.findOne({email: user.email});
    if (email != null) return "Duplicate email: " + user.email;

    // Add the new user
    await new User(user).save((err) => { if (err) throw err; });
    return null;
};

exports.getByEmail = async (email) => {
    const email_lower = email.toLowerCase().trim();
    return await User.find({email: email_lower});
};

// Get user by id
exports.getById = async function (id) {
    return await User.findById(id);
};

// Get user by name
exports.getByName = async function (name) {
    const name_trimmed = name.trim();
    return await User.find({name: name_trimmed});
};

// Get all users
exports.getAll = async function () {
    return await User.find({});
};