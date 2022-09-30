const bytesToMB = bytes => bytes /1024 /1024;
const bytestoGB = bytes => bytes /1024 /1024 / 1024;

// module.exports permite exportar funções para que sejam visiveis em outro arquivo.
module.exports = {bytesToMB, bytestoGB};