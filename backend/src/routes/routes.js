import express from "express"
import todoController from "../controllers/todo"

const router = express.Router()

router.get("/", todoController.index);
router.post("/", todoController.create);

export default router;