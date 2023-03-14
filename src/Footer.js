import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>by Kirill Lesnykh & Thomas Lau</Navbar.Brand>
        <Navbar.Brand>Book Image<a href="https://commons.wikimedia.org/wiki/File:Books-book-pages-read-literature-159866.jpg">ليلي جبريل</a>, CC0, via Wikimedia Commons</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
