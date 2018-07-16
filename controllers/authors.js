const express = require('express')
const router = express.Router();


router.get('/', (req, res) => {
  res.render('authors/index.ejs');
});


router.get('/new', (req, res) => {
  res.render('authors/new.ejs');
})


//POST ROUTE
router.post('/', (req, res) => {
  //logging req.body lets us see what we're posting in the terminal.
  console.log(req.body);
  res.send('server received the request')
});



module.exports = router;
