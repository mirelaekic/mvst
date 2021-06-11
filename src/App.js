import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Tab from './components/Tab';

function App() {
  return (
    <div className="App">
      <Container>
      <Row>
        <Col lg={3}>profile</Col>
        <Col lg={8}>
          <Tab />
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
