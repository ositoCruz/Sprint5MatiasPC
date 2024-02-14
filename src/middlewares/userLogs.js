const { error } = require('console');
const fs = require('fs');

const path = require('path');

const userLogMiddleware = (req, res, next) => {
    const logMessage= `El usuario ingreso a la ruta: ${req.url}\n`;
    const logFilePath=  path.join(__dirname, '../logs/userLogs.txt');

    fs.appendFile(logFilePath, logMessage, (err) =>{
        if (err){
            console.error('Error al escribir el archivo de logs:', err);
        }

    });

    next();

};


module.exports= userLogMiddleware;