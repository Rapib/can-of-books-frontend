import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class UpdateBookModal extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    let bookToUpdate = {
      title: e.target.title.value || this.props.book.title,
      description: e.target.description.value || this.props.book.description,
      status: e.target.status.checked || this.props.book.status,
      _id: this.props.book._id,
      __v: this.props.book.__v
    }

    this.props.updateBook(catToUpdate);
  }

  render() {

    return (
      <>
      <Modal show={this.props.updateOpenBookFormModal} onHide={this.props.updateCloseBookFormModal}>
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
      </>)
  }

}

export default UpdateBookModal;