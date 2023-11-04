import express from 'express';

//configuracion
const cfg={
    port : process.env.PORT || 3000,

};

//iniciar express
const app=express();

//rutas
app.get('/',(req, res)=>{
    res.send('Hola mundo');
});

//otra ruta
app.get('/about',(req, res)=>{
    res.send('About');
});

//servir archivos estaticos desde la carpeta static
app.use(express.static('static'));

//escuchar peticiones
app.listen(cfg.port, ()=>{
    console.log(`Server running at http://localhost:${cfg.port}`)
});

