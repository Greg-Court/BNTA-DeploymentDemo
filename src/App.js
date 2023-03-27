import logo from "./logo.svg";
import "./App.css";
import { Welcome } from "./Welcome";
import {
  RouterProvider,
  createBrowserRouter,
  BrowserRouter,
} from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Welcome /> },
    { path: "/about", element: <About /> },
    { path: "/projects", element: <Projects /> },
    { path: "/contact", element: <Contact /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
