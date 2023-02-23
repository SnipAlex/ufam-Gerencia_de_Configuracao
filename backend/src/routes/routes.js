const express = require('express')
const todoController = require('../controllers/todo')

const router = express.Router()

router.get("/todo", todoController.index);
router.post("/create", todoController.create);
router.get("/read/:id", todoController.read);
router.put("/update/:id", todoController.update);
router.patch("/Done/:id", todoController.setAsDone);
router.delete("/remove/:id", todoController.remove);

module.exports = router;