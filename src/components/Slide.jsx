import Carousel from 'react-bootstrap/Carousel';

function Slide() {
  return (
    <Carousel data-bs-theme="dark" id='slide'>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img1.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>SALE UP TO 70% OFF</h5>
          <p>FALL - WINTER COLLECTIONS 2020</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img2.png"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h5>SALE UP TO 70% OFF</h5>
          <p>FALL - WINTER COLLECTIONS 2020</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;