import { produtos } from "./produtos.js";

const elemento = {
    btnCurva: document.querySelectorAll(".btnCurva"),
    containerDisplay: document.querySelector ("#containerDisplay")
};

elemento.btnCurva.forEach((item)=> {
    item.addEventListener("click" , (evento) => {
        listarProdutosPorCurva (evento.target.id)
    });
});

function listarProdutosPorCurva (curva) {
    let listarCurva = produtos.filter ((produto) => produto.curva_abc == curva.toUpperCase())
    inserirDadosCurvaABC (listarCurva);
}

function inserirDadosCurvaABC(dados) {
    let colunasGRID = {
        id: document.createElement("p"),
        nome: document.createElement("p"),
        preco_venda: document.createElement("p"),
        estoque: document.createElement("p"),
    };

    colunasGRID.id.innerText = "ID";
    colunasGRID.nome.innerText = "NOME";
    colunasGRID.preco_venda.innerText = "PREÇO VENDA";
    colunasGRID.estoque.innerText = "ESTOQUE";

elemento.containerDisplay.append(colunasGRID.id, colunasGRID.nome, colunasGRID.preco_venda, colunasGRID.estoque)

};
