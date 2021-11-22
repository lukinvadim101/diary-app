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
      <Container className="pt-4">
        <Row>
          <Col md="3" sm="12" >
          <h3 className="text-center pb-2">Архив</h3>
            <RecordsList/>
          </Col>
          <Col md={{span:6}} sm="12" className="p-3">
            <Record/>
          </Col>
          <Col md={{span:3}}>
          <h3  className="text-center pb-2">Корзина</h3>
            <Trash/>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col >
            <RecordInput/>
          </Col>
        </Row>
        <Row className="pt-5">

        </Row>
      </Container>
    </div>
  );
}

export default App;
