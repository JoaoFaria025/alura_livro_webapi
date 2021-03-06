import express from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console,'Erro de conexão'))
db.once("open", ()=>{
    console.log("Conexão com o banco deu certo!")
})

const app = express();
app.use(express.json());//POSTMAN RECONHECER O JSON COMO POST
routes(app);//usar app

export default app



















// const livros=[
//     {id:1,"titulo":"senhor dos aneis"},
//     {id:2,"titulo":"jogos vorazes"},
// ]

// app.get('/',(req,res)=>{
//     res.status(200).send('Curso de node');
// })
// app.get('/livros', (req,res)=>{
//     livros.find((err, livros)=>{
//         res.status(200).json(livros);
//     })
    
// })

// app.get('/livros/:id', (req,res)=>{
//     let index = buscaLivro(req.params.id);
//     res.json(livros[index]);
// })

// app.put('/livros/:id', (req,res)=>{
//     let index = buscaLivro(req.params.id);
//     livros[index].titulo= req.body.titulo;
//     res.json(livros);
// })

// app.delete('/livros/:id', (req,res)=>{
//     let {id} = req.params;
//     let index = buscaLivro(id);
//     livros.splice(index,1);
//     res.send(`Livro ${id} removido com sucesso`); 
// })

// function buscaLivro(id){
//     return livros.findIndex(livro => livro.id == id)
// }