import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login__title">
        <p className="login__title-text">LOGIN PAGE CONTENT</p>
      </div>
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
