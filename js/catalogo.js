
const listaProdutos = document.getElementById("listaProdutos");

// ========================================
// MENSAGENS MOTIVACIONAIS
// ========================================

const mensagens = [
    "💡 Todo grande projeto começa com um primeiro passo.",
    "🚀 Continue avançando. Você está construindo algo incrível!",
    "💪 Cada problema resolvido é mais conhecimento adquirido.",
    "🎯 Foco no objetivo e constância no caminho.",
    "🔧 Organização transforma trabalho em resultado.",
    "🌟 Pequenos progressos também são grandes conquistas."
];

function mostrarMensagem() {

    const indiceAleatorio = Math.floor(Math.random() * mensagens.length);

    listaProdutos.innerHTML = `
        <p class="mensagem-motivacional">
            ${mensagens[indiceAleatorio]}
        </p>
    `;

}

function mostrarProdutos(lista) {

    listaProdutos.innerHTML = "";

    if (lista.length === 0) {

        listaProdutos.innerHTML = `
            <p class="nenhum-produto">
                Nenhum produto encontrado.
            </p>
        `;

        return;
    }

    lista.forEach(function(produto) {

        listaProdutos.innerHTML += `
            <div class="card-produto">

                <img src="${produto.imagem}" class="imagem-produto">

                <h2>Código: ${produto.codigo}</h2>

                <p>${produto.descricao}</p>

            </div>
        `;

    });

}


mostrarMensagem();


const campoBusca = document.getElementById("campoBusca");

// ========================================
// MODAL DA IMAGEM
// ========================================

const modalImagem = document.getElementById("modalImagem");

const fecharModal = document.getElementById("fecharModal");

const imagemAmpliada = document.getElementById("imagemAmpliada");

// Quando clicar em uma imagem do produto
document.addEventListener("click", function(event) {

    if (event.target.classList.contains("imagem-produto")) {

        console.log("CLIQUEI NA IMAGEM!");

        imagemAmpliada.src = event.target.src;

        modalImagem.style.display = "flex";

    }

});


fecharModal.addEventListener("click", function() {

    modalImagem.style.display = "none";

});


modalImagem.addEventListener("click", function(event) {

    if (event.target === modalImagem) {

        modalImagem.style.display = "none";

    }

});


campoBusca.addEventListener("input", function() {

    const textoBusca = campoBusca.value.toLowerCase();

    if (textoBusca === "") {

        mostrarMensagem();

        return;

    }

    const produtosFiltrados = produtos.filter(function(produto) {

        return produto.codigo.toLowerCase().includes(textoBusca)
            || produto.descricao.toLowerCase().includes(textoBusca);

    });

    mostrarProdutos(produtosFiltrados);

});