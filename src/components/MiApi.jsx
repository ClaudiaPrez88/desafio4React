import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Row } from "react-bootstrap";

export const MiApi = ({ productos, orden }) => {
  const [productosMostrados, setProductosMostrados] = useState([]);

  useEffect(() => {
	// Clonamos el array de productos para no mutarlo
	const productosOrdenados = [...productos];
	// Ordenamos el array según el valor de 'orden'
	productosOrdenados.sort((a, b) => a.price - b.price); // Orden ascendente por ID
	if (orden === 'desc') {
	  productosOrdenados.reverse(); // Si el orden es 'desc', invertimos el orden de los productos
	}
	// Actualizamos el estado con los productos ordenados
	setProductosMostrados(productosOrdenados);
  }, [productos, orden]);

  return (
    <>
     <Row>
      
      {productosMostrados.length ? (
          productosMostrados.map((producto, index) => (
            <Col key={index}  md={4} lg={4} xl={3}>
            <div className="col">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.image} />
                <Card.Body>
                  <Card.Title>{producto.title}</Card.Title>
                  <Card.Text>Precio: {producto.price}$
                  </Card.Text>
                  <Button variant="primary">Ver detalle</Button>
                </Card.Body>
              </Card>
            </div>
            </Col>
          ))
        ) : (
          <Col>
            <h1>No se encontraron productos</h1>
          </Col>
        )}
     </Row>
    </>
  );
};
