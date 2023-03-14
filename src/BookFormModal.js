import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './BookFormModal.css';
class BookFormModal extends React.Component {
  render() {
    return (
      <>

        <Modal show={this.props.openBookFormModal} onHide={this.props.closeBookFormModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add your book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.submitBook}>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Book title" />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Book description" />
              </Form.Group>
              <Form.Group controlId="status">
                <Form.Check type="checkbox" label="Status: In Stock" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    )

  }
}

export default BookFormModal;