import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dynamic from "./components/Dynamic";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "Soumen/:menuOption",
          element: <Dynamic />,
        },
      ],
    },
    // {
    //   path: "/Soumen/:id",
    //   element: <div>ddvfk</div>,
    // },
  ]);
  const [count, setCount] = useState(0);

  return (
    <div className="m-5">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
