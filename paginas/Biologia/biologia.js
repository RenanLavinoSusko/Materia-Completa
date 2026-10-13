function escrita(titulo, texto) {

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
    }, 30)
    
}

let local = document.querySelector('#quadro')

// Monitora os cliques nos botões de rádio
document.getElementsByName('conteudo').forEach((input) => {
    input.addEventListener('change', () => {
        local.innerHTML = ''

        if (input.id === 'TOS') {
            escrita("Átomo, Substâncias e Misturas", '');
            escrita('Átomo', 'Toda matéria é formada por átomos, partículas extremamente pequenas que se combinam de maneiras diferentes para formar tudo o que existe.');
            escrita('Substâncias', 'Substância é um material de composição fixa e propriedades bem definidas (ponto de fusão, ponto de ebulição e densidade constantes). Substância simples: Formada por átomos de um único elemento. Exemplos: O₂, N₂, Fe, H₂, O₃. Substância composta: Formada por átomos de dois ou mais elementos diferentes, em proporção fixa. Exemplos: H₂O, CO₂, NaCl, C₁₂H₂₂O₁₁ (açúcar). Alotropia Um mesmo elemento pode formar substâncias simples diferentes, chamadas alótropos: Carbono: grafite, diamante, fulereno, grafeno. Oxigênio: O₂ (gás oxigênio) e O₃ (ozônio). O diamante e o grafite têm os mesmos átomos, mas arranjados de formas diferentes, por isso suas propriedades são tão distintas.');
        }
        // Exemplo para o segundo botão
        if (input.id === 'PM') {
            escrita("Propriedades da Matéria", "A matéria possui propriedades gerais e específicas...");
        }
    });
});