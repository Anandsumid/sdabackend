const Book = require("../models/Book")


function getBooks(req, res){
    Book.find({}, (err, data)=>{
        if (err) res.json({ success: false, data: error });
        else res.json({ success: true, data: data });
    })
}
const insertBook = (req, res)=>{
    user = req.body;
    let newBook = new Book(user)
    newBook.save()
        .then(data => res.json({success: true, data: data}))
        .catch(err=> res.json({success: false, error: err}))
}
const updateBook = (req, res)=>{
    Book.findByIdAndUpdate(req.body.id, req.body, (err, data)=>{
        if (err) {res.json({success: false, error: err})}
        else{
            res.json({success: true, data: data})
        }
    } )
}
const deleteBook = (req, res) => {
    Book.findByIdAndDelete(req.body.id, (err, data)=>{
        if(err) {res.json({success: false, error: err})}
        else { res.json({success: true, data: data}) }
    })
}


module.exports = {
    getBooks,
    insertBook,
    updateBook,
    deleteBook
}