const express = require('express');
const path = require('path');
const app = express();
/* 
*  almacenamos en app la ejecucion de express para tener todos
*  los metodos disponibles en un objeto
*/
app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname)
// ************ Sistema de Ruteo require y use() ************
const mainRutas = require('./routers/main');
app.use('/', mainRutas);

app.listen(3000, ()=>{
    console.log('Servidor funcionando en el puerto 3000');    
});
