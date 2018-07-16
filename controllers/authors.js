const express = require('express')
const router = express.Router();
const Author = require('../models/authors');


//FINDS ALL OF THE AUTHORS
router.get('/', (req, res) => {
  //find method, empty object to find everything, passing to our index.ejs. We are rendering (or injecting) into the page all the authors into the page. We are saving that in a variable called authors, whose value will be foundAuthors. We are listing out all of ours on our index page.
  Author.find({}, (err, foundAuthors) => {
      res.render('authors/index.ejs', {
        authors: foundAuthors
      });
  });
});



router.get('/new', (req, res) => {
  res.render('authors/new.ejs');
})


//SHOW ROUTE (needs to be after new so you can see it)
router.get('/:id', (req, res) => {
  //request argument
  //look in database Author. method is to find by id.
  Author.findById(req.params.id, (err, foundAuthor) => {
    //send argument
    res.render('authors/show.ejs', {
      author: foundAuthor
    });
  });
});



//POST ROUTE
router.post('/', (req, res) => {
  //logging req.body lets us see what we're posting in the terminal.
  console.log(req.body);
  //.create is sending a request to the database.
  Author.create(req.body, (err, createdAuthor) => {
    console.log(createdAuthor, 'this is the created author');
    //res.redirect is the send.
    res.redirect('/authors');
  });
});





module.exports = router;
