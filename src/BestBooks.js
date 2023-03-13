import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      noBook: true,
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

    /* TODO: render all the books in a Carousel */

    let booksToCarousel = this.state.books.map(
      i => {
        return (
          <Carousel.Item key={i._id}>
            <img
              className="book"
              src="http://via.placeholder.com/1550x500"
              alt={i.title}
            />
            <Carousel.Caption>
              <h3>{i.title}</h3>
              <p>{i.description}</p>
              <p>Status: {i.status ? 'In stock': 'Out of stock'}</p>
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
        ) : (
          <h3>There is no book, bye.</h3>
        )}
      </>

    )
  }
}

export default BestBooks;
