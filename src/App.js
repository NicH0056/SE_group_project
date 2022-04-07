import React from 'react';
import Canvas from './Canvas/Canvas';

import { Row, Col, Container } from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <main>
        <Container>
          <Row>
            <Col> <Canvas/> </Col>
          </Row>
        </Container>
      </main>

    </div>
  );
}

export default App;
