import React from 'react';
import Alert from 'react-bootstrap/Alert'

class Welcome extends React.Component {
  render() {
    console.log('welcome page is working');
    return (
      <Alert variant="danger">
        Please login in
      </Alert>

    )
  }
}

export default Welcome;