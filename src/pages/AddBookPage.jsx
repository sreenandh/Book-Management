import React from 'react';
import BookForm from '../components/BookForm';
import { Container } from 'react-bootstrap';

const AddBookPage = () => {
  return (
    <Container className="mt-4">
      <h2>Add New Book</h2>
      <BookForm />
    </Container>
  );
};

export default AddBookPage;