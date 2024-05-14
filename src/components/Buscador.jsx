import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const Buscador = ({ handleSearch, handleSort }) => {
  return (
    <>
      <Row id='buscador'>
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
    </>
  );
};
