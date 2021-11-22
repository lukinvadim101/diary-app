import Header from '../Header';
import Record from '../Record';
import RecordsList from '../RecordsList';
import RecordInput from '../RecordInput';
import Trash from '../Trash';
import {Container, Row, Col } from 'react-bootstrap';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Container className="pt-5">
        <Row>
          <Col md="3">
            <RecordsList/>
          </Col>
          <Col>
            <Record/>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col md={{span:9,offset:3}}>
            <RecordInput/>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col md={{span:3}}>
            <Trash/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
