import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="m-10">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
