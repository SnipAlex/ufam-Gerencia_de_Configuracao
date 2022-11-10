function logger(type) {
    if(type  === 'tiny') {
        return (req, res, next) => {
            console.log("emulacao de um log curto.")
        }
    }
    if(type  === 'detailed') {
        return (req, res, next) => {
            console.log("emulacao de um log longo.")
        }
    }    
}

export default logger