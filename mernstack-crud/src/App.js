import './App.css';
import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CreateStudent from './components/create-student.component'
import EditStudent from './components/edit-student.component'
import StudentList from './components/student-list.component'
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Home from './components/home.component';

function App() {
  return (
    <div className="App">{/* className="App" */}
      <Router>
        <header>{/* className='App-header' */} 
          <Navbar bg='dark' variant='dark'>
            <Container>
              <NavbarBrand>
                <Link to={'/'} className='nav-link'>
                  React MERN Stack App
                </Link>
              </NavbarBrand>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/create-student'} className='nav-link'>
                    Create Student
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/student-list'} className='nav-link'>
                    Student List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <Container>
          <Row>
            <Col>{/* md={12} */}
              <div className='wrapper'>{/* className='wrapper' */}
                <Switch>
                  <Route
                    exact
                    path={'/'}
                    component={() => <Home />}
                  />
                  <Route
                    exact
                    path={'/create-student'}
                    component={(props) => <CreateStudent {...props} />}
                  />
                  <Route
                    exact
                    path={'/edit-student/:id'}
                    component={(props) => <EditStudent {...props} />}
                  />
                  <Route
                    exact
                    path={'/student-list'}
                    component={(props) => <StudentList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
