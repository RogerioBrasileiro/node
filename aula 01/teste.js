//CommonJS - importar e exportar módulos
const os = require('os');
const { bytestoGB, bytesToMB } = require('../aula 02/convertStorageUnit');
const fs = require ('fs');

const totalMem = parseFloat(
    bytestoGB(os.totalmem()).toFixed(2)
);
const freeMem = parseFloat(
    bytestoGB(os.freemem()).toFixed(2)
);
const percent = parseFloat(
    (freeMem / totalMem) * 100
).toFixed(2);

setInterval(() => {
    const memoria = {
        total: `${totalMem} MB`,
        free: `${freeMem} MB`,
        percent: `${percent} %`
    }

    var dateTime = new Date().toLocaleString()
    var print = `\n${dateTime}\n${JSON.stringify(memoria)}`
    console.clear();
    console.table(memoria);
    fs.appendFile('../aula 02/log.txt', print
    ,
    'utf-8',
    () => console.log(JSON.stringify(memoria)));
}, 1000)

//console.log(`Memória Livre: ${freeMem}`, `Total de Memória: ${totalMem}`)

//console.log(os.freemem() / 1024 / 1024, os.totalmem()) 0\