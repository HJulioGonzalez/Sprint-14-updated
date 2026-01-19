import { useState } from "preact/hooks";
import Login from "./Login/Login";
import Register from "./Register/Register";
import "./app.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page">
        <h1 className="title">Habib julio testing Crypto-Duck</h1>
      </div>
      <Login />
      <Register />
    </>
  );
}
