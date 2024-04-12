const {Router} = require('express');
const Book = require('../models/book')
const router = Router();

//GET /api/books
router.get('/', async(req, res) => {
    //read books from mongo db and return as JSON
    let books = await Book.find();
    res.status(200).json(books);
});

//GET /api/books/:id
router.get('/:id', async(req, res) => {
    try{
        let id = req.params.id;
        //let id = req.params["id"];
        let book = await Book.findById(id);
        if(book)
            res.status(200).json({book:book});
        else
            res.status(404).json({message: `Book with id ${id} not found`});
    }
    catch{
        console.log("error");
    }
});

//POST /api/books
router.post('/', async(req, res) =>{
    let book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
});

//PUT /api/books/:id
router.put('/:id', async(req,res) =>{
    let id = req.params.id;
    let book = await Book.findByIdAndUpdate(id, req.body);
    if (book)
        res.status(200).json(book);
    else
        res.status(404).json({ message: `Book with id ${id} not found` });
});

//DELETE //api/books/:id
router.delete('/:id', async(req,res) => {
    let id = req.params.id;
    let book = await Book.findByIdAndDelete(id);
    if(book)
        res.status(200).json(book);
    else
        res.status(404).json({ message: `Book with id ${id} not found` });
});

exports.booksRouter = router;