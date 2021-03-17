const mongoose = require('mongoose');

const UsersShema = mongoose.Schema({
  email : {
    type : String,
    min: 7,
    max: 10,
    index : {
      unique: true
    }
  },
  password : String,
})

const Users = mongoose.model('users', UsersShema);

module.exports = Users;