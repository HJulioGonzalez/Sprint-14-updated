import { useState } from "preact/hooks";
import Login from "./Login/Login";

import "./app.css";
import { BrowserRouter } from "react-router-dom";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Login />
    </>
  );
}
