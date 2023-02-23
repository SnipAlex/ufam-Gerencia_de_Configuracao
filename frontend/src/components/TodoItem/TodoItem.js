import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function TodoItem({ todo, setAsDone }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${todo.id}`);
  };

  return (
    <ListGroup.Item
      style={{
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
      }}
      onClick={handleClick}
    >
      <div>{todo.title}</div>
      <a href="/" onClick={(e) => setAsDone(e, todo.id)}>
        Done
      </a>
    </ListGroup.Item>
  );
}

export default TodoItem;
