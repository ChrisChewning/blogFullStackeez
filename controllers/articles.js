const express = require('express');
const router = express.Router();
const Article =  require('../models/articles');



//HOME Page
router.get('/', (req, res) => {
  Article.find({}, (err, foundArticles) => {
    res.render('articles/index.ejs', {
      articles: foundArticles
    });
  });
});


router.get('/new', (req, res) => {
  res.render('articles/new.ejs')
})


//SHOW ROUTE (needs to be after new so you can see it)
router.get('/:id', (req, res) => {
  //request argument
  //look in database Author. method is to find by id.
  Article.findById(req.params.id, (err, foundArticle) => {
    //send argument
    res.render('articles/show.ejs', {
      articles: foundArticle
    });
  });
});

//EDIT ROUTE
//#1: The get route allows us to get to the edit.ejs page.
router.get('/:id/edit', (req, res) => {
  //asking our db to find this author by id
  Article.findById(req.params.id, (err, foundArticle) => {
    //our db responds...
    res.render('articles/edit.ejs', {
      //inject the variable author.
      articles: foundArticle
    });
  });
});

//#2: The put route allows us to update the information.
router.put('/:id/', (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedArticle) => {
    res.redirect('/articles');
    });
});



//POST ROUTE
router.post('/', (req, res) => {
  //logging req.body lets us see what we're posting in the terminal.
  console.log(req.body);
  //.create is sending a request to the database.
  Article.create(req.body, (err, createdArticle) => {
    console.log(createdArticle, 'this is the created article');
    //res.redirect is the send.
    res.redirect('/articles');
  });
});

//DELETE ROUTE (doesn't matter where, but Jim puts it at the bottom)

router.delete('/:id', (req, res) => {
  Article.findByIdAndDelete(req.params.id, (err, deletedArticle) => {
    console.log(deletedArticle, ' this is deletedArticle');
    res.redirect('/articles')
  })
});


module.exports = router;
