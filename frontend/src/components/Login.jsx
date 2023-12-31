import { useState } from "react";
import { useNavigate } from "react-router-dom";
import clientAxios from "../config/clientAxios";
import { useAuthContext } from "../context/AuthProvider";

const Login = () => {
  const navigate = useNavigate();

  const { setAuth } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({
    show: false,
    text: "",
    color: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setMessage({
        show: true,
        text: "Debe completar todos los campos",
        color: "red",
      });
    }

    try {
      const { data } = await clientAxios.post("/users/auth/login", {
        email,
        password,
      });

      if (data.success) {
        localStorage.setItem("token", JSON.stringify(data.message));
        setAuth(data.message);
        navigate("/");
      } else {
        setMessage({
          show: true,
          text: data.message,
          color: !data.success ?? "red",
        });
      }
    } catch (error) {
      // Error 500 (error servidor)
      console.log(error);
      setMessage({
        show: true,
        text: "Hubo un problema al iniciar sesión",
        color: "red",
      });
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <>
      <div className="container border my-5 text-center py-4 rounded bg-light bg-opacity-75 bg-gradient mx-auto">
        <h2 className="text-uppercase"> Iniciar Sesión</h2>
        <p className="mb-4 text-small">Yutaka Rolls</p>
        <div className="row">
          <div className="col-10- col-sm-12">
            <form onSubmit={handleSubmit}>
              <div className="mt-3">
                <label htmlFor="email">Email</label>
                <input
                  className="ms-5 p-2 rounded"
                  placeholder="example@correo.com"
                  id="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="password">Password</label>
                <input
                  className="ms-3 p-2 rounded"
                  placeholder="***********"
                  id="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mt-2 me-5 btn-forgot">
                <button
                  className="link-secondary link-offset-2 border-0 bg-transparent"
                  type="button"
                  onClick={handleForgotPassword}
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>

              <div>
                <p
                  className="my-3"
                  hidden={!message.show}
                  style={{ color: `${message.color}` }}
                >
                  {message.text}
                </p>
              </div>
              <div className="buttons d-flex flex-row justify-content-center gap-5 ms-3">
                <div className="mt-3 mb-3">
                  <button className="btn btn-success" type="submit">
                    Iniciar Sesión
                  </button>
                </div>
                <div className="mt-3 mb-3">
                  <button
                    className="btn btn-danger "
                    type="button"
                    onClick={handleCancel}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
