const mongoose = require('mongoose');

const UsersShema = mongoose.Schema({
  email : {
    type : String,
    required : true,
    index : {
      unique : true
    }
  },
  password : {
    type : String,
    required : true
  },
}, {
  timestamps : true
})

const Users = mongoose.model('users', UsersShema);

module.exports = Users;