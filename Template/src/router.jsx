import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./page/Home";
import About from "./page/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
