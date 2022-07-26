import React, { Fragment } from "react";
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Fragment>
    <Container>
      <Row>
        <Col className="col-4">

        </Col>
        <Col className="col-4">
        <h1>Control de imágenes</h1>
        <form>
          <input></input>
          <input className="form-control" type="file" name="img1" />
          <input className="form-control btn btn-success" type="submit" name="btnU " />
        </form>
        
        <div>
          <audio controls>
            <source src="http://localhost/source/ok.mp3"/>
          </audio>
        </div>


        </Col>
        <Col className="col-4">

        </Col>
      </Row>
    </Container>
    </Fragment>
  );
}

export default App;
