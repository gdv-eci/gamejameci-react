import React, { Component } from 'react';
import { Button, Form, Col, Container, Row, Navbar } from 'react-bootstrap';

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
      wa: event.target.value
    });
  }

  handleVeg = event => {
    this.setState({
      veg: event.target.value
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
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      let data = {
        name: this.state.name,
        lastname: this.state.lastName,
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
            Resumen
          </Navbar.Brand>
        </Navbar>
        
        <Container style={{ marginTop: "2%", marginBottom: "2%" }}>
          <Row>
            <Col>
              <Form noValidate validated={this.state.validated} onSubmit={this.handleClick}>
                <Form.Row>
                  <Form.Group as={Col} sm={12} md={6} controlId="Name">
                    <Form.Label>Nombres Completos</Form.Label>
                    <Form.Control onChange={this.handleName} required placeholder="Ej. Alex" />
                  </Form.Group>

                  <Form.Group as={Col} sm={12} md={6} controlId="LastName">
                    <Form.Label>Apellidos Completos</Form.Label>
                    <Form.Control onChange={this.handleLastName} required placeholder="EJ. Anderson" />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="Email">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control onChange={this.handleEmail} required type="email" placeholder="Enter email" />
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
                    <Form.Control onChange={this.handleNumDocument} required placeholder="Ej. 123..." />
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
                      <option value={"Tadeo"}>Universidad de Bogotá Jorge Tadeo Lozano</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} sm={12} md={6} controlId="UniEst">
                    <Form.Label>Universidad donde estudia o estudió</Form.Label>
                    <Form.Control onChange={this.handleUniEst} required placeholder="Ej. Escuela Colombiana de Ingeniería Julio Garavito" />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} sm={12} md={6} controlId="Codigo">
                    <Form.Label>Código</Form.Label>
                    <Form.Control onChange={this.handleCode} required placeholder="Carnet o Codigo Estudiantil" />
                  </Form.Group>

                  <Form.Group as={Col} sm={12} md={6} controlId="Celular">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control onChange={this.handleCel} required placeholder="Ej. (+57) 310..." />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} sm={12} md={6} id="CheckboxWA">
                    <Form.Check onChange={this.handleWA} type="checkbox" label="¿Usa WhatsApp como medio de comunicación con su número de celular?" />
                  </Form.Group>

                  <Form.Group as={Col} sm={12} md={6} id="CheckboxVeg">
                    <Form.Check onChange={this.handleVeg} type="checkbox" label="¿Es vegetariano o vegano?" />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} sm={12} md={6} controlId="SelectRol">
                    <Form.Label>¿Qué rol desempeñará?</Form.Label>
                    <Form.Control onChange={this.handleRol} required as="select" custom>
                      <option aria-label="None" value="" />
                      <option value={"Dev"}>Desarrollador</option>
                      <option value={"Bosque"}>Artista</option>
                      <option value={"UniMinuto"}>Músico</option>
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
