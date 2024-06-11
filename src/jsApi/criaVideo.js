
//Este arquivo serve para adicionar produtos no botão 'Enviar';
import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideos(evento) {
    evento.preventDefault();

    const titulo = document.querySelector('[dataForm="titulo"]').value;
    const categoria = document.querySelector('[dataForm="categoria"]').value;
    const imagem = document.querySelector('[dataForm="imagem"]').value;
    const video = document.querySelector('[dataForm="video"]').value;
    const descricao = document.querySelector('[dataForm="decricao"]').value;

    await conectaApi.criaVideo({titulo, categoria, imagem, video, descricao});
}

formulario.addEventListener("submit", evento => criarVideos(evento));