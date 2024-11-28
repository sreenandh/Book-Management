import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookForm from '../components/BookForm';
import { Container } from 'react-bootstrap';

const EditBookPage = () => {
  const { id } = useParams();
  const book = useSelector(state => 
    state.books.bookList.find(b => b.id === parseInt(id))
  );

  return (
    <Container className="mt-4">
      <h2>Edit Book</h2>
      {book ? (
        <BookForm book={book} />
      ) : (
        <p>Book not found</p>
      )}
    </Container>
  );
};

export default EditBookPage;