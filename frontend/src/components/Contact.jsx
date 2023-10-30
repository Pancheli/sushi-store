import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { useState } from "react";

const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8163071752087!2d-70.71428292457263!3d-33.5841183733368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662dbfe11f43cc9%3A0x3ff513b5eb6e6e8b!2sCancha%20Rayada%201279%2C%208070725%20San%20Bernardo%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1698600505122!5m2!1ses-419!2scl"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

const Contact = () => {
  return (
    <>
      <div className="container gap-5 border m-5 text-center w-100 py-4 rounded bg-light bg-opacity-75 bg-gradient mx-auto">
        <h2 className="mb-3">Contacto</h2>

        <div className="row">
          <div className="col-12 col-sm-4">
            <h3>Ubicación:</h3>
            <hr />

            <div className="d-flex align-items-center gap-2 mb-3">
              <FiMapPin className="text-danger" />
              <p className="fs-6 m-0">
                Cancha Rayada #1279, Villa Chena. San Bernardo
              </p>
            </div>
            <hr className="mt-0 w-100" />
            <Map />
          </div>

          <div className="col-12 col-sm-4 schedule">
            <h3>Horario de atención:</h3>
            <hr />
            <FaRegClock className="mt-4"/>
            <hr  className="w-75 mx-auto mt-4"/>
            <p className="fw-bold">Jueves & Viernes de 17:00 a 23:00 hrs.</p>
            <hr className="w-75 mx-auto mt-4" />
            <p className="fw-bold">Sábados y Domingos de 15:00 a 23:00 hrs.</p>
          </div>

          <div className="col-12 col-sm-4 social">
            <h3 className="">Redes sociales:</h3>
            <hr />
            <div className="d-flex flex-column justify-content-lg-start gap-4 mt-5 ">
              <div className="d-flex align-items-center gap-2 mx-auto">
                <a
                  href="https://web.facebook.com/yutaka.rolls.50"
                  className="sushi-social"
                  target="_blank"
                >
                  <BsFacebook />
                </a>
                <p className="m-0">Facebook</p>
              </div>
              <div className="d-flex align-items-center gap-2 mx-auto">
                <a
                  href="https://www.instagram.com/yutakarolls/"
                  className="sushi-social"
                  target="_blank"
                >
                  <BsInstagram />
                </a>
                <p className="m-0"> Instagram</p>
              </div>
              <div className="d-flex align-items-center gap-2 mx-auto">
                <a
                  href="https://api.whatsapp.com/send?phone=56956700668&text=Hola! Me gustaría hacer un pedido por favor"
                  className="sushi-social"
                  target="_blank"
                >
                  <BsWhatsapp />
                </a>
                <p className="m-0"> Whatsapp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
