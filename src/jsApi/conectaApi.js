
async function listarvideos(){
    const conexao = await fetch("http://localhost:3000/inicial");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function criaVideo({id, titulo, categoria, imagem, video, descricao}){
    const conexao = await fetch("http://localhost:3000/inicial", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            id: id,
            titulo: titulo, 
            categoria: categoria,
            imagem: imagem,
            video: video,
            descricao: descricao 
        } )
    });
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listarvideos,
    criaVideo
}