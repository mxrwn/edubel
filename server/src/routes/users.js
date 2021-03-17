const express = require('express');
const User = require('./../models/Users');
const router = express.Router()


router.get('/' , (req, res) => {
  res.send({
    message : '✌'
  })
})

router.get('/login', (req, res) => {
  User.find({email : 'test@gmail.com'}, (err, found) => {
    console.log(found);
    console.log(err)
    res.send({
      message : found
    })
  })
  
})


router.get('/register', async (req, res) => {
  const user = User({email : 'test@gmail.com', password : '1234'});
  const savedUser = await user.save();
  res.send({
    message : savedUser
  })
})


router.get('/decodeToken', (req, res) => {
  res.send({
    message : 'logged in'
  })
})

module.exports = router