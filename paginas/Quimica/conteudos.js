function escrita(titulo, texto) {
    return new Promise((resolve) => {

        let h;

        if (h2_ou_h3 === 0) {
            h = document.createElement('h2');
        } else {
            h = document.createElement('h3');
        }

        let p = document.createElement('p');

        p.style.whiteSpace = "pre-wrap";

        
        local.appendChild(h);
        local.appendChild(p);
        
        var cont = 0;
        var cont1 = 0;
        
        let intervalo = setInterval(() => {
            if (cont < titulo.length) {
                h.textContent += titulo[cont];
                cont++;
            }
            else if (cont1 < texto.length) {
                p.textContent += texto[cont1];
                cont1++;
            }
            else {
                clearInterval(intervalo);
                resolve();
            };
        }, 1);
    });
};

function imagem(img1, img2, alt) {
    const tela = window.matchMedia('(min-width: 900px)');
    const img = document.createElement('img');
    img.src = tela.matches ? img1 : img2;
    img.alt = alt;
    local.appendChild(img);
};

let h2_ou_h3 = 0;
let local = document.querySelector('#quadro');

//Parte do conteudo escrito
document.getElementsByName('conteudo').forEach((input) => {
    input.addEventListener('change', async () => {
        local.innerHTML = '';
        h2_ou_h3 = 0;

        if (input.id === 'ASM') {
            await escrita("átomo, substâncias e misturas", '');
            h2_ou_h3++
            await escrita('Átomo', 'Toda matéria é formada por átomos, partículas extremamente pequenas que se combinam de maneiras diferentes para formar tudo o que existe.');
            await escrita('Substâncias', `Substância é um material de composição fixa e propriedades bem definidas (ponto de fusão, ponto de ebulição e densidade constantes).
                Substância simples: Formada por átomos de um único elemento. Exemplos: O₂, N₂, Fe, H₂, O₃.
                Substância composta: Formada por átomos de dois ou mais elementos diferentes, em proporção fixa. Exemplos: H₂O, CO₂, NaCl, C₁₂H₂₂O₁₁ (açúcar).
                Alotropia: Um mesmo elemento pode formar substâncias simples diferentes, chamadas alótropos: Carbono: grafite, diamante, fulereno, grafeno. Oxigênio: O₂ (gás oxigênio) e O₃ (ozônio). O diamante e o grafite têm os mesmos átomos, mas arranjados de formas diferentes, por isso suas propriedades são tão distintas.`);
            await escrita('Misturas', `Mistura é a união de duas ou mais substâncias sem reação química entre elas, e cada uma mantém suas propriedades. A composição é variável.
                Classificação
                Mistura homogênea (solução): Apresenta uma única fase, e não é possível distinguir os componentes, nem ao microscópio comum. Exemplos: água + sal, ar filtrado, álcool hidratado, ligas metálicas (latão, aço).
                Mistura heterogênea: Apresenta duas ou mais fases visíveis. Exemplos: água + óleo, água + areia, granito, sangue (ao microscópio), leite. Fase é cada porção uniforme de um sistema. Componente é cada substância presente. Água + gelo tem 2 fases, mas apenas 1 componente (a água).
                Casos que confundem: Água + gelo: sistema heterogêneo, mas substância pura (só H₂O). Água + sal em excesso: o sal que não dissolveu forma o corpo de fundo, e o sistema fica heterogêneo. 
                Ar: homogêneo (mistura de N₂, O₂, Ar, CO₂...).`)
        }
        // Exemplo para o segundo botão
        else if (input.id === 'PM') {
            await escrita("propriedades da matéria", "");
            h2_ou_h3++
            await escrita('Conceitos Básicos', `
            Matéria: tudo o que tem massa e ocupa lugar no espaço (volume).
            Corpo: porção limitada de matéria (uma pedra, uma gota d’água).
            Objeto: corpo fabricado para uma finalidade (uma panela, uma caneta).`)
            await escrita('propriedades gerais', `
            Massa: Quantidade de matéria de um corpo.
            Volume (extensão): Espaço ocupado pelo corpo.`)
            await escrita('Densidade e Massa Especifica', `Massa específica (ρ): É a relação entre a massa de uma amostra de uma substância e o volume que ela ocupa. Diz quanta matéria cabe em cada unidade de volume.
            p = m (massa) / V (volume)
            Densidade (d): Tem a mesma fórmula, mas é aplicada a um corpo ou objeto inteiro, incluindo eventuais espaços vazios.
            d = m / V
            Qual é a diferença entre os dois termos?
                Massa específica	
                    Uma substância (material homogêneo e maciço)	
                    Exemplo: Ferro --> 7,9 g/cm³	
                Densidade
                    Um navio de ferro: densidade média menor que a da água
                    Exemplo: Um corpo/objeto (pode ter partes ocas)
            Atenção: no Ensino Médio, no ENEM e na maioria dos vestibulares, os dois termos são tratados como sinônimos. Use a distinção acima quando a questão envolver objetos ocos (navios, bolas, balões).`)
            await escrita('Estados Fisicos', `
            Sólido:     Forma -> Definida.      Volume -> Definido.     Particulas -> Muito próximas, ordenadas, vibrando
            Líquido:    Forma -> Do recipiente.  Volume -> Definido.     Particulas -> Próximas, desordenadas, deslizando
            Gasoso:     Forma -> Do recipiente.      Volume -> Variável.     Particulas -> Muito afastadas, movimento livre`)
            imagem('../../imagens/imagens de quimica/mudancas-estados-fisicos-materia.webp', '../../imagens/imagens de quimica/mudancas-estados-fisicos-materia_pequeno.webp', 'imagem dos estados fisicos e os efeitos sofridos')
        }
    });
});