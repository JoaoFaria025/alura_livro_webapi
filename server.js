// const http = require("http")
import app from './src/app.js'
const port = process.env.PORT || 3000; //subir HEROKU

app.listen(port,()=>{
    console.log(`Servidor escutando em http://localhost:${port}`)
})































// const rotas ={
//     '/': 'Curso de Node',
//     '/livros': 'Entrei pag livros',
//     '/autores': 'Entrei pag autores'
// }

// const server = http.createServer((req,res)=>{
//     res.writeHead(200, {'Content-Type':'text/plain'});
//     res.end(rotas[req.url]);
// })
