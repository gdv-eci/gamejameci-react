import React, { Component } from 'react';
import { Navbar, Container, Col, Row, Table, Button, ButtonGroup } from 'react-bootstrap';
import Axios from 'axios';
import Stomp from 'stompjs';

class AdminView extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [], filter: 'todos', client: null, dataRender: [] }
  }

  componentDidMount() {
    this.loadData();
    this.connectStomp();
  }

  loadData = () => {
    Axios
      .get("https://gamejamapi.herokuapp.com/api/v1/users")
      .then(res => {
        this.setState({
          data: res.data,
          dataRender: res.data
        })
      })
      .catch(err => {
        alert("A ocurrido un error");
      });
  }

  connectStomp = () => {
    var client = Stomp.client("wss://gamejamapi.herokuapp.com/ws-message");
    this.setState({
      client: client
    }, () => {
      client.connect({}, this.onConnect, this.onError);
    })
  }

  onConnect = frame => {
    this.state.client.subscribe("/topics/message", (res) => {
      console.log(res);
      this.loadData();
    });
  }

  onError = error => {
    console.log('Error: ' + error);
    this.connectStomp();
  }


  filter = category => {
    var newData = this.state.data.map((user) => {
      if (user.rol === category) {
        return user
      }
      return null;
    });
    var filtered = newData.filter((item) => {
      return item != null;
    })
    return filtered;
  }

  handleTodos = () => {
    this.setState({
      filter: 'todos',
      dataRender: this.state.data
    });
  }

  handleProgramador = () => {
    var newData = this.filter("Programador");
    this.setState({
      filter: 'programador',
      dataRender: newData
    });
  }

  handleArtista = () => {
    var newData = this.filter("Artista");
    this.setState({
      filter: 'artista',
      dataRender: newData
    });
  }

  handleMúsico = () => {
    var newData = this.filter("Músico");
    this.setState({
      filter: 'músico',
      dataRender: newData
    });
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/LogoGrupo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Integrantes
          </Navbar.Brand>
        </Navbar>

        <Container>
          <Row>
            <Col>
              <div style={{marginTop: "2%"}}>
                <ButtonGroup className="mb-2" size="sm">
                  <Button onClick={this.handleTodos} variant="dark">Todos</Button>
                  <Button onClick={this.handleProgramador} variant="dark">Programador</Button>
                  <Button onClick={this.handleArtista} variant="dark">Artista</Button>
                  <Button onClick={this.handleMúsico} variant="dark">Músico</Button>
                </ButtonGroup>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table striped bordered hover variant="dark" responsive>
                <thead>
                  <tr>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Celular</th>
                    <th>Rol</th>
                    <th>Nivel</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.dataRender.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.lastName}</td>
                        <td>{user.cel}</td>
                        <td>{user.rol}</td>
                        <td>{user.level}</td>
                      </tr>
                    )
                  })}
                  {/* {this.state.data.map((user, index) => {
                    if (this.state.filter === 'todos') {
                      return (
                        <tr key={index}>
                          <td>{user.name}</td>
                          <td>{user.lastName}</td>
                          <td>{user.cel}</td>
                          <td>{user.rol}</td>
                          <td>{user.level}</td>
                        </tr>
                      );
                    } else if (this.state.filter === 'programador') {
                      if (user.rol === 'Programador') {
                        return (
                          <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.lastName}</td>
                            <td>{user.cel}</td>
                            <td>{user.rol}</td>
                            <td>{user.level}</td>
                          </tr>
                        );
                      } else return;
                    } else if (this.state.filter === 'artista') {
                      if (user.rol === 'Artista') {
                        return (
                          <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.lastName}</td>
                            <td>{user.cel}</td>
                            <td>{user.rol}</td>
                            <td>{user.level}</td>
                          </tr>
                        );
                      } else return;
                    } else if (this.state.filter === 'músico') {
                      if (user.rol === 'Músico') {
                        return (
                          <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.lastName}</td>
                            <td>{user.cel}</td>
                            <td>{user.rol}</td>
                            <td>{user.level}</td>
                          </tr>
                        );
                      } else return;
                    } else 
                    return;
                  })} */}
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
