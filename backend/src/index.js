import express from "express"
import routes from "./routes/routes"

require("dotenv").config();

const PORT = process.env.PORT_BACK
const app = express()

app.use(express.json());
app.use(routes)

app.listen(PORT, () => {
    console.log(`Servidor estar rodando ${PORT}.`)
});