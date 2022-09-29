//CommonJS - importar e exportar módulos
const os = require('os')
const { setInterval } = require('timers/promises')


setInterval()
const totalMem = parseInt(os.totalmem() / 1024 / 1024)
const freeMem = parseInt(os.freemem() / 1024 / 1024)
const percent = parseInt((freeMem / totalMem) * 100)


const memoria = {
    total: `${totalMem} MB`,
    free: `${freeMem} MB`,
    percent: `${percent} %`
}

console.clear()
console.table(memoria)

//console.log(`Memória Livre: ${freeMem}`, `Total de Memória: ${totalMem}`)

//console.log(os.freemem() / 1024 / 1024, os.totalmem())

