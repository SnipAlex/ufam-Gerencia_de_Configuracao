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
const read = (req, res) => {}
const update = (req, res) => {}
const remove = (req, res) => {}

export default {index, create, read, update, remove}