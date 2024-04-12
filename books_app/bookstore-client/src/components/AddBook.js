import { useState } from "react"

export default function AddBook() {

    const [book,setBook] = useState({
        title:'',
        author:'',
        pages:0,
        year:new Date().getFullYear(),
        isbn:'',
        language:''
    })

    const changeHandler = (e)=>{
        setBook({
            ...book,
            [e.target.name]:e.target.value // title:valueOfTextBox
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(book);
        //call the Post operation (/api/books) to add the book
        //add the JWT token in header when making request
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2>Add Book</h2>
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" value={book.title} name="title" onChange={changeHandler} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Author</label>
                            <input type="text" value={book.author} name="author" onChange={changeHandler} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Pages</label>
                            <input type="number" value={book.pages} name="pages" onChange={changeHandler} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Year</label>
                            <input type="number" value={book.year} name="year" onChange={changeHandler} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>ISBN</label>
                            <input type="text" value={book.isbn} name="isbn" onChange={changeHandler} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Language</label>
                            <input type="text" value={book.language} name="language" onChange={changeHandler} className="form-control" />
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Add Book</button>
                    </form>
                </div>
            </div>
        </div>
    )
}