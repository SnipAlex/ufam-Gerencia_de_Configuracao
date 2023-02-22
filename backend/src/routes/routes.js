const express = require('express')
const todoController = require('../controllers/todo')

const router = express.Router()

router.get("/", todoController.index);
router.post("/", todoController.create);
router.get("/:id", todoController.read);
router.post("/:id", todoController.update);
router.path("/:id", todoController.setAsDone);
router.delete("/:id", todoController.remove);

module.exports = router;