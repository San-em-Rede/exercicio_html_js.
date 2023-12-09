const form = document.querySelector("#form")
const valueInput = document.querySelector("#valor")
const balanceInput = document.querySelector("saldo")


form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Verifica se campo A é menor que B
    if ((valueInput ==< balanceInput) = true) {
        alert("Você possui saldo o bastante")
        return;
    } else ((valueInput ==< balanceInput) = false) { 
        alert("Você não possui saldo o bastante")
    }
})

/*obs: 

1.No meu VS Code, as variaveis e funções não estão com as cores corretas
o que pode ser? 

2. Tem como me repassar todas as extensões do VS code utilizadas no curso
da EBAC?

3. Estou com dificuldade nesse exercicio

*/