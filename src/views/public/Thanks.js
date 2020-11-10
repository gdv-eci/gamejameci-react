import React, { Component } from 'react';
import { Navbar, Container, Row, Col, Image, Figure } from 'react-bootstrap';

class Thanks extends Component {
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
            Gracias
          </Navbar.Brand>
        </Navbar>

        <Container style={{ marginTop: "1%", marginBottom: "1%" }}>
          <Row>
            <Col>
              <Image 
                width={300}
                height={422} 
                src="./Game-Jam1.jpg" 
                rounded 
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <br></br>
              Gracias por inscribirse al Game Jam Universitario, Te esperamos.
              <br></br>
              <strong>Lugar:</strong> Virtual.
              <br></br>
              <strong>Fecha:</strong> 14 de noviembre al 16 de noviembre del 2020.
            </Col>
          </Row>
          <Row >
            <Col>
              <hr></hr>
              <h1>Patrocinadores</h1>
              <br></br>
              <Row>
                <Col>
                  <Figure>
                    <Figure.Image
                      width={160}
                      height={180}
                      alt="171x180"
                      src="https://www.utadeo.edu.co/sites/tadeo/files/imageblock/horizontal-azul.png"
                    />
                    <Figure.Caption>
                      Universidad de Bogotá Jorge Tadeo Lozano.
                    </Figure.Caption>
                  </Figure>
                </Col>
                <Col>
                  <Figure>
                    <Figure.Image
                      width={170}
                      height={180}
                      alt="171x180"
                      src="https://www.unab.edu.co/sites/default/files/1-LOGO-WEB_0.png"
                    />
                    <Figure.Caption>
                      Universidad Autónoma de Bucaramanga.
                    </Figure.Caption>
                  </Figure>
                </Col>
                <Col>
                  <Figure>
                    <Figure.Image
                      width={180}
                      height={180}
                      alt="171x180"
                      src="https://www.unbosque.edu.co/sites/default/files/logo.png"
                    />
                    <Figure.Caption>
                      Universidad El Bosque.
                    </Figure.Caption>
                  </Figure>
                </Col>
                <Col>
                  <Figure>
                    <Figure.Image
                      width={180}
                      height={180}
                      alt="171x180"
                      src="https://www.escuelaing.edu.co/images/logos/eci.jpg"
                    />
                    <Figure.Caption>
                      Escuela Colombiana de Ingeniería Julio Garavito.
                    </Figure.Caption>
                  </Figure>
                </Col>
                <Col>
                  <Figure>
                    <Figure.Image
                      width={170}
                      height={180}
                      alt="171x180"
                      src="http://www.konradlorenz.edu.co/templates/openweb-j17/images/logo.png"
                    />
                    <Figure.Caption>
                      Fundación Universitaria Konrad Lorenz.
                    </Figure.Caption>
                  </Figure>
                </Col>
                <Col>
                  <Figure>
                    <Figure.Image
                      width={160}
                      height={180}
                      alt="171x180"
                      style={{ backgroundColor: "#162644"}}
                      src="http://www.uniminuto.edu/image/layout_set_logo?img_id=835779&amp;t=1585663840499"
                    />
                    <Figure.Caption>
                      Corporación Universitaria Minuto de Dios.
                    </Figure.Caption>
                  </Figure>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Thanks;
