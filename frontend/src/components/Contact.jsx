import { BsFacebook, BsInstagram } from "react-icons/bs";
import GoogleMapReact from 'google-map-react';

const Contact = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: -74.7995981
        },
        zoom: 11
    };

  return (
    <>
      <div className="container border my-5 text-center w-75 py-4 rounded bg-light bg-opacity-75 bg-gradient mx-auto">
        <h2 className="mb-3">Contacto</h2>
        <div className="d-flex flex-row gap-4">
          <div className="map" style={{ height: '400px', width: '400px'}}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: '' }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
              
            ></GoogleMapReact>
          </div>
          <div className="schedule">
            <h3>Horario de atención:</h3>
            <hr />
          </div>
          <div className="social">
            <h3 className="">Redes sociales:</h3>
            <hr />
            <a href="https://web.facebook.com/yutaka.rolls.50" target="_blank">
              <BsFacebook />
            </a>
            <a href="https://www.instagram.com/yutakarolls/" target="_blank">
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
