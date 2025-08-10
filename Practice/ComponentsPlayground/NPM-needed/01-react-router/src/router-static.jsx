// Static Routing

import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import About from "./routes/About.jsx";
import Skills from "./routes/Skills.jsx";
import Contact from "./routes/Contact.jsx";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/skills", element: <Skills /> },
  { path: "/contact", element: <Contact /> },
]);
