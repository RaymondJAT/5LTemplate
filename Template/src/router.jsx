import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./page/About";
import Product from "./page/Product";
import Service from "./page/Service";
import Contact from "./page/Contact";
import Home from "./page/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "service", element: <Service /> },
      { path: "about", element: <About /> },
      { path: "product", element: <Product /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
