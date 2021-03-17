const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');


const usersRouter = require('./routes/users');
const app = express();

mongoose.connect('mongodb://localhost:27017/edubel', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

app.use(express.json());
app.use(morgan('common'));

// app.use(cors({
//   origin: 'http://www.edubel.be'
// }))


app.get('/', (req, res) => {
  res.send({
    message : '🌑'
  })
})

app.use('/users', usersRouter);


app.listen(8000, () => {
  console.clear()
  console.log('server is on port 8000');
  
})