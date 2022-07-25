import React, { Fragment } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ReactAudioPlayer from 'react-audio-player'
import ok from "./source/ok.mp3"
import audi from "https://sonidosmp3.net/wp-content/uploads/2022/05/Neraton.mp3"

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
          <audio src={ok} controls/> <audio controls>
          <source src={require("./source/ok.mp3")}/>
          <source src={audi}/>
          </audio> <ReactAudioPlayer src="./source/ok.mp3" controls> </ReactAudioPlayer>
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
