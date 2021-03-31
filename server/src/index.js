const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');


const usersRouter = require('./routes/users');
const app = express();

mongoose.connect('mongodb+srv://mxrwn:hafida01@rezistance.ddmsm.mongodb.net/edubel?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

app.use(express.json());
app.use(morgan('common'));
app.use(cors())

app.use('/users', usersRouter);



app.get('/', (req, res) => {
  res.send({
    message : '🌑'
  })
})



app.listen(8000, () => {
  console.clear()
  console.log('server is on port 8000');
  
})