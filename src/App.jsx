import { MiApi } from './components/MiApi';
import './App.css';
import { Buscador } from './components/Buscador';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Nav from './components/Navbar';
import Slide from './components/Slide';
import { Footer } from './components/Footer';

function App() {
  const [search, setSearch] = useState('');
  const [orden, setOrden] = useState('asc'); // Estado para almacenar el orden

  // Función para manejar cambios en la búsqueda
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Función para manejar cambios en el orden
  const handleSort = (e) => {
    setOrden(e.target.value);
  };

  return (
    <>
      <Container fluid>
        <Nav />
        <Slide />
      </Container>
      <Container>
        <Buscador handleSearch={handleSearch} handleSort={handleSort} />
        <MiApi search={search} orden={orden} />
      </Container>
      <Container fluid>
        <Footer />
      </Container>
    </>
  );
}

export default App;


