import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class Header extends React.Component {
  render() {
    return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
        <Navbar.Brand>Can of Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="/about" className="nav-link">About Us</Link></NavItem>
        {
                this.props.auth0.isAuthenticated && <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>}
      </Navbar>
      <LogoutButton/>
      <LoginButton/>
        {/* {this.props.auth0.isAuthenticated ? <LogoutButton/> : <LoginButton/>} */}
    </>
    )
  }
}

export default withAuth0(Header);
