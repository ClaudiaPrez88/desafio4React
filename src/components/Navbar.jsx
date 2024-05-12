import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src="./logo.png"
              width="auto"
              height="50"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav;