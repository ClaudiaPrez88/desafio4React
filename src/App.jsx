// App.jsx
import { MiApi } from './components/MiApi';
import './App.css';
import { Buscador } from './components/Buscador';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [productos, setProductos] = useState([]);
  const [filtroProducto, setFiltroProducto] = useState([]);
  const [search, setSearch] = useState('');
  const [orden, setOrden] = useState('asc'); // Estado para almacenar el orden

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

  // Función para manejar cambios en la búsqueda
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Función para manejar cambios en el orden
  const handleSort = (e) => {
    setOrden(e.target.value);
  };

  // Filtrar productos según la búsqueda
  useEffect(() => {
    const filteredProducts = productos.filter(producto =>
      producto.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltroProducto(filteredProducts);
  }, [search, productos]);

  return (
    <Container>
      <Row>
        <Col>
          <Buscador handleSearch={handleSearch} handleSort={handleSort} />
          <MiApi productos={filtroProducto.length > 0 ? filtroProducto : productos} orden={orden} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

