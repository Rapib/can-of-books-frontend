import React from 'react';
import axios from 'axios';
import BookFromModal from './BookFormModal';
import './BestBooks.css'
import { Carousel, Button } from 'react-bootstrap';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      noBook: true,
      showForm: false,
    }
  }

  openBookFormModal = (e) => {
    e.preventDefault();
    this.setState({
      showForm: true,
    })
  }

  closeBookFormModal = (e) => {
    this.setState({
      showForm: false,
    })
  }

  submitBook = (e) => {
    e.preventDefault();
    console.log(e.target.title.value);
    console.log(e.target.description.value);
    console.log(e.target.status.checked);
    let newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.checked,
    }
    this.setState({
      showForm: false,
    })
    this.postBook(newBook);
  }

  postBook = async ( newBook ) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;
      let createdBook = await axios.post(url, newBook);
      console.log(createdBook.data);
      this.setState({
        books: [...this.state.books, createdBook.data]
      })
    } catch(error){
      console.log('error msg: ', error.response.data)
    }
  }

  deleteBook = async (id) => {
    try {
      console.log('sd');
      let url = `${process.env.REACT_APP_SERVER}/books/${id}`;
      await axios.delete(url);
      let updatedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({
        books: updatedBooks
      });
    } catch (error) {
      console.log('error msg: ', error.response.data)
    }
  }



  getBooks = async () => {
    try {
      let results = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
      this.setState({
        books: results.data,
        noBook: false,
      })
    } catch (error) {
      console.log('there is an error: ', error.response.data)
    }
  }


  componentDidMount() {
    this.getBooks();
  }


  render() {

    let booksToCarousel = this.state.books.map(
      i => {
        return (

          <Carousel.Item key={i._id}>
            <img
              className="book"
              src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Books-book-pages-read-literature-159866.jpg"
              alt={i.title}
            />
            <Carousel.Caption>
              <h3>{i.title}</h3>
              <p>{i.description}</p>
              <p>Status: {i.status ? 'In stock' : 'Out of stock'}</p>
              <Button type='submit'variant="outline-dark" onClick={()=> this.deleteBook(i._id)}>Delete this book</Button>
            </Carousel.Caption>
            
          </Carousel.Item>
        )
      }
    );
    console.log(booksToCarousel);

    return (

      <>

        <h2>Popular Books</h2>
        {this.state.books.length ? (
          <Carousel fade variant="dark">
            {booksToCarousel}

          </Carousel>

        )
          : (
            <h3>There is no book, bye.</h3>
          )}

        <Button variant="outline-success" onClick={this.openBookFormModal}>Add a book</Button>
        {this.state.showForm ?
        <BookFromModal 
        submitBook={this.submitBook}
        closeBookFormModal={this.closeBookFormModal}
        openBookFormModal={this.openBookFormModal}
        /> :
        <></>
        }
      </>

    )
  }
}

export default BestBooks;
