import { useState } from "react";
import { useNavigate } from "react-router-dom";
import clientAxios from "../config/clientAxios";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await clientAxios.post("/users/create", {
        name,
        email,
        password,
      });

      console.log("Usuario registrado con éxito", response.data);
      // Redireccionar a la página de inicio una vez que se haya creado el usuario
      navigate("/");
    } catch (error) {
      console.error("Error al registrar usuario", error);
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <>
      <div className="container border my-5 text-center py-4 rounded bg-light bg-opacity-75 bg-gradient mx-auto">
        <h2 className="text-uppercase"> Registrarse</h2>
        <p className="mb-4 text-small">Yutaka Rolls</p>
        <div className="row">
          <div className="col-10 col-sm-12">
                <form className="col-12 col-sm-8 mx-auto" onSubmit={handleSubmit}>
                    <div className="mt-3">
                        <label htmlFor="name">Nombre</label>
                        <input
                            className="ms-4 p-2 rounded"
                            placeholder="Ingresa tu nombre"
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="email">Email</label>
                        <input
                            className="ms-5 p-2 rounded"
                            placeholder="example@correo.com"
                            id="email"
                            type="email"
                            value={email}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        {/* <p 
                                className='my-3'
                                hidden={!message.show}
                                style={{ color: `${message.color}`}}>
                                    {message.text}
                                </p> */}
                    </div>
                    <div className="buttons d-flex flex-row justify-content-center gap-5 ms-3 mt-3">
                        <div className="mt-3 mb-3">
                            <button className="btn btn-success" type="submit">
                                Registrarse
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

export default Register;
