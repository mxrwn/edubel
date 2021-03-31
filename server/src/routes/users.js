const express = require('express');
const User = require('./../models/Users');
const router = express.Router()
const jwt = require('jsonwebtoken');


router.get('/' , (req, res) => {
  res.send({
    message : '✌'
  })
})

router.post('/login', (req, res) => {
  User.findOne(req.body, (err, found) => {
    console.log(found);
    console.log(err)
    if(err === null && found === null){
      res.send({
        message : 'account does not match'
      })
    }else{
      const loginToken= jwt.sign({
        email: found.email
      },"ramzy & marwane");
      res.send({
        message : loginToken
      })
    }
    })
    
  
})


router.post('/register', async (req, res) => {
  console.log(req.body)
  const user = User(req.body);
  await user.save((err, saved) => {
    if(err !== null) {
      console.log(err);
      res.send({
        message : 'user already exist'
      })
    } else{
      const userToken= jwt.sign({
       email: saved.email
      },"ramzy & marwane");
      res.send({
        message : userToken
      })
    }
  });
})


router.post('/decodeToken', (req, res) => {
 const receivedToken = req.body.token;
 const convertTokenToRead= jwt.decode(receivedToken,"ramzy & marwane");

 
  res.send({
    message : convertTokenToRead
  })
})

module.exports = router