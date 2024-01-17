import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todo, setTodo] = useState([]);

  const addTodoHandler = () => {
    setTodo((prevTodo) => [
      ...prevTodo,
      {
        title,
        description,
        id: Math.random() * 100,
      },
    ]);
  };
  console.log("todo", todo);
  return (
    <>
      <h1>Todo</h1>
      <p>Title</p>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <p>Description</p>
      <input type="text" onChange={(e) => setDescription(e.target.value)} />
      <br />
      <button onClick={addTodoHandler}>Add </button>
      {todo.map((t) => (
        <div
          key={t.id}
          style={{
            border: "2px solid red",
            marginBottom: "10px",
          }}
        >
          <h5>Title- {t.title}</h5>
          <p>Description- {t.description}</p>
        </div>
      ))}
    </>
  );
}

export default App;
