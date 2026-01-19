import { useState } from "preact/hooks";
import Login from "./Login/Login";
import Register from "./Register/Register";
import "./app.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Login />
      <Register />
    </>
  );
}
