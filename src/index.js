import express from "express"
//import morgan from "morgan"
import logger from "./middlewares/logger"
import routes from "./routes/routes"

const app = express()

//app.use(morgan("combined"));
app.use(logger("tiny"));

app.use(routes)

app.listen(2020, () => {
    console.log("Servidor estar rodando")
});