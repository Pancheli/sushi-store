import { Link } from 'react-router-dom'

export default function Home() {
  return (
    
    <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride='carousel' >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active h-100">
        <div className="img-back img-back-1 w-100"></div>
          {/* <img src="../img/slider1.jpg" className="d-block w-100" alt="..." /> */}
          <div className="carousel-caption d-none d-md-block bg-dark bg-gradient bg-opacity-50 rounded">
            <h5 className="text-uppercase">Deliciosas gyosas de pollo, cerdo y verduras</h5>
            <p>Y una variedad de aperitivos para todos los gustos.</p>
            <Link to='/menu'>
              <button className='btn btn-info '>
                Pide aquí
              </button>
            </Link>
          </div>
        </div>
        <div className="carousel-item h-100">
        <div className="img-back img-back-2 w-100"></div>
          {/* <img src="../img/slider2.jpg" className="d-block w-100" alt="..." /> */}
          <div className="carousel-caption d-none d-md-block bg-dark bg-gradient bg-opacity-50 rounded">
            <h5 className="text-uppercase">Gohan de mixtos de 2 a 3 proteínas y vegetarianos</h5>
            <p>Además de encontrar varios rolls especiales en nuestra sección "Especial rolls".</p>
            <Link to='/menu'>
              <button className='btn btn-info '>
                Pide aquí
              </button>
            </Link>
          </div>
        </div>
        <div className="carousel-item h-100">
        <div className="img-back img-back-3 w-100"></div>
          {/* <img src="../img/slider3.jpg" className="d-block w-100" alt="..." /> */}
          <div className="carousel-caption d-none d-md-block bg-dark bg-gradient bg-opacity-50 rounded">
            <h5 className="text-uppercase">Promociones mixtas</h5>
            <p>Descubre nuestra variedad de exquisitas promociones</p>
            <Link to='/menu'>
              <button className='btn btn-info '>
                Pide aquí
              </button>
            </Link>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

  );
}
