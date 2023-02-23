import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function TodoCreate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const todo = { title, description, isDone: false };
    console.log(todo);
    fetch(process.env.REACT_APP_BACKEND_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo)
    })
      .then(resp => resp.json())
      .then(data => navigate("/"))
      .catch((error) => console.log(error));
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Título</Form.Label>
        <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Beba água" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descrição</Form.Label>
        <Form.Control value={description} onChange={(e) => setDescription(e.target.value)} as="textarea" rows={3} />
      </Form.Group>
      <Button onClick={handleSubmit} variant="primary">Enviar</Button>
    </Form>
  );
}

export default TodoCreate;