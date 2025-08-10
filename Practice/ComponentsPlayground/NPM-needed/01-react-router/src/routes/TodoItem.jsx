import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { todos as items } from "../data.json";

function TodoItem() {
  const { slug } = useParams();
  const item = items.find((item) => item.slug === slug);

  return (
    <div>
      <Navbar />
      <h1>TodoItem</h1>
      <div>
        <h2>{item.title}</h2>
        <p>id: {item.id}</p>
        <p>slug: {item.slug}</p>
      </div>
    </div>
  );
}

export default TodoItem;
