function escrita(titulo, texto) {
    return new Promise((resolve) => {

        let h;

        if (h2_ou_h3 === 0) {
            h = document.createElement('h2');
        } else {
            h = document.createElement('h3');
        }

        let p = document.createElement('p');

        p.style.whiteSpace = "pre-line";

        
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
        }, 10);
    });
};

function imagem(img1, img2, img3, img4, alt) {
    const img = document.createElement('img');
    if (window.matchMedia('(min-width: 800px).').matches) {
        img.src = img1;
    } else if (window.matchMedia('(min-width: 600px').matches){
        img.src = img2;
    } else if (window.matchMedia(`(min-width: 400px)`).matches) {
        img.src = img3;
    } else {
        img.src = img4;
    };
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

        //Atomo substancias e Misturas
        if (input.id === 'ASM') {
            await escrita("átomo, substâncias e misturas", '');
            h2_ou_h3++;
            await escrita('Átomo', '    Toda matéria é formada por átomos, partículas extremamente pequenas que se combinam de maneiras diferentes para formar tudo o que existe.');
            await escrita('Substâncias', `  Substância é um material de composição fixa e propriedades bem definidas (ponto de fusão, ponto de ebulição e densidade constantes).
        Substância simples: Formada por átomos de um único elemento. Exemplos: O₂, N₂, Fe, H₂, O₃.
        Substância composta: Formada por átomos de dois ou mais elementos diferentes, em proporção fixa. Exemplos: H₂O, CO₂, NaCl, C₁₂H₂₂O₁₁ (açúcar).
        Alotropia: Um mesmo elemento pode formar substâncias simples diferentes, chamadas alótropos: Carbono: grafite, diamante, fulereno, grafeno. Oxigênio: O₂ (gás oxigênio) e O₃ (ozônio). O diamante e o grafite têm os mesmos átomos, mas arranjados de formas diferentes, por isso suas propriedades são tão distintas.`);
            await escrita('Misturas', ` Mistura é a união de duas ou mais substâncias sem reação química entre elas, e cada uma mantém suas propriedades. A composição é variável.
        Classificação
            Mistura homogênea (solução): Apresenta uma única fase, e não é possível distinguir os componentes, nem ao microscópio comum. Exemplos: água + sal, ar filtrado, álcool hidratado, ligas metálicas (latão, aço).
            Mistura heterogênea: Apresenta duas ou mais fases visíveis. Exemplos: água + óleo, água + areia, granito, sangue (ao microscópio), leite. Fase é cada porção uniforme de um sistema. Componente é cada substância presente. Água + gelo tem 2 fases, mas apenas 1 componente (a água).
            Casos que confundem: Água + gelo: sistema heterogêneo, mas substância pura (só H₂O). Água + sal em excesso: o sal que não dissolveu forma o corpo de fundo, e o sistema fica heterogêneo. 
            Ar: homogêneo (mistura de N₂, O₂, Ar, CO₂...).`);
        }
        //Propriedades da Matéria
        else if (input.id === 'PM') {
            await escrita("propriedades da matéria", "");
            h2_ou_h3++;
            await escrita('Conceitos Básicos', `    Matéria: tudo o que tem massa e ocupa lugar no espaço (volume).
    Corpo: porção limitada de matéria (uma pedra, uma gota d’água).
    Objeto: corpo fabricado para uma finalidade (uma panela, uma caneta).`);
            await escrita('propriedades gerais', `
    Massa: Quantidade de matéria de um corpo.
    Volume (extensão): Espaço ocupado pelo corpo.`);
            await escrita('Densidade e Massa Especifica', ` Massa específica (ρ): É a relação entre a massa de uma amostra de uma substância e o volume que ela ocupa. Diz quanta matéria cabe em cada unidade de volume.
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
    Atenção: no Ensino Médio, no ENEM e na maioria dos vestibulares, os dois termos são tratados como sinônimos. Use a distinção acima quando a questão envolver objetos ocos (navios, bolas, balões).`);
            await escrita('Estados Fisicos', `
    Sólido:     Forma -> Definida.      Volume -> Definido.     Particulas -> Muito próximas, ordenadas, vibrando
    Líquido:    Forma -> Do recipiente.  Volume -> Definido.     Particulas -> Próximas, desordenadas, deslizando
    Gasoso:     Forma -> Do recipiente.      Volume -> Variável.     Particulas -> Muito afastadas, movimento livre`);
            imagem('../../imagens/quimica/propriedades_da_materia/mudancas_estados_fisicos_800px.jpg', '../../imagens/quimica/propriedades_da_materia/mudancas_estados_fisicos_600px.jpg', '../../imagens/quimica/propriedades_da_materia/mudancas_estados_fisicos_400px.jpg' , '../../imagens/quimica/propriedades_da_materia/mudancas_estados_fisicos_200px.jpg', 'imagem dos estados fisicos e os efeitos sofridos');
        }
        //Misturas
        else if (input.id === 'Mis') {
            await escrita('misturas', '');
            h2_ou_h3++
            await escrita('Definição', `É formada quando duas ou mais substâncias são colocadas juntas sem que necessariamente ocorra uma reação química entre elas.
        Pense em um copo com água e sal. Você coloca o sal na água, mexe e ele aparentemente desaparece. Porém, o sal continua presente, dissolvido na água.
        A ideia principal é esta: misturar substâncias não significa necessariamente criar uma nova substância.
            Por exemplo: Água + açúcar = mistura.`);
            await escrita('Substância pura × Mistura', `Antes de classificar as misturas, você precisa saber diferenciar esses dois conceitos.
        Substância pura: Possui apenas uma substância química - Tem composição química definida - Ex.: água destilada pura.
        Mistura: Possui duas ou mais substâncias - Pode ter proporções variáveis.
        Ex: água com sal.
Atenção a uma pegadinha: água mineral não é, em geral, uma substância pura, pois contém água e sais minerais dissolvidos.
Outro detalhe importante: uma substância pura pode ser simples, como o O₂, ou composta, como o H₂O. Isso depende de sua composição química, não de sua aparência.`);
            await escrita('Os dois tipos principais de mistura', `Mistura homogênea: Apresenta apenas uma fase visível. A composição é uniforme em toda a extensão da mistura. Você não consegue distinguir visualmente suas partes.
            Exemplo: Água com sal completamente dissolvido
        Chamamos cada porção visualmente uniforme de fase. Uma mistura homogênea apresenta uma única fase e também é chamada de solução.
Mistura heterogênea: Apresenta duas ou mais fases. É possível identificar regiões com aspectos ou composições diferentes. 
            Exemplo: Água + óleo`);
            await escrita('O que é uma fase?', `Fase é cada porção visualmente uniforme de um sistema, separada de outra por uma fronteira ou interface.
        Imagine um copo com água e óleo:
            - Fase 1: óleo.
            - Fase 2: água.
        Portanto, temos uma mistura heterogênea com duas fases.`);
            imagem('../../imagens/quimica/misturas/classificacao_800px.png', '../../imagens/quimica/misturas/classificacao_600px.png', '../../imagens/quimica/misturas/classificacao_400px.png',  '../../imagens/quimica/misturas/classificacao_200px.png', 'Imagem de mistura e substancia');
            await escrita('Número de componentes × Número de fases', `Esta é uma das partes mais importantes do conteúdo, porque muita gente confunde as duas coisas.
            - Componentes: quantas substâncias diferentes estão presentes.
            - Fases: quantas porções visualmente distintas existem no sistema.`);
            await escrita('E quando uma mistura tem mais de duas fases?', `Considere um recipiente com água, óleo e areia.
            Temos:
                - Componentes: 3 (água, óleo e areia).
                - Fases: 3 (óleo, água e areia).
                - Classificação: mistura heterogênea.
            Se você acrescentar pedras que continuem separadas da areia, o número de fases sólidas pode aumentar, dependendo de como os materiais se apresentam. Não basta contar os ingredientes: é preciso observar as fases efetivamente existentes.`);
            imagem('../../imagens/quimica/fases_das_misturas/fases_800px.jpg', '../../imagens/quimica/fases_das_misturas/fases_600px.jpg', '../../imagens/quimica/fases_das_misturas/fases_400px.jpg', '../../imagens/quimica/fases_das_misturas/fases_200px.jpg', 'Imagem com experimento das fases');
            await escrita('Separando misturas', `As substâncias de uma mistura podem ser separadas por processos físicos, aproveitando diferenças entre suas propriedades.
                Filtração -> Separa sólido de líquido ou gás -> Água + areia
                Decantação -> Separa fases pela diferença de densidade -> Água + óleo
                Evaporação -> Remove o solvente por vaporização -> Obter sal da água salgada
                Destilação simples -> Separa um líquido de um soluto não volátil -> Água + sal
                Destilação fracionada -> Separa líquidos miscíveis com diferentes temperaturas de ebulição -> Componentes do petróleo, em processos industriais
                Peneiração -> Separa sólidos por tamanho das partículas -> Areia + pedras`);
        }
        //Massa atômica
        else if (input.id === 'MA') {
            await escrita('massa atômica, molecular e molar', '');
            h2_ou_h3++;
            await escrita('Massa atômica (u)', `A massa atômica é a massa de um átomo, expressa em uma unidade chamada unidade de massa atômica (u).
            Para entender esse conceito, você precisa primeiro saber que o átomo é formado por três partículas principais:
                - Prótons: possuem carga positiva e ficam no núcleo.
                - Nêutrons: não possuem carga elétrica e ficam no núcleo.
                - Elétrons: possuem carga negativa e ficam ao redor do núcleo.
            Prótons e nêutrons concentram praticamente toda a massa do átomo. A massa dos elétrons é muito pequena em comparação.`);
            await escrita('Como calcular uma massa aproximada?', `Para os exercícios introdutórios, usamos:
                A = Z + N
            Em que:
                - A = número de massa.
                - Z = número de prótons.
                - N = número de nêutrons.
            Atenção: tecnicamente, isso é o número de massa, não a massa atômica média indicada na tabela periódica. Essa diferença é importante.`);
            await escrita('Não confunda estes três conceitos', `Número atômico (Z) -> Quantidade de prótons.
            Número de massa (A) -> Prótons + nêutrons.
            Massa atômica -> Massa do átomo; na tabela, geralmente é a média dos isótopos naturais.`);
            await escrita('Massa molecular (u)', `É a soma das massas atômicas de todos os átomos que formam uma molécula.
            A fórmula é simples:
            Massa molecular = soma das massas atômicas
            Exemplo 1 — Água (H₂O)
            Sabemos que:
            - H = 1 u
            - O = 16 u
            A molécula de água possui dois átomos de hidrogênio e um de oxigênio.
            H₂O = 2 . (1)+16
            H₂O = 18u`);
            await escrita('Massa molar (g/mol)', `A massa molar é a massa de 1 mol de uma substância. Sua unidade é o grama por mol, representada por g/mol.
            Lembre-se: 1 mol corresponde a aproximadamente 6,022 . 10^23 entidades elementares (átomos, moléculas ou íons).
            Por exemplo, a massa molecular da água é 18 u. Já a massa molar da água é aproximadamente 18 g/mol.
            Isso significa que 1 mol de água tem massa de aproximadamente 18 gramas.
            Atenção: 1 Mol = 1 molécula = 6 . 10^23. 2 Mol = 2 Moléculas = 12 . 10^23`)
        }
        //Fórmulas Químicas
        else if (input.id === 'FQ') {
        await escrita('fórmulas químicas', 'As fórmulas químicas são uma forma de representar as substâncias usando símbolos dos elementos químicos e números. Elas mostram quais elementos estão presentes e, dependendo do tipo de fórmula, a quantidade ou a proporção entre seus átomos.');
        h2_ou_h3++;
        await escrita('Como ler', `H₂O -> Água
            H -> Hidrogênio (2 átomos)
            O -> Oxigênio (1 átomo)
                - H é o símbolo do hidrogênio.
                - O é o símbolo do oxigênio.
                - O número pequeno abaixo, chamado índice, indica quantos átomos daquele elemento existem na fórmula.
                - Quando não aparece um índice, entendemos que ele é igual a 1.
            Portanto, H₂O representa dois átomos de hidrogênio e um de oxigênio por molécula.`);
        await escrita('Índice x Coeficiente', `
            Compare:
            H₂O -> Índice (número pequeno) -> Indica a quantidade de átomos do elemento na fórmula. -> H₂O = 2 H e 1 O.
            3 H₂O -> Coeficiente (número grande antes) -> Indica quantas moléculas ou unidades da fórmula estão sendo consideradas -> 3 H₂O = 6 H e 3 O, totalizando 9 átomos.
            A regra é: o coeficiente multiplica todos os índices da fórmula.`);
        await escrita('Parênteses', `Os parênteses agrupam átomos. O índice que aparece depois deles multiplica tudo o que está dentro.
            Exemplo:
            Ca(OH)₂
            Essa fórmula contém:
            - Ca: 1 átomo de cálcio.
            - O: 1x2 = 2 átomos de oxigênio.
            - H: 1x2 = 2 átomos de hidrogênio.
            Total: 5 átomos por unidade da fórmula.
            Se houver um coeficiente também, você multiplica o resultado inteiro por ele. Por exemplo, 3Ca(OH)₂ contém 3 Ca, 6 O e 6 H.`);
        await escrita('Fórmula empírica (minima)', `A fórmula empírica representa a menor proporção inteira possível entre os átomos dos elementos presentes em uma substância.
        Em outras palavras, ela mostra a proporção entre os elementos, e não necessariamente a quantidade real de átomos em uma molécula.
        Exemplo:
        C6H12O6
        Os índices são 6, 12 e 6. Todos podem ser divididos por 6:
        C₆H₁₂O₆= CH₂O
        Portanto:
        - Fórmula molecular: C₆H₁₂O₆
        - Fórmula empírica: CH₂O`);
        }
        //Príncipios de Avogado
        else if (input.id === 'PA') {
            await escrita('princípios de avogadro', 'O princípio de Avogadro é fundamental para entender a relação entre gases, volume, quantidade de matéria e número de partículas.');
            h2_ou_h3++;
            await escrita('Qual sua tese?', `O princípio de Avogadro afirma que:
            Volumes iguais de gases diferentes, nas mesmas condições de temperatura e pressão, contêm o mesmo número de partículas.
            Imagine dois recipientes do mesmo tamanho, à mesma temperatura e pressão: um contém gás oxigênio (O₂) e o outro contém gás hidrogênio (H₂).
            Se ambos ocupam 2 litros, eles contêm o mesmo número de moléculas, desde que os gases se comportem idealmente.`);
            await escrita('Fórmula', `Em temperatura e pressão constantes, o volume de um gás é diretamente proporcional à quantidade de matéria:
            V₁n₁ = V₂n₂
            Em que:
            - V₁ e n₂: volumes dos gases.
            - n₁ e n₂: quantidades de matéria, medidas em mol.
            Isso significa que, se você dobrar a quantidade de mols de um gás, o volume também dobrará, desde que a temperatura e a pressão permaneçam constantes.`);
            await escrita('O número de Avogadro', `Existe outro conceito importante associado a Avogadro: a constante de Avogadro.
            N = 6,022 . 10^23 . mol^-1 (^ = elevado)
            Esse número indica quantas entidades elementares existem em 1 mol.
            Por exemplo:
            - 1 mol de moléculas de água contém 6,022 . 10^23 moléculas de água.
            - 1 mol de átomos de ferro contém 6,022 . 10^23 átomos de ferro.
            Não confunda: o princípio de Avogadro relaciona volume e quantidade de gás; a constante de Avogadro relaciona mol e número de partículas.`)
            await escrita('Para balncear equação', `H2 + O2 -> H2O
            Passo 1 — Balanceie o oxigênio.
            À esquerda há 2 átomos de oxigênio; à direita, 1.
            Colocamos o coeficiente 2 na água:
            H₂ + O₂ -> 2H₂O
            Agora temos 2 oxigênios de cada lado, mas precisamos conferir o hidrogênio.
            Passo 2 — Balanceie o hidrogênio.
            À direita, existem 2 . 2 = 4 átomos de hidrogênio. À esquerda, temos apenas 2.
            Colocamos o coeficiente 2 no H₂:
            2H₂ + O₂ -> 2H₂O
            Passo 3 — Confira os dois lados.
            Elemento	Reagentes	Produtos
            H - 4 = 4
            O - 2 = 2
            Os números são iguais. Portanto, a equação está balanceada.`)
        }            
    });
});