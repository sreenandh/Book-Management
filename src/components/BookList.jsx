import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../redux/bookSlice';
import { Link } from 'react-router-dom';
import { Container, Table, Button, Row, Col, Card } from 'react-bootstrap';

const BookList = () => {
  const books = useSelector(state => state.books.bookList);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      dispatch(deleteBook(id));
    }
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={12}>
          <Card className="shadow-sm">
            <Card.Header>
              <h2 className="my-2 text-center">Book Collection</h2>
            </Card.Header>
            <Card.Body>
              {books.length === 0 ? (
                <p className="text-center text-muted">
                  No books in the collection. Add a book to get started!
                </p>
              ) : (
                <div className="table-responsive">
                  <Table striped bordered hover>
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
                            <div className="d-flex gap-2">
                              <Link 
                                to={`/edit/${book.id}`} 
                                className="btn btn-sm btn-warning"
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
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )}
              <div className="text-center mt-3">
                <Link to="/add" className="btn btn-success">
                  Add New Book
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;