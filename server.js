const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
require('./db/db')



//Set up your middleware before the controller, b.c the controller is going to use it. Body Parser allows us to use req.body 
app.use(bodyParser.urlencoded({exteded: false}));



const authorsController = require('./controllers/authors.js');
app.use('/authors', authorsController);




app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(port, () => {
  console.log('App is listening on port 3000');
});
