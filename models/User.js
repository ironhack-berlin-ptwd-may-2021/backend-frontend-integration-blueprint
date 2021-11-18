const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, minlength: 10 },
  password: String, // hashed
});

const User = mongoose.model('User', userSchema);

module.exports = User;