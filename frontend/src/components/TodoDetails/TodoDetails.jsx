import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useParams, useNavigate } from 'react-router-dom';

function TodoDetails() {
  const [todo, setTodo] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTodo(data);
      })
  }, [id]);

  const setAsDone = () => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json())
      .then((data) => {
        navigate("/");
      })
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{todo.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{todo.createdAt}</Card.Subtitle>
        <Card.Text>
          {todo.description}
        </Card.Text>
        <Card.Link href="#" onClick={setAsDone}>Done!</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default TodoDetails;