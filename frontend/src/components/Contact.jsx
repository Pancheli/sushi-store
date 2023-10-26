import { BsFacebook, BsInstagram } from "react-icons/bs";
import { GoogleMap, InfoWindowF, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useState } from "react";

const markers = [
  {
    id: 1,
    name: 'Yutaka Rolls',
    position: {  lat: -33.584118, lng: -70.711708 },
  }
] 

const Contact = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
  });

  const [ activeMArker, setActiveMarker ] = useState(null);

  const handleActiveMarker = (marker) => {
    if ( marker === activeMArker ) {
      return;
    }
    setActiveMarker(marker)
  };

  return (
    <>
      <div className="container border m-5 text-center w-100 py-4 rounded bg-light bg-opacity-75 bg-gradient mx-auto">
        <h2 className="mb-3">Contacto</h2>
        <div className="d-flex flex-row gap-4 justify-content-evenly">
          <div className="map mb-4" style={{ height: "400px", width: "400px" }}>
            {isLoaded ? (
              <GoogleMap
                center={{
                  lat: -33.584118,
                  lng: -70.711708
                }}
                zoom={17}
                onClick={() => setActiveMarker(null)}
                mapContainerStyle={{
                  width: "400px",
                  height: "400px",
                }}
              >
                {markers.map(({ id, name, position }) => (
                  <MarkerF key={id} position={position} onClick={() => handleActiveMarker(id)}>
                  {activeMArker === id ? (
                    <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                      <div>
                        <p>{name}</p>
                      </div>
                    </InfoWindowF>
                  ) : null }
                  </MarkerF>
                ))}
              </GoogleMap>
            ) : null}
          </div>
          <div className="schedule">
            <h3>Horario de atención:</h3>
            <hr />
          </div>
          <div className="social">
            <h3 className="">Redes sociales:</h3>
            <hr />
            <div className="d-flex flex-column justify-content-lg-start ">
            <a href="https://web.facebook.com/yutaka.rolls.50" target="_blank">
              <BsFacebook />
            </a>
            <a href="https://www.instagram.com/yutakarolls/" target="_blank">
              <BsInstagram />
            </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
