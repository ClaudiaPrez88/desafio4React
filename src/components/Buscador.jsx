// Buscador.jsx
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Buscador = ({ handleSearch, handleSort }) => {
  return (
    <Container>
      <Row>
        <Col md={8} className='col1'>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Busca tu producto" onChange={handleSearch} />
            </Form.Group>
          </Form>
        </Col>
        <Col md={4} className='col2'>
          <Form.Select aria-label="Default select example" onChange={handleSort}>
            <option defaultChecked>Ordenar por</option>
            <option value="asc">de menor a mayor</option>
            <option value="desc">de mayor a menor</option>
          </Form.Select>
        </Col>
      </Row>
    </Container>
  );
}


