// Array para armazenar os amigos adicionados
let amigos = [];

/**
 * Adiciona um novo amigo à lista
 */
function adicionarAmigo() {
    let input = document.querySelector("input");
    let nomeDoAmigo = input.value.trim();

    if (nomeDoAmigo === "") {
        alert("Por favor, insira um nome");
        return;
    }

    amigos.push(nomeDoAmigo);
    atualizarLista();
    limparCampo();
}

/**
 * Limpa o campo de entrada após adicionar um amigo
 */
function limparCampo() {
    document.querySelector("input").value = ""; // Define o valor do campo como vazio
}

/**
 * Atualiza a exibição da lista de amigos no HTML
 */
function atualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Obtém o elemento da lista
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join(""); // Atualiza a lista com os amigos
}

/**
 * Realiza o sorteio de um amigo secreto
 */
function sortearAmigo() {
    if (amigos.length < 2) { // Verifica se há pelo menos dois amigos
        alert("Digite pelo menos dois nomes para sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length); // Sorteia um índice aleatório
    document.getElementById("resultado").textContent = `O amigo secreto é: ${amigos[indiceSorteado]}`; // Exibe o resultado
}


