import React, { Component } from 'react';
import { Button, Form, Col, Container, Row, Navbar } from 'react-bootstrap';
import Axios from 'axios';
import Stomp from 'stompjs';

class FormInscripcion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      email: '',
      tp: '',
      numDoc: '',
      uniInv: '',
      uniEst: '',
      code: '',
      cel: '',
      wa: false,
      veg: false,
      rol: '',
      level: '',
      validated: false
    }
  }

  /**
   * cedula: 8
   * ti: 10
   */
  //expresiones regulares
  textRegEx = "^[a-zA-Z ñÑáéíóúÁÉÍÓÚ]{4,}";
  code = "^[0-9]{3,}";
  cellPhoneRegEx = "^[0-9]{5,}";
  mailRegEx = "^[a-zA-Z0-9_]+([.-]?[a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.-]?[a-zA-Z0-9_]+)*(.[a-zA-Z0-9_]{2,4})+";

  documentRegEx = () => {
    if (this.state.tp === "TI")
      return "^[0-9]{10,}";
    else if (this.state.tp === "CC")
      return "^[0-9]{8,}";
    else if (this.state.tp === "CE")
      return "^[a-zA-Z0-9]{12,}";
    else if (this.state.tp === "PA")
      return "^[a-zA-Z0-9]{12,}";
    else
      return "";
  }

  // Functions
  handleName = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleLastName = event => {
    this.setState({
      lastName: event.target.value
    });
  }

  handleEmail = event => {
    this.setState({
      email: event.target.value
    });
  }
  
  handlerTP = event => {
    this.setState({
      tp: event.target.value
    });
  }

  handleNumDocument = event => {
    this.setState({
      numDoc: event.target.value
    });
  }

  handleUniInv = event => {
    this.setState({
      uniInv: event.target.value
    });
  }

  handleUniEst = event => {
    this.setState({
      uniEst: event.target.value
    });
  }

  handleCode = event => {
    this.setState({
      code: event.target.value
    });
  }

  handleCel = event => {
    this.setState({
      cel: event.target.value
    });
  }

  handleWA = event => {
    this.setState({
      wa: !this.state.wa
    });
  }

  handleVeg = event => {
    this.setState({
      veg: !this.state.veg
    });
  }

  handleRol = event => {
    this.setState({
      rol: event.target.value
    });
  }

  handleLevel = event => {
    this.setState({
      level: event.target.value
    });
  }

  handleClick = event => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if (form.checkValidity() === true) {
      let data = {
        name: this.state.name,
        lastName: this.state.lastName,
        email: this.state.email,
        tp: this.state.tp,
        numDoc: this.state.numDoc,
        uniInv: this.state.uniInv,
        uniEst: this.state.uniEst,
        code: this.state.code,
        cel: this.state.cel,
        wa: this.state.wa,
        veg: this.state.veg,
        rol: this.state.rol,
        level: this.state.level
      }
      console.log(data);
  
      Axios
        .post("https://gamejamapi.herokuapp.com/api/v1/users", data)
      .then(res => {
        var client = Stomp.client("wss://gamejamapi.herokuapp.com/ws-message");
        client.reconnect_delay = 10000;
        client.connect({}, () => { 
          client.send("/app/message", { priority: 9 }, "Update");
          window.location.href = "/thanks";
        }, err => { 
          console.log(err);
        });
      })
      .catch(err => {
        console.log(err);
        alert("A ocurrido un error");
      })
    }
    
    this.setState({validated: true});
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
            Inscripcion
          </Navbar.Brand>
        </Navbar>
        
        <Container style={{ marginTop: "2%", marginBottom: "2%" }}>
          <Row>
            <Col>
              <Form noValidate validated={this.state.validated} onSubmit={this.handleClick}>
                <Form.Row>
                  <Form.Group as={Col} sm={12} md={6} controlId="Name">
                    <Form.Label>Nombres Completos</Form.Label>
                    <Form.Control onChange={this.handleName} required pattern={this.textRegEx} placeholder="Ej. Alex" />
                  </Form.Group>

                  <Form.Group as={Col} sm={12} md={6} controlId="LastName">
                    <Form.Label>Apellidos Completos</Form.Label>
                    <Form.Control onChange={this.handleLastName} required pattern={this.textRegEx} placeholder="EJ. Anderson" />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="Email">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control onChange={this.handleEmail} required pattern={this.mailRegEx} type="email" placeholder="Enter email" />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} sm={12} md={6} controlId="SelectTP">
                    <Form.Label>Tipo de Documento</Form.Label>
                    <Form.Control onChange={this.handlerTP} required as="select" custom>
                      <option aria-label="None" value="" />
                      <option value={"TI"}>Tarjeta de identidad</option>
                      <option value={"CC"}>Cédula de ciudadanía</option>
                      <option value={"CE"}>Cédula de extranjería</option>
                      <option value={"PA"}>Pasaporte</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} sm={12} md={6} controlId="NumDocument">
                    <Form.Label>Número de Documento de identidad</Form.Label>
                    <Form.Control onChange={this.handleNumDocument} required pattern={this.documentRegEx()} placeholder="Ej. 123..." />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} sm={12} md={6} controlId="SelectUniInv">
                    <Form.Label>Universidad que lo invita</Form.Label>
                    <Form.Control onChange={this.handleUniInv} required as="select" custom>
                      <option aria-label="None" value="" />
                      <option value={"ECI"}>Escuela Colombiana de Ingeniería Julio Garavito</option>
                      <option value={"Bosque"}>Universidad El Bosque</option>
                      <option value={"UniMinuto"}>Corporación Universitaria Minuto de Dios</option>
                      <option value={"Konrad"}>Fundación Universitaria Konrad Lorenz</option>
                      <option value={"Unab"}>Universidad Autónoma de Bucaramanga</option>
                      <option value={"Tadeo"}>Universidad de Bogotá Jorge Tadeo Lozano</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} sm={12} md={6} controlId="UniEst">
                    <Form.Label>Universidad donde estudia o estudió</Form.Label>
                    <Form.Control onChange={this.handleUniEst} required pattern={this.textRegEx} placeholder="Ej. Escuela Colombiana de Ingeniería Julio Garavito" />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} sm={12} md={6} controlId="Codigo">
                    <Form.Label>Código</Form.Label>
                    <Form.Control onChange={this.handleCode} required type="number" pattern={this.code}  placeholder="Carnet o Codigo Estudiantil" />
                  </Form.Group>

                  <Form.Group as={Col} sm={12} md={6} controlId="Celular">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control onChange={this.handleCel} required type="number" pattern={this.cellPhoneRegEx} placeholder="Ej. 310..." />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} sm={12} md={6} id="CheckboxWA">
                    <Form.Check onChange={this.handleWA} type="checkbox" label="¿Usa WhatsApp como medio de comunicación con su número de celular?" />
                  </Form.Group>

                  <Form.Group style={{display:"none"}} as={Col} sm={12} md={6} id="CheckboxVeg">
                    <Form.Check onChange={this.handleVeg} type="checkbox" label="¿Es vegetariano o vegano?" />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} sm={12} md={6} controlId="SelectRol">
                    <Form.Label>¿Qué rol desempeñará?</Form.Label>
                    <Form.Control onChange={this.handleRol} required as="select" custom>
                      <option aria-label="None" value="" />
                      <option value={"Programador"}>Programador</option>
                      <option value={"Artista"}>Artista</option>
                      <option value={"Músico"}>Músico</option>
                    </Form.Control>
                  </Form.Group>

                    <Form.Group as={Col} sm={12} md={6} controlId="SelectLevel">
                    <Form.Label>Nivel</Form.Label>
                      <Form.Control onChange={this.handleLevel} required as="select" custom>
                        <option aria-label="None" value="" />
                        <option value={"Principiante"}>Principiante</option>
                        <option value={"Intermedio"}>Intermedio</option>
                        <option value={"Avanzado"}>Avanzado</option>
                      </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Button variant="dark" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FormInscripcion;
