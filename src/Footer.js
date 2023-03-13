import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>by Kirill Lesnykh & Thomas Lau</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
