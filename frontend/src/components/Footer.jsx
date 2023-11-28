import { BsFacebook, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="w-100 text-center" >
      <div className="bg-dark p-2 d-flex flex-row justify-content-between w-100 align-items-center">
        <div className='d-flex gap-3 ms-3'>
          <a href="https://web.facebook.com/yutaka.rolls.50" className="sushi-social" target='_blank'>
           <BsFacebook />
          </a>
          <a href='https://www.instagram.com/yutakarolls/' className="sushi-social" target='_blank'>
            <BsInstagram />
          </a>
        </div>
        <div className='text-white fs-6 d-flex justify-content-center flex-column'>
          <div className='column'>
            <p className='m-0'>Horario de atención: Jueves & Viernes de 17:00 a 23:00 hrs.</p>
            <p className='m-0'>Sábados y Domingos de 15:00 a 23:00 hrs.</p>
          </div>
          <p className='m-0'>@2023 All rights reserved</p>
        </div>
        <div className='d-flex justify-content-end'>
            <img src='../img/logo_yutaka.jpg' alt='logo-yutaka' className='rounded' style={{width: '55px', height: '55px'}}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
