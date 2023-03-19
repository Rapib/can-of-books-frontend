import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (

      <ListGroup>
        <ListGroup.Item variant="warning"><img src={user.picture} alt={user.name} /></ListGroup.Item>
        <ListGroup.Item variant="success">{user.name}</ListGroup.Item>
        <ListGroup.Item>{user.email}</ListGroup.Item>

      </ListGroup>

    )
  );
};

export default Profile;