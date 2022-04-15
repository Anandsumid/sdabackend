const express = require('express')
const Book = require('../models/Book')
const bookController = require('../controller/bookController')
const { route } = require('express/lib/application')

const router = express.Router()

router.get('/books', bookController.getBooks)
router.post('/addBook', bookController.insertBook)
router.put('/updateBook', bookController.updateBook)
router.delete('/deleteBook', bookController.deleteBook)

router.get('/', (req, res)=>{
    res.send("This is api")
})



module.exports = router;