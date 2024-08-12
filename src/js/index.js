const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desativarBotaoSelecionado();

        marcarBotaoSelecionado(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);

        esconderInformacoesAtivas();

        mostrarInformacoes(indice);
    })
})

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacaoAtiva = document.querySelector(".informacoes.ativa");
    informacaoAtiva.classList.remove("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
