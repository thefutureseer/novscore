const express = require('express');
//use router part of express object
const router = express.Router();

//book model
const Book = require('../../models/Book');

//route GET request api/books: get all books
router.get('/', (req, res) => {
 Book.find()
  .sort({ date: -1 })
  .then(books => res.json(books));
});

// POST api/books 
router.post('/', (req, res) => {
  const newBook = new Book({
    name: req.body.name
    // author: req.body.author,
    // description: req.body.description,
    // image: req.body.image
  });
  newBook.save().then(book => res.json(book));
});

// DELETE api/books
router.delete('/:id', (req, res) => {
  Book.findById(req.params.id )
   .then(book => book.remove()
   .then(() => res.json({success: true})))
   .catch(err => res.status(404).json({success: false }));
});
module.exports = router;