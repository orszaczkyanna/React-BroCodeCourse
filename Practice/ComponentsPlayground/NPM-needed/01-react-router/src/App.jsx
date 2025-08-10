import "./App.css";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

import { todos } from "./data.json";

function App() {
  return (
    <>
      <Navbar />
      <h1>Home</h1>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={todo.slug}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
