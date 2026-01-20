import "./Register.css";
import { Link } from "react-router-dom";
import loginLogo from "../../assets/cuck.png";
function Register() {
  return (
    <div className="register">
      <div className="register__title">
        <img src={loginLogo} alt="Main Pic" className="register__pic" />
        <p className="register__title-text">CryptoDucks</p>
      </div>
      <p className="register__description">Registrate</p>
      <form action="" className="register__form">
        <label htmlFor="" className="register__field-name">
          Username:
        </label>
        <input type="text" className="register__input" />
        <label htmlFor="" className="register__field-name">
          Email:
        </label>
        <input type="text" className="register__input" />
        <label htmlFor="" className="register__field-name">
          Password:
        </label>
        <input type="password" className="register__input" />
        <label htmlFor="" className="register__field-name">
          Confirm Password:
        </label>
        <input type="password" className="register__input" />
        <button className="register__button" type="button">
          Registrate
        </button>
      </form>
      <p className="register__login">
        ¿Ya eres miembro?{" "}
        <Link className="register__login-link" to="/">
          Inicia sesión aquí
        </Link>
      </p>
    </div>
  );
}

export default Register;
