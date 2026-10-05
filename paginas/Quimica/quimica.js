function escrita(titulo, texto) {
    let local = document.getElementById('quadro')

    local.innerHTML = ""

    let h = document.createElement('h2')
    let p = document.createElement('p')

    local.appendChild(h)
    local.appendChild(p)

    var cont = 0
    var cont1 = 0
    let intervalo = setInterval(() => {
        if (cont<titulo.length) {
            h.textContent += titulo[cont]; // Adiciona letra por letra no H2
            cont++;
        } 
        else if (cont1<texto.length) {
            p.textContent += texto[cont1]
            cont1++
        }
        else {
            clearInterval(intervalo); // Para o efeito quando o título acabar
        }
    }, 100)

}

// Monitora os cliques nos botões de rádio
document.getElementsByName('conteudo').forEach((input) => {
    input.addEventListener('change', () => {
        // Se o botão clicado for o de id "ASM"
        if (input.id === 'ASM') {
            escrita("Átomo, Substâncias e Misturas", "Olá Lucas, aqui começamos o conteúdo de química básica...");
        }
        // Exemplo para o segundo botão
        if (input.id === 'PM') {
            escrita("Propriedades da Matéria", "A matéria possui propriedades gerais e específicas...");
        }
    });
});