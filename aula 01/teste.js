//CommonJS - importar e exportar módulos
const os = require('os');
const { setInterval } = require('timers/promises');

const totalMem = parseInt(os.totalmem() / 1024 / 1024);
const freeMem = parseInt(os.freemem() / 1024 / 1024);
const percent = parseFloat((freeMem / totalMem) * 100).toFixed(2);

setInterval(() => {
    const memoria = {
        total: `${totalMem} MB`,
        free: `${freeMem} MB`,
        percent: `${percent} %`
    }

    console.clear();
    console.table(memoria);
})

//console.log(`Memória Livre: ${freeMem}`, `Total de Memória: ${totalMem}`)

//console.log(os.freemem() / 1024 / 1024, os.totalmem())