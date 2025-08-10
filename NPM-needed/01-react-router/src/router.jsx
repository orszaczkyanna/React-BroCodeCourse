import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import About from "./routes/About.jsx";
import Skills from "./routes/Skills.jsx";
import Contact from "./routes/Contact.jsx";
import TodoItem from "./routes/TodoItem.jsx";

export const router = createBrowserRouter([
  { path: "/", element: <App /> }, // Static Routing
  { path: "/about", element: <About /> }, // Static Routing
  { path: "/skills", element: <Skills /> }, // Static Routing
  { path: "/contact", element: <Contact /> }, // Static Routing
  { path: ":slug", element: <TodoItem /> }, // Dynamic Routing
]);
