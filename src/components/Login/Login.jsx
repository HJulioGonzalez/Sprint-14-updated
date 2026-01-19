import "./Login.css";
import loginLogo from "../../assets/cuck.png"

function Login() {
  return (
    <div className="login">
      <div className="login__title">
        <img src={loginLogo} alt="Main Pic" className="login__pic"/>
        <p className="login__title-text">CryptoDucks</p>
        
      </div>
      <p className="login__description">Esta aplicación contiene información confidencial. Por favor inicia sesión o regístrate para acceder a CryptoDucks.</p>
      <form action="" className="login__form">
          <label htmlFor="" className="login__field-name">Username:</label>
          <input type="text" className="login__input" />
          <label htmlFor="" className="login__field-name">Password:</label>
          <input type="text" className="login__input" />
          <button className="login__button" type="button">Iniciar Sesión</button>
      </form>
      <p className="login__membership">
        ¿Aún no eres miembro?{" "}
        <a className="login__membership-link" href="#">
          Regístrate aquí
        </a>
      </p>
    </div>
  );
}

export default Login;
