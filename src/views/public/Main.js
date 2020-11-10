import React, { Component } from 'react';
import { Button, Col, Container, Row, Media } from 'react-bootstrap';

class Main extends Component {
  render() {
    return (
      <Container>
        <Row style={{marginTop: "2%", marginBottom: "2%"}}>
          <Col>
            <h1>Game Jam Universitario</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={{fontSize: "24px"}}>
              La tercera edición del game jam universitario, es un evento junto a varias universidades que busca promover la convivencia al rededor del desarrollo de videojuegos, a partir de equipos previamente creados de forma aleatoria, un tema elegido de forma imparcial y con el trabajo de 48 horas tener un producto que será publicado finalmente en <a target="_blank" rel="noopener noreferrer" href="https://itch.io">itch.io</a>.
            </p>
          </Col>
          <Col>
            <h3>Las reglas básicas:</h3>
            <ul className="list-unstyled">
              <Media as="li">
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src="/LogoGrupo.png"
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <h5>Son equipos armados de forma aleatoria dependiendo del rol para mantener el balance entre estos.</h5>
                </Media.Body>
              </Media>

              <Media as="li">
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src="/LogoGrupo.png"
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <h5>No se permite el uso de contenido previamente hecho.</h5>
                </Media.Body>
              </Media>

              <Media as="li">
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src="/LogoGrupo.png"
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <h5>El producto final debe ser enviado a los jueces antes de que finalicen las 48 horas.</h5>
                </Media.Body>
              </Media>

              <Media as="li">
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src="/LogoGrupo.png"
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <h5>El producto final debe ser publicado en <a target="_blank" rel="noopener noreferrer" href="https://itch.io">itch.io</a>, un link que proveemos los organizadores.</h5>
                </Media.Body>
              </Media>
            </ul>
          </Col>
        </Row>
        <Row style={{marginTop: "2%"}}>
          <Col>
            <Button variant="success" size="lg" block href="/inscription">Aceptar y Continuar</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
