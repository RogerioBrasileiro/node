//CommonJS - importar e exportar módulos
const os = require('os')



//const totalMem = parseInt(os.totalmem() / 1024 / 1024)
//const freeMem = parseInt(os.freemem() / 1024 / 1024)


const memeoria = {
    total: `${totalMem} MB`,
    free: `${freeMem} MB`
}

console.clear()
console.table(memoria)

//console.log(`Memória Livre: ${freeMem}`, `Total de Memória: ${totalMem}`)

//console.log(os.freemem() / 1024 / 1024, os.totalmem())

