import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import About from "./routes/About.jsx";
// import Skills from "./routes/Skills.jsx";
// import Contact from "./routes/Contact.jsx";

// const router = createBrowserRouter([
//   { path: "/", element: <App /> },
//   { path: "/about", element: <About /> },
//   { path: "/skills", element: <Skills /> },
//   { path: "/contact", element: <Contact /> },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
