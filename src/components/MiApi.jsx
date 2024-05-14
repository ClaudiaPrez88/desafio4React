import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Row } from "react-bootstrap";
import axios from 'axios';

export const MiApi = ({ search, orden }) => {

  const [productos, setProductos] = useState([]);

  const [productosMostrados, setProductosMostrados] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProductos(response.data);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };
    obtenerProductos();
  }, []);

  useEffect(() => {
    // Filtrar productos según la búsqueda
    //Se crea constante llamada filteredProducts con los productos filtrados 
    const filteredProducts = productos.filter(producto => {
      if (producto.title) {
      //Si producto.title existe (lo convierto todo en miniscula) e incluye el termino que paso por el estado search
      //Si es asi devuelte true, si no return false
        return producto.title.toLowerCase().includes(search.toLowerCase());
      }
      return false;
    });

    // Ordenar productos
    const productosOrdenados = [...filteredProducts];
    productosOrdenados.sort((a, b) => a.price - b.price); // Orden ascendente por precio
    if (orden === 'desc') {
      productosOrdenados.reverse(); // Si el orden es 'desc', invertimos el orden de los productos
    }

    setProductosMostrados(productosOrdenados);
  }, [search, orden, productos]);

  return (
    <>
      <Row>
        {productosMostrados.length ? (
          productosMostrados.map((producto, index) => (
            <Col key={index} md={4} lg={4} xl={3}>
              <div className="col">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={producto.image} />
                  <Card.Body>
                    <Card.Title>{producto.title}</Card.Title>
                    <Card.Text>Precio: {producto.price}$</Card.Text>
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
