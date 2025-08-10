// Dynamic Routing

import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import TodoItem from "./routes/TodoItem.jsx";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: ":slug", element: <TodoItem /> },
]);
