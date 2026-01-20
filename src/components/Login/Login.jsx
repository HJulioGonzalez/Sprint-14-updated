import "./Login.css";
import loginLogo from "../../assets/cuck.png";
import Register from "../Register/Register";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userCredential = {
      username: "Habib Julio",
      password: "Impala.2026",
    };
    const inputInfo = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    console.log("log in button has been clicked");
    if (
      inputInfo.username === userCredential.username &&
      inputInfo.password === userCredential.password
    ) {
      navigate("/ducks");
    } else {
      alert("Username or password incorrect, check again");
      console.warn("Username or password incorrect, check again");
    }
    // navigate("/ducks");
  };
  return (
    <div className="login">
      <div className="login__title">
        <img src={loginLogo} alt="Main Pic" className="login__pic" />
        <p className="login__title-text">CryptoDucks</p>
      </div>
      <p className="login__description">
        Esta aplicación contiene información confidencial. Por favor inicia
        sesión o regístrate para acceder a CryptoDucks.
      </p>
      <form onSubmit={handleSubmit} action="" className="login__form">
        <label htmlFor="" className="login__field-name">
          Username:
        </label>
        <input
          type="text"
          name="username"
          className="login__input"
          minLength="8"
          required
        />
        <label htmlFor="" className="login__field-name">
          Password:
        </label>
        <input
          name="password"
          type="password"
          className="login__input"
          minLength="10"
          required
        />
        <button className="login__button" type="submit">
          Iniciar Sesión
        </button>
      </form>
      <p className="login__membership">
        ¿Aún no eres miembro?{" "}
        <Link className="login__membership-link" to="/register">
          Regístrate aquí
        </Link>
      </p>
    </div>
  );
}

export default Login;
