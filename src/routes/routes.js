import express from "express"
const router = express.Router()

router.get("/", (req, res) =>{
    res.send("Caiu na vila");
});

export default router;