import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../redux/bookSlice';
import { Link } from 'react-router-dom';
import { Container, Table, Button } from 'react-bootstrap';

const BookList = () => {
  const books = useSelector(state => state.books.bookList);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      dispatch(deleteBook(id));
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Book Collection</h2>
      {books.length === 0 ? (
        <p>No books in the collection. Add a book to get started!</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>
                  <Link 
                    to={`/edit/${book.id}`} 
                    className="btn btn-sm btn-warning me-2"
                  >
                    Edit
                  </Link>
                  <Button 
                    variant="danger" 
                    size="sm" 
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <Link to="/add" className="btn btn-success">Add New Book</Link>
    </Container>
  );
};

export default BookList;