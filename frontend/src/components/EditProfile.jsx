import { redirect, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../context/AuthProvider";
import clientAxios from "../config/clientAxios";

const EditProfile = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuthContext();
  if ( Object.keys(auth).length === 0 ) {
    navigate('/')
  }

  const [user, setUser] = useState({
    ...auth,
    password: "",
    confirmPassword: "",
  });

  const handleCancel = () => {
    navigate("/");
  };
  const [message, setMessage] = useState({
    show: false,
    text: "",
    color: "",
  });


  const handleUpdate = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Las contraseñas no coindicen. Por favor, verifíquelas.");
      return;
    }

    const userToSend = { ...user };
    delete userToSend.confirmPassword;

    try {
      const update = await clientAxios.put(`/users/update/${auth.id}`, userToSend);  
      setAuth(update.data.response)    
      console.log("Datos del usuario actualizados con éxito");
    } catch (error) {
      console.error("Error al actualizar los datos del usuario", error);
    }
  };

  return (
    <>
      <div className="container border my-5 text-center w-50 py-4 rounded bg-light bg-opacity-75 bg-gradient mx-auto">
        <h2 className="text-uppercase">Editar Usuario</h2>
        <p className="mb-4 text-small">Yutaka Rolls</p>
        <form onSubmit={handleUpdate} className="d-flex flex-row flex-wrap gap-3 justify-content-center">
          <div className="mt-3">
            <label htmlFor="name">Nombre</label>
            <input
              className="ms-5 p-2 rounded"
              placeholder="Ingresa tu nombre"
              id="name"
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="address">Dirección</label>
            <input
              className="ms-5 p-2 rounded"
              placeholder="Ingresa tu dirección"
              id="address"
              type="text"
              value={user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="phone">N° de Teléfono</label>
            <input
              className="ms-5 p-2 rounded"
              placeholder="Ingresa tu n° de teléfono"
              id="phone"
              type="tel"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="email">Email</label>
            <input
              className="ms-5 p-2 rounded"
              placeholder="example@correo.com"
              id="email"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="mt-3 flex-shrink-1 ">
            <label htmlFor="password">Nueva contraseña</label>
            <input
              className="ms-3 p-2 rounded"
              placeholder="***********"
              id="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div className="mt-3 flex-shrink-2 ">
            <label htmlFor="confirmPassword">Confirmar contraseña</label>
            <input
              className="ms-3 p-2 rounded"
              placeholder="***********"
              id="confirmPassword"
              type="password"
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
            />
          </div>
          <div className="buttons d-flex flex-row justify-content-center gap-5 ms-3 mt-3">
            <div className="mt-3 mb-3">
              <button className="btn btn-success" type="submit">
                Guardar Cambios
              </button>
            </div>
            <div className="mt-3 mb-3">
              <button
                className="btn btn-danger"
                type="button"
                onClick={handleCancel}
              >
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
