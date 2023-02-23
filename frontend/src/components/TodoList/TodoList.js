import TodoItem from "../TodoItem/TodoItem";
import { ListGroup, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTodos(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const setAsDone = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    fetch(`${process.env.REACT_APP_BACKEND_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setTodos(todos.filter((todo) => todo.id !== id));
      });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Listangem de Todos</h2>
        <div>
          <Button onClick={() => navigate("/create")} variant="primary">
            +
          </Button>
        </div>
      </div>

      <ListGroup>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} setAsDone={setAsDone} />
        ))}
      </ListGroup>
    </div>
  );
}

export default TodoList;
