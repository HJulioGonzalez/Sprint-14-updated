import { useState } from "preact/hooks";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Ducks from "./Ducks/Ducks";

import "./app.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/ducks" element={<Ducks />}></Route>
    </Routes>
  );
}
