import express from "express"
//import morgan from "morgan"
//import logger from "./middlewares/logger"
import routes from "./routes/routes"

require("dotenv").config();

const PORT = process.env.PORT_BACK
const app = express()

//app.use(morgan("combined"));
//app.use(logger("tiny"));
//app.use(routes)
app.get("/", (req, res) => {
    res.send("Micareta do miranda")
});

app.listen(PORT, () => {
    console.log(`Servidor estar rodando ${PORT}.`)
});