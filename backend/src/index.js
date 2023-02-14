const app = require("./app")

require("dotenv").config();

const PORTB = process.env.PORT_BACK

app.listen(PORTB, () => {
    console.log(`Servidor estar rodando ${PORTB}.`)
});