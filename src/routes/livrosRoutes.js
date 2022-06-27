import express  from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
    .get("/",LivroController.listarLivros)
    .get("/livros/:id",LivroController.listarLivrosById)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id",LivroController.atualizarLivro)
    .delete("/livros/:id",LivroController.excluirLivro)

export default router;