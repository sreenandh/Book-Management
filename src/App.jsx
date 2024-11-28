import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HomePage from './pages/HomePage';
import AddBookPage from './pages/AddBookPage';
import EditBookPage from './pages/EditBookPage';
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar bg="primary" variant="dark" className="mb-4">
          <Container fluid>
            <Navbar.Brand href="/" className="text-white">
              Book Management System
            </Navbar.Brand>
          </Container>
        </Navbar>
        
        <Container fluid>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add" element={<AddBookPage />} />
                <Route path="/edit/:id" element={<EditBookPage />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;