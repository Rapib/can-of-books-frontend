import { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup'

class Profile extends Component {

  render() {

    return (
      
        <ListGroup>
          <ListGroup.Item variant="warning">About us:</ListGroup.Item>
          <ListGroup.Item variant="info">Thomas Lau</ListGroup.Item>
          <ListGroup.Item>Full stack developer</ListGroup.Item>
          <ListGroup.Item variant="info">Kirill Lesnykh</ListGroup.Item>
          <ListGroup.Item>Full stack developer</ListGroup.Item>
        </ListGroup>

    )
  }
};

export default Profile;
