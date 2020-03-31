import React, { Component } from 'react';
import { Navbar, Container, Col, Row, Table, Button, ButtonGroup } from 'react-bootstrap';

class AdminView extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Resumen
          </Navbar.Brand>
        </Navbar>

        <Container>
          <Row>
            <Col>
              <div style={{marginTop: "1%"}}>
                <ButtonGroup className="mb-2">
                  <Button variant="dark">Desarrollador</Button>
                  <Button variant="dark">Artista</Button>
                  <Button variant="dark">Músico</Button>
                </ButtonGroup>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
        
      </div>
    );
  }
}

export default AdminView;
