import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";
import { useCartContext } from "../context/CartProvider";
import { FiShoppingBag } from 'react-icons/fi';

const Header = () => {
  const { cart } = useCartContext();
  const { auth, setAuth } = useAuthContext();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuth({});
  }

    useEffect(() => {
        const userToken = localStorage.getItem('token');
        const userParsed = JSON.parse(userToken);

        if( !('name' in auth) && userToken ){
            setAuth(userParsed);
        }
    }, []);

  return (
    <header className="navbar navbar-expand-lg bg-black">
      <div className="container-fluid me-5" data-bs-touch="true">
        <Link className="navbar-brand ms-2" to="/">
          <img
            src="../img/logo_yutaka.jpg"
            className="rounded"
            style={{ width: "100px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          data-bs-theme="dark"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav
          className="collapse navbar-collapse flex-grow-0"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav gap-2">
            <li className="nav-item text-bg-light rounded">
              <Link to="/menu">
                <button className="border-0 btn" role="button">
                  Menú
                </button>
              </Link>
            </li>
            <li className="nav-item text-bg-light rounded">
              <Link to="/contact">
                <button className="border-0 btn" role="button">
                  Contacto
                </button>
              </Link>
            </li>
            {!("name" in auth) ? (
              <>
                <li className="nav-item text-bg-light rounded">
                  <Link to="/register">
                    <button className="border-0 btn" role="button">
                      Registro
                    </button>
                  </Link>
                </li>
                <li className="nav-item text-bg-light rounded">
                  <Link to="/login">
                    <button className="border-0 btn" role="button">
                      Iniciar sesión
                    </button>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-bg-light rounded"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {auth.name}
                  </a>
                  <ul className="dropdown-menu">
                    <li className="">
                      <a className="dropdown-item menu-hover" href="#">
                        Cuenta
                      </a>
                    </li>
                    <Link to="/edit-profile">
                    <button className="border-0 btn" role="button">
                      Editar Perfil
                    </button>
                  </Link>
                    <li className="">
                      <a className="dropdown-item menu-hover" onClick={handleLogout} type='button'>
                        Cerrar sesión
                      </a>
                    </li>
                  </ul>
                </li>
              </>
            )}
            <li className="nav-item cart-icon">
              <Link to="/cart">
                <FiShoppingBag  className=" fs-3 text-white"/>
                <span className="cart-count">{cart.length}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
