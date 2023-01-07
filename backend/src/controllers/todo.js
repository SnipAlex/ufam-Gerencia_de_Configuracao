let id = 1;
const todos = []

const index = (req, res) => { 
    res.status(200).json(todos);
}
const create = (req, res) => {
    try {
        const newTodo = {
            id:id++,
            ...req.body,
            createAt: new Date()
        };
        todos.push(newTodo)
        res.status(201).json(newTodo)
    } catch (error) {
        res.status(500);
    }
}
const read = (req, res) => {
    const { id } = req.params;
    const todo = todos.filter((t) => t.id === id)
    res.send(todo)
}
const update = (req, res) => {
    const { id } = req.params
    const todoID = todos.findIndex((t) => t.id = id)
    if (req.body.title) todos[todoID].title = req.body.title;
    if (req.body.description) todos[todoID].description = req.body.description;
    if (req.body.isDone) todos[todoID].isDone = req.body.isDone;
    res.status(200).json({msg: "ToDo atualizado"})
}
const remove = (req, res) => {
    const { id } = req.params
    todo = todos.filter((u) => u.id !== id)
    res.status(200).json({msg: "ToDo removido"})
}

export default {index, create, read, update, remove}