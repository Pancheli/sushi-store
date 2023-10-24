import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import clientAxios from "../config/clientAxios";

const EditProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
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

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await clientAxios.get(`/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.log("Error al obtener el usuario", error);
      }
    };
    fetchUser();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Las contraseñas no coindicen. Por favor, verifíquelas.");
      return;
    }

    const userToSend = { ...user };
    delete userToSend.confirmPassword;

    try {
      await clientAxios.put(`/users/update/${id}`, userToSend);
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
        <form onSubmit={handleUpdate}>
          <div className="mt-3 w-100">
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
          <div className="mt-3 w-100">
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
          <div className="mt-3 w-100">
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
          <div className="mt-3">
            <label htmlFor="password">Nueva Contraseña</label>
            <input
              className="ms-3 p-2 rounded"
              placeholder="***********"
              id="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
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
