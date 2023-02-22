import { Todo } from "../models"

const index = async (req, res) => { 
    try {
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json(error)
    }
}
const create = async (req, res) => {
    try {
        const todo = await Todo.create(req.body);
        res.status(201).json(todo)
    } catch (error) {
        res.status(500).json(error);
    }
}
const read = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByPk(id)
        res.status(200).json(todo)
    } catch (error) {
        res.status(500).json(error);
    }
}
const update = async (req, res) => {
    try {
        const { id } = req.params
        const [found] = await Todo.update(req.body, {where:{id:id}})
        if(found) res.send({msg: "Todo atualizado"})
        else res.status(404).json({msg: "Produto não encontrado"})
    } catch (error) {
        res.status(500).json(error);
    }
}

const setAsDone = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Todo.update({ isDone:true }, { where: { id } })
        res.status(202).json(data)
    } catch (error) {
        res.status(500).json(error);
    }
}

const remove = async (req, res) => {
    try
    {
        const { id } = req.params;
        const todo = await Todo.destroy({where:{id:id}});
        if(todo) res.send({msg: "Todo apagado"});
        else res.status(404).json({msg: "Todo não encontrado"});
    }
    catch(error)
    {
        res.status(500).json(error);
    }
}


export default {index, create, read, update, remove, setAsDone}
