const express= require('express');
const path= require('path');
const app= express();
const port= 3000

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/',(req, res)=>res.sendFile(path.resolve(__dirname, 'views', 'home.html')))



app.listen(port,()=>console.log(`El servidor fue levantado con exito en el puerto ${port}`))