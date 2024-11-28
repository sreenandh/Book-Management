import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../redux/bookSlice';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const BookForm = ({ book = null }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
      setGenre(book.genre);
    }
  }, [book]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const bookData = { title, author, genre };
    
    if (book) {
      // Update existing book
      dispatch(updateBook({ ...bookData, id: book.id }));
    } else {
      // Add new book
      dispatch(addBook(bookData));
    }
    
    navigate('/');
  };

  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter book title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter author name" 
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Genre</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter book genre" 
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {book ? 'Update Book' : 'Add Book'}
        </Button>
      </Form>
    </Container>
  );
};

export default BookForm;