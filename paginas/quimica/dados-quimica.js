const conteudosQuimica = {
//Matérias A
    //Atomos, Substancias e Misturas
    ASM: [
        { titulo: "átomo, substâncias e misturas", texto: "", tipo: 'h2'},
        { titulo: 'Átomo', texto: 'Toda matéria é formada por átomos, partículas extremamente pequenas que se combinam de maneiras diferentes para formar tudo o que existe.', tipo: 'h3'},
        { titulo: 'Substâncias', texto: `Substância é um material de composição fixa e propriedades bem definidas (ponto de fusão, ponto de ebulição e densidade constantes).
            Substância simples: Formada por átomos de um único elemento. Exemplos: O₂, N₂, Fe, H₂, O₃.
            Substância composta: Formada por átomos de dois ou mais elementos diferentes, em proporção fixa. Exemplos: H₂O, CO₂, NaCl, C₁₂H₂₂O₁₁ (açúcar).
            Alotropia: Um mesmo elemento pode formar substâncias simples diferentes, chamadas alótropos: Carbono: grafite, diamante, fulereno, grafeno. Oxigênio: O₂ (gás oxigênio) e O₃ (ozônio). O diamante e o grafite têm os mesmos átomos, mas arranjados de formas diferentes, por isso suas propriedades são tão distintas.`, tipo: 'h3'},
        { titulo: 'Misturas', texto: `Mistura é a união de duas ou mais substâncias sem reação química entre elas, e cada uma mantém suas propriedades. A composição é variável.
            Classificação
            Mistura homogênea (solução): Apresenta uma única fase, e não é possível distinguir os componentes, nem ao microscópio comum. Exemplos: água + sal, ar filtrado, álcool hidratado, ligas metálicas (latão, aço).
            Mistura heterogênea: Apresenta duas ou mais fases visíveis. Exemplos: água + óleo, água + areia, granito, sangue (ao microscópio), leite. Fase é cada porção uniforme de um sistema. Componente é cada substância presente. Água + gelo tem 2 fases, mas apenas 1 componente (a água).
            Casos que confundem: Água + gelo: sistema heterogêneo, mas substância pura (só H₂O). Água + sal em excesso: o sal que não dissolveu forma o corpo de fundo, e o sistema fica heterogêneo. 
            Ar: homogêneo (mistura de N₂, O₂, Ar, CO₂...).`, tipo: 'h3'},
    ],
    //Propriedades da Matéria
    PM: [ 
        { titulo: "propriedades da matéria", texto: "", tipo: 'h2'},
        { titulo: 'Conceitos Básicos', texto: `Matéria: tudo o que tem massa e ocupa lugar no espaço (volume).
            Corpo: porção limitada de matéria (uma pedra, uma gota d’água).
            Objeto: corpo fabricado para uma finalidade (uma panela, uma caneta).`, tipo: 'h3'},
        { titulo: 'propriedades gerais', texto: `
            Massa: Quantidade de matéria de um corpo.
            Volume (extensão): Espaço ocupado pelo corpo.`, tipo: 'h3'},
        { titulo: 'Densidade e Massa Especifica', texto: `Massa específica (ρ): É a relação entre a massa de uma amostra de uma substância e o volume que ela ocupa. Diz quanta matéria cabe em cada unidade de volume.
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
            Atenção: no Ensino Médio, no ENEM e na maioria dos vestibulares, os dois termos são tratados como sinônimos. Use a distinção acima quando a questão envolver objetos ocos (navios, bolas, balões).`, tipo: 'h3'},
        { titulo: 'Estados Fisicos', texto: `Sólido:     Forma -> Definida.      Volume -> Definido.     Particulas -> Muito próximas, ordenadas, vibrando
            Líquido:    Forma -> Do recipiente.  Volume -> Definido.     Particulas -> Próximas, desordenadas, deslizando
            Gasoso:     Forma -> Do recipiente.      Volume -> Variável.     Particulas -> Muito afastadas, movimento livre`, tipo: 'h3', imagem: ['../../imagens/quimica/propriedades_da_materia/mudancas_estados_fisicos_800px.jpg', '../../imagens/quimica/propriedades_da_materia/mudancas_estados_fisicos_600px.jpg', '../../imagens/quimica/propriedades_da_materia/mudancas_estados_fisicos_400px.jpg', '../../imagens/quimica/propriedades_da_materia/mudancas_estados_fisicos_200px.jpg', 'imagem dos estados fisicos e os efeitos sofridos']},
    ],
    //Misturas
    Mis: [
        { titulo: 'misturas', texto: '', tipo: 'h2'},
        { titulo: 'Definição', texto: `É formada quando duas ou mais substâncias são colocadas juntas sem que necessariamente ocorra uma reação química entre elas.
            Pense em um copo com água e sal. Você coloca o sal na água, mexe e ele aparentemente desaparece. Porém, o sal continua presente, dissolvido na água.
            A ideia principal é esta: misturar substâncias não significa necessariamente criar uma nova substância.
            Por exemplo: Água + açúcar = mistura.`, tipo: 'h3'},
        { titulo: 'Substância pura × Mistura', texto: `Antes de classificar as misturas, você precisa saber diferenciar esses dois conceitos.
            Substância pura: Possui apenas uma substância química - Tem composição química definida - Ex.: água destilada pura.
            Mistura: Possui duas ou mais substâncias - Pode ter proporções variáveis.
            Ex: água com sal.
            Atenção a uma pegadinha: água mineral não é, em geral, uma substância pura, pois contém água e sais minerais dissolvidos.
            Outro detalhe importante: uma substância pura pode ser simples, como o O₂, ou composta, como o H₂O. Isso depende de sua composição química, não de sua aparência.`},
        { titulo: 'Os dois tipos principais de mistura', texto: `Mistura homogênea: Apresenta apenas uma fase visível. A composição é uniforme em toda a extensão da mistura. Você não consegue distinguir visualmente suas partes.
            Exemplo: Água com sal completamente dissolvido
            Chamamos cada porção visualmente uniforme de fase. Uma mistura homogênea apresenta uma única fase e também é chamada de solução.
            Mistura heterogênea: Apresenta duas ou mais fases. É possível identificar regiões com aspectos ou composições diferentes. 
            Exemplo: Água + óleo`, tipo: 'h3'},
        { titulo: 'O que é uma fase?', texto: `Fase é cada porção visualmente uniforme de um sistema, separada de outra por uma fronteira ou interface.
            Imagine um copo com água e óleo:
            - Fase 1: óleo.
            - Fase 2: água.
            Portanto, temos uma mistura heterogênea com duas fases.`, tipo: 'h3', imagem: ['../../imagens/quimica/misturas/classificacao_800px.png', '../../imagens/quimica/misturas/classificacao_600px.png', '../../imagens/quimica/misturas/classificacao_400px.png',  '../../imagens/quimica/misturas/classificacao_200px.png', 'Imagem de mistura e substancia']},
        { titulo: 'Número de componentes × Número de fases', texto: `Esta é uma das partes mais importantes do conteúdo, porque muita gente confunde as duas coisas.
            - Componentes: quantas substâncias diferentes estão presentes.
            - Fases: quantas porções visualmente distintas existem no sistema.`, tipo: 'h3'},
        { titulo: 'E quando uma mistura tem mais de duas fases?', texto: `Considere um recipiente com água, óleo e areia.
            Temos:
            - Componentes: 3 (água, óleo e areia).
            - Fases: 3 (óleo, água e areia).
            - Classificação: mistura heterogênea.
            Se você acrescentar pedras que continuem separadas da areia, o número de fases sólidas pode aumentar, dependendo de como os materiais se apresentam. Não basta contar os ingredientes: é preciso observar as fases efetivamente existentes.`, tipo: 'h3', imagem: ['../../imagens/quimica/fases_das_misturas/fases_800px.jpg', '../../imagens/quimica/fases_das_misturas/fases_600px.jpg', '../../imagens/quimica/fases_das_misturas/fases_400px.jpg', '../../imagens/quimica/fases_das_misturas/fases_200px.jpg', 'Imagem com experimento das fases']},
        { titulo: 'Separando misturas', texto: `As substâncias de uma mistura podem ser separadas por processos físicos, aproveitando diferenças entre suas propriedades.
            Filtração -> Separa sólido de líquido ou gás -> Água + areia
            Decantação -> Separa fases pela diferença de densidade -> Água + óleo
            Evaporação -> Remove o solvente por vaporização -> Obter sal da água salgada
            Destilação simples -> Separa um líquido de um soluto não volátil -> Água + sal                Destilação fracionada -> Separa líquidos miscíveis com diferentes temperaturas de ebulição -> Componentes do petróleo, em processos industriais
            Peneiração -> Separa sólidos por tamanho das partículas -> Areia + pedras`, tipo: 'h3'},
    ],
    //Massa atômica
    MA: [
        { titulo: 'massa atômica, molecular e molar', texto: '', tipo: 'h2'},
        { titulo: 'Massa atômica (u)', texto: `A massa atômica é a massa de um átomo, expressa em uma unidade chamada unidade de massa atômica (u).
            Para entender esse conceito, você precisa primeiro saber que o átomo é formado por três partículas principais:
            - Prótons: possuem carga positiva e ficam no núcleo.
            - Nêutrons: não possuem carga elétrica e ficam no núcleo.
            - Elétrons: possuem carga negativa e ficam ao redor do núcleo.
            Prótons e nêutrons concentram praticamente toda a massa do átomo. A massa dos elétrons é muito pequena em comparação.`, tipo: 'h3'},
        { titulo: 'Como calcular uma massa aproximada?', texto: `Para os exercícios introdutórios, usamos:
            A = Z + N
            Em que:
            - A = número de massa.
            - Z = número de prótons.
            - N = número de nêutrons.
            Atenção: tecnicamente, isso é o número de massa, não a massa atômica média indicada na tabela periódica. Essa diferença é importante.`, tipo: 'h3'},
        { titulo: 'Não confunda estes três conceitos', texto: `Número atômico (Z) -> Quantidade de prótons.
            Número de massa (A) -> Prótons + nêutrons.
            Massa atômica -> Massa do átomo; na tabela, geralmente é a média dos isótopos naturais.`, tipo: 'h3'},
        { titulo: 'Massa molecular (u)', texto: `É a soma das massas atômicas de todos os átomos que formam uma molécula.
            A fórmula é simples:
            Massa molecular = soma das massas atômicas
            Exemplo 1 — Água (H₂O)
            Sabemos que:
            - H = 1 u
            - O = 16 u
            A molécula de água possui dois átomos de hidrogênio e um de oxigênio.
            H₂O = 2 . (1)+16
            H₂O = 18u`, tipo: 'h3'},
        { titulo: 'Massa molar (g/mol)', texto: `A massa molar é a massa de 1 mol de uma substância. Sua unidade é o grama por mol, representada por g/mol.
            Lembre-se: 1 mol corresponde a aproximadamente 6,022 . 10^23 entidades elementares (átomos, moléculas ou íons).
            Por exemplo, a massa molecular da água é 18 u. Já a massa molar da água é aproximadamente 18 g/mol.
            Isso significa que 1 mol de água tem massa de aproximadamente 18 gramas.
            Atenção: 1 Mol = 1 molécula = 6 . 10^23. 2 Mol = 2 Moléculas = 12 . 10^23`, tipo: 'h3'},
    ],
        //Fórmulas Químicas
    FQ: [
        { titulo: 'fórmulas químicas', texto: 'As fórmulas químicas são uma forma de representar as substâncias usando símbolos dos elementos químicos e números. Elas mostram quais elementos estão presentes e, dependendo do tipo de fórmula, a quantidade ou a proporção entre seus átomos.', tipo: 'h2'},
        { titulo: 'Como ler', texto: `H₂O -> Água
            H -> Hidrogênio (2 átomos)
            O -> Oxigênio (1 átomo)
            - H é o símbolo do hidrogênio.
            - O é o símbolo do oxigênio.
            - O número pequeno abaixo, chamado índice, indica quantos átomos daquele elemento existem na fórmula.
            - Quando não aparece um índice, entendemos que ele é igual a 1.
            Portanto, H₂O representa dois átomos de hidrogênio e um de oxigênio por molécula.`, tipo: 'h3'},
        { titulo: 'Índice x Coeficiente', texto: `Compare:
            H₂O -> Índice (número pequeno) -> Indica a quantidade de átomos do elemento na fórmula. -> H₂O = 2 H e 1 O.
            3 H₂O -> Coeficiente (número grande antes) -> Indica quantas moléculas ou unidades da fórmula estão sendo consideradas -> 3 H₂O = 6 H e 3 O, totalizando 9 átomos.
            A regra é: o coeficiente multiplica todos os índices da fórmula.`, tipo: 'h3'},
        { titulo: 'Parênteses', texto: `Os parênteses agrupam átomos. O índice que aparece depois deles multiplica tudo o que está dentro.
            Exemplo:
            Ca(OH)₂
            Essa fórmula contém:
            - Ca: 1 átomo de cálcio.
            - O: 1x2 = 2 átomos de oxigênio.
            - H: 1x2 = 2 átomos de hidrogênio.
            Total: 5 átomos por unidade da fórmula.
            Se houver um coeficiente também, você multiplica o resultado inteiro por ele. Por exemplo, 3Ca(OH)₂ contém 3 Ca, 6 O e 6 H.`, tipo: 'h3'},
        { titulo: 'Fórmula empírica (minima)', texto: `A fórmula empírica representa a menor proporção inteira possível entre os átomos dos elementos presentes em uma substância.
            Em outras palavras, ela mostra a proporção entre os elementos, e não necessariamente a quantidade real de átomos em uma molécula.
            Exemplo:
            C6H12O6
            Os índices são 6, 12 e 6. Todos podem ser divididos por 6:
            C₆H₁₂O₆= CH₂O
            Portanto:
            - Fórmula molecular: C₆H₁₂O₆
            - Fórmula empírica: CH₂O`, tipo: 'h3'},
    ],
    //Príncipios de Avogado
    PA: [
        { titulo: 'princípios de avogadro', texto: 'O princípio de Avogadro é fundamental para entender a relação entre gases, volume, quantidade de matéria e número de partículas.', tipo: 'h2'},
        { titulo: 'Qual sua tese?', texto: `O princípio de Avogadro afirma que:
            Volumes iguais de gases diferentes, nas mesmas condições de temperatura e pressão, contêm o mesmo número de partículas.
            Imagine dois recipientes do mesmo tamanho, à mesma temperatura e pressão: um contém gás oxigênio (O₂) e o outro contém gás hidrogênio (H₂).
            Se ambos ocupam 2 litros, eles contêm o mesmo número de moléculas, desde que os gases se comportem idealmente.`, tipo: 'h3'},
        { titulo: 'Fórmula', texto: `Em temperatura e pressão constantes, o volume de um gás é diretamente proporcional à quantidade de matéria:
            V₁n₁ = V₂n₂
            Em que:
            - V₁ e n₂: volumes dos gases.
            - n₁ e n₂: quantidades de matéria, medidas em mol.
            Isso significa que, se você dobrar a quantidade de mols de um gás, o volume também dobrará, desde que a temperatura e a pressão permaneçam constantes.`, tipo: 'h3'},
        { titulo: 'O número de Avogadro', texto: `Existe outro conceito importante associado a Avogadro: a constante de Avogadro.
            N = 6,022 . 10^23 . mol^-1 (^ = elevado)
            Esse número indica quantas entidades elementares existem em 1 mol.
            Por exemplo:
            - 1 mol de moléculas de água contém 6,022 . 10^23 moléculas de água.
            - 1 mol de átomos de ferro contém 6,022 . 10^23 átomos de ferro.
            Não confunda: o princípio de Avogadro relaciona volume e quantidade de gás; a constante de Avogadro relaciona mol e número de partículas.`, tipo: 'h3'},
        { titulo: 'Para balncear equação', texto: `H₂ + O₂ -> H₂O
            Passo 1 — Balanceie o oxigênio.
            À esquerda há 2 átomos de oxigênio; à direita, 1.
            Colocamos o coeficiente 2 na água:
            H₂ + O₂ -> 2H₂O
            Agora temos 2 oxigênios de cada lado, mas precisamos conferir o hidrogênio.
            Passo 2 — Balanceie o hidrogênio.
            À direita, existem 2 . 2 = 4 átomos de hidrogênio. À esquerda, temos apenas 2.
            Colocamos o coeficiente 2 no H₂:
            2H₂ + O₂ -> 2H₂O, tipo: 'h1'
            Passo 3 — Confira os dois lados.
            Elemento	Reagentes	Produtos
            H - 4 = 4
            O - 2 = 2
            Os números são iguais. Portanto, a equação está balanceada.`, tipo: 'h3'},
    ],
    //Leis Ponderais
    LP: [
        { titulo: 'leis ponderais', texto: `As Leis Ponderais são leis da Química que descrevem as relações entre as massas das substâncias durante as reações químicas.`, tipo: 'h2'},
        { titulo: 'Lei de Lavoisier — Conservação das Massas', texto: `Na natureza, nada se cria, nada se perde, tudo se transforma.”
        Em uma reação química realizada em sistema fechado, a massa total dos reagentes é igual à massa total dos produtos.
        mreagentes = mproduto
        Exemplo:
        12g de carbono + 32g de oxigênio = 44g de gás carbônico
        A massa total antes da reação é:
        12 + 32 = 44g
        Logo, a massa se conserva.`, tipo: 'h3'},
        { titulo: 'Lei de Proust — Proporções Definidas', texto: `Uma substância composta é formada por elementos que se combinam sempre em uma proporção fixa de massas, independentemente da quantidade da substância.
            Exemplo: água (H₂O)
            A água apresenta a proporção de massa:
            H : O = 1 : 8
            Ou seja, para cada 1g de hidrogênio, são necessários 8g de oxigênio.
            Hidrogênio	Oxigênio	Água formada
            1g + 8g = 9 g
            2g + 16g = 18g
            3g + 24g = 27 g
        A proporção permanece constante.`, tipo: 'h3'},
        { titulo: 'Lei de Dalton — Proporções Múltiplas', texto: `Quando dois elementos formam mais de um composto, mantendo fixa a massa de um deles, as massas do outro elemento que se combinam com ela apresentam uma relação de números inteiros pequenos.
        Exemplo: carbono e oxigênio
        - Monóxido de carbono (CO): 12 g de carbono combinam com 16 g de oxigênio.
        - Dióxido de carbono (CO₂): 12 g de carbono combinam com 32 g de oxigênio.
        Comparando as massas de oxigênio:
        32 : 16 = 2
        A proporção é:
        16 : 32 = 1 : 2
        Portanto, para a mesma massa de carbono, as massas de oxigênio estão em uma proporção de números inteiros pequenos.`, tipo: 'h3'}, 
    ],
    //Calculo Estequiométrico
    CE: [
            { titulo: 'cálculo estequiométrico', texto: `O cálculo estequiométrico permite calcular as quantidades de reagentes consumidos e produtos formados em uma reação química.
            Ele se baseia principalmente em três ideias:
            - A equação química precisa estar balanceada.
            - Os coeficientes indicam a proporção entre as substâncias.
            - A quantidade de uma substância pode ser relacionada à quantidade de outra.`, tipo: 'h2'},
            { titulo: 'Proporção entre os coeficientes', texto: `Considere a formação da água:
            2H₂+O₂ -> 2H₂O
            A proporção é:
            2:1:2
            Isso significa que:
            - 2 mol de H₂ reagesm com 1 mol de O₂.
            - São formados 2 mol de H₂O.
            Atenção: os coeficientes indicam proporções em mol, não diretamente em gramas.`, tipo: 'h3'},
            { titulo: 'Relação entre mol e massa', texto: `Para converter mol em massa, usamos:
            m = n . M
            Em que:
            - m = massa, em gramas (g)
            - n = quantidade de matéria, em mol
            - M = massa molar, em g/mol
            Exemplo
            Quantos gramas de água são formados a partir de 4 g de hidrogênio, considerando oxigênio em excesso?
            Equação balanceada:
            2H₂ + O₂ -> 2H₂O
            Massas molares:
            M(H₂) = 2g/mol
            M(H₂O) = 18g/mol
            A proporção da equação é 2 mol de H₂ para 2 mol de H₂O.
            Convertendo para massa:
            4g H₂ -> xg H₂O
            4 : 2 = x : 18
            x = 36g
            Resposta: são formados 36 g de água.`, tipo: 'h3'},
            { titulo: 'Passo a passo para resolver exercícios', texto: `1. Escreva a equação química.
            2. Balanceie a equação.
            3. Identifique os dados fornecidos e o que o exercício pede.
            4. Converta as massas em mol, se necessário.
            5. Use a proporção dos coeficientes.
            6. Converta o resultado para a unidade solicitada
            Regra fundamental: nunca faça o cálculo estequiométrico usando uma equação que não esteja balanceada.`, tipo: 'h3'},
            { titulo: 'Reagente limitante', texto: `Quando dois ou mais reagentes são fornecidos em quantidades determinadas, pode acontecer de um deles acabar primeiro.
            O reagente limitante é aquele que acaba primeiro e determina a quantidade máxima de produto formado.
            O reagente que sobra é chamado de reagente em excesso.`, tipo: 'h3'},
            { titulo: 'Rendimento da reação', texto: `Nem sempre a quantidade de produto obtida na prática é igual à quantidade calculada teoricamente.
            O rendimento percentual é:
            Rendimento = quantidade real : quantidade teórica . 100
            Exemplo: se uma reação deveria formar 50 g de produto, mas formou 40 g:
            40 : 50 . 100 = 80%
            O rendimento da reação foi de 80%.`, tipo: 'h3'},
    ],
    //Propriedades dos Gases
    PG: [
            { titulo: 'propriedades dos gases', texto: `Os gases são estados físicos da matéria que não possuem forma nem volume próprios. Suas partículas ficam muito afastadas umas das outras e se movimentam constantemente.`, tipo: 'h2'},
            { titulo: 'Principais propriedades dos gases', texto: `Compressibilidade: podem ter seu volume reduzido quando submetidos à pressão.
            Expansibilidade: ocupam todo o volume disponível no recipiente.
            Difusão: misturam-se espontaneamente com outros gases.
            Efusão: passam por um pequeno orifício de um recipiente para outro ambiente.
            Baixa densidade: geralmente apresentam densidade menor que líquidos e sólidos.
            Pressão: resulta das colisões das partículas contra as paredes do recipiente.`, tipo: 'h3'},
            { titulo: 'Variáveis de estado', texto: `O comportamento de um gás pode ser descrito por quatro grandezas:
            Pressão	- P -> 1atm
            Volume - V -> L
            Temperatura	- T -> K
            Quantidade de matéria - n -> mol

            Atenção: em cálculos envolvendo gases, a temperatura deve estar em Kelvin.
            T(K) = T(°C) + 273
            Exemplo:
            25°C + 273 = 298K`, tipo: 'h3'},
            { titulo: 'Transformações gasosas', texto: `As transformações gasosas descrevem como pressão, volume e temperatura variam.
            Transformação isotérmica — Lei de Boyle
            A temperatura permanece constante.
            P₁V₁ = P₂V₂
            Pressão e volume são inversamente proporcionais.
            - Se a pressão aumenta, o volume diminui.
            - Se a pressão diminui, o volume aumenta.
            Transformação isobárica — Lei de Charles
            A pressão permanece constante.
            V₁ : T₁ = V₂ : T₂
            Volume e temperatura absoluta são diretamente proporcionais.
            - Se a temperatura aumenta, o volume aumenta.
            - Se a temperatura diminui, o volume diminui.
            Transformação isocórica ou isovolumétrica — Lei de Gay-Lussac
            O volume permanece constante.
            P₁ : T₁ = P₂ : T₂
            Pressão e temperatura absoluta são diretamente proporcionais.
            - Se a temperatura aumenta, a pressão aumenta.
            - Se a temperatura diminui, a pressão diminui.`, tipo: 'h3'},
            { titulo: 'Equação geral dos gases', texto: `Relaciona pressão, volume e temperatura de uma quantidade fixa de gás:
            P₁V₁ : T₁ = P₂V₂ : T₂
            É utilizada quando as três variáveis podem mudar de uma condição inicial para uma condição final.`, tipo: 'h3'},
            { titulo: 'Teoria cinética dos gases', texto: `A teoria cinética explica o comportamento dos gases a partir do movimento de suas partículas.
            Suas principais ideias são:
            1. As partículas estão em movimento contínuo e aleatório.
            2. O volume das partículas é desprezível em relação ao volume do recipiente, no modelo ideal.
            3. As colisões entre partículas e paredes são consideradas elásticas.
            4. A pressão resulta das colisões contra as paredes do recipiente.
            5. A energia cinética média das partículas depende da temperatura absoluta.
            Quanto maior a temperatura, maior a energia cinética média das partículas.`, tipo: 'h3'},
    ],
    //Transformações Gasosas
    TG: [
        { titulo: 'transformações gasosas', texto: `As transformações gasosas são mudanças nas condições de um gás, envolvendo pressão (P), volume (V) e temperatura (T).
            Para uma quantidade fixa de gás, quando uma variável muda, outra pode mudar também. As transformações são classificadas de acordo com a grandeza que permanece constante.
            Importante: use sempre a temperatura em Kelvin nos cálculos.
            T(K) = T(°C) + 273`, tipo: 'h2'},
        { titulo: 'Transformação isotérmica — Lei de Boyle', texto: `A temperatura permanece constante.
            P₁V₁=P₂V₂
            Pressão e volume são inversamente proporcionais:
            - Aumenta a pressão → diminui o volume.
            - Diminui a pressão → aumenta o volume.
            Exemplo: um gás ocupa 6 L sob pressão de 2 atm. Se a pressão aumentar para 3 atm, qual será o novo volume?
            2 . 6 = 3 . V₂
            V₂ = 12 : 3 = 4L`, tipo: 'h3', imagem: ['../../imagens/quimica/transformacoaes_gasosas/boyle_800px.jpg', '../../imagens/quimica/transformacoaes_gasosas/boyle_600px.jpg', '../../imagens/quimica/transformacoaes_gasosas/boyle_400px.jpg', '../../imagens/quimica/transformacoaes_gasosas/boyle_200px.jpg', 'Demonstração de Boyle']},
        { titulo: 'Transformação isobárica — Lei de Charles', texto: `A pressão permanece constante.
            V₁ : T₁ = V₂ : T₂
            Volume e temperatura absoluta são diretamente proporcionais:
            - Aumenta a temperatura → aumenta o volume.
            - Diminui a temperatura → diminui o volume.
            Exemplo: um gás ocupa 4L a 300K. Se sua temperatura subir para 450 K, mantendo a pressão constante:
            4 : 300= V₂ : 450
            V₂ = 4 . 450 : 300= 6L`, tipo: 'h3', imagem: ['../../imagens/quimica/transformacoaes_gasosas/charles_800px.jpg', '../../imagens/quimica/transformacoaes_gasosas/charles_600px.jpg', '../../imagens/quimica/transformacoaes_gasosas/charles_400px.jpg', '../../imagens/quimica/transformacoaes_gasosas/charles_200px.jpg', 'Demonstração de Charles']},
        { titulo: 'Transformação isocórica — Lei de Gay-Lussac', texto: `volume permanece constante.
            P₁ : T₁ = P₂ : T₂
            Pressão e temperatura absoluta são diretamente proporcionais:
            - Aumenta a temperatura → aumenta a pressão.
            - Diminui a temperatura → diminui a pressão.
            Exemplo: um gás está a 2atm e 300K. Se a temperatura aumentar para 600K, mantendo o volume constante:
            2 : 300 = P₂ : 600
            P₂ = 2 . 600 : 300 = 4atm`, tipo: 'h3', imagem: ['../../imagens/quimica/transformacoaes_gasosas/lussac_800px.jpg', '../../imagens/quimica/transformacoaes_gasosas/lussac_600px.jpg', '../../imagens/quimica/transformacoaes_gasosas/lussac_400px.jpg', '../../imagens/quimica/transformacoaes_gasosas/lussac_200px.jpg', 'Demontração Gay-Lussac']}, 
    ],
    //Equação Geral dos Gases
    EG: [
        { titulo: 'equação  geral dos gases', texto: `A Equação Geral dos Gases relaciona pressão, volume e temperatura de uma quantidade fixa de gás, comparando duas situações: estado inicial e estado final.
            Ela é utilizada quando pressão, volume e temperatura podem variar ao mesmo tempo.`, tipo: 'h2'},
        { titulo: 'Fórmula', texto: `P₁V₁ : T₁= P₂V₂ : T₂
            Em que:
            - P₁ = pressão inicial
            - V₁ = volume inicial
            - T₁ = temperatura inicial
            - P₂ = pressão final
            - V₂ = volume final
            - T₂ = temperatura final
            A quantidade de gás deve permanecer constante.
            Atenção: a temperatura deve estar em Kelvin.
            T(K) = T(°C) + 273`, tipo: 'h3'},
        { titulo: 'Equação de Clapeyron — Gás ideal', texto: `A equação de Clapeyron relaciona pressão, volume, temperatura e quantidade de matéria:
            PV = nRT
            Em que:
            - P = pressão
            - V = volume
            - n = quantidade de matéria
            - R = constante universal dos gases
            - T = temperatura em Kelvin
            Uma constante frequentemente usada é:
            R=0,082 . L . atm : mol . K`, tipo: 'h3'},
    ],
    //Misturas Gasosas
    MG: [
        { titulo: 'misturas gasosas', texto: `As misturas gasosas são combinações de dois ou mais gases que ocupam o mesmo recipiente. Em geral, seus componentes se misturam uniformemente, formando uma mistura homogênea.
            O ar atmosférico é um exemplo: contém principalmente nitrogênio e oxigênio, além de outros gases.
            Para estudar misturas gasosas, usamos principalmente as leis de Dalton e de Amagat, além das relações entre pressão, volume e quantidade de matéria.`, tipo: 'h2'},
        { titulo: 'Lei de Dalton — Pressões Parciais', texto: `A pressão total de uma mistura gasosa é igual à soma das pressões parciais de cada gás.
            total = P₁ + P₂ + P₃ + ...
            A pressão parcial é a pressão que cada gás exerceria se estivesse sozinho no recipiente, ocupando o mesmo volume e estando na mesma temperatura.
            Exemplo
            Um recipiente contém três gases com as seguintes pressões parciais:
            - Nitrogênio: 2 atm
            - Oxigênio: 0,5 atm
            - Argônio: 0,2 atm
            A pressão total será:
            Ptotal = 2 + 0,5 + 0,2
            Ptotal = 2,7atm`, tipo: 'h3'},
        { titulo: 'Fração molar', texto: `A fração molar representa a proporção de mols de um gás em relação ao número total de mols da mistura.
            Xi= ni : ntotal
            Em que:
            - Xi = fração molar do gás
            - ni = quantidade de mols do gás
            - ntotal = quantidade total de mols da mistura
            A soma das frações molares de todos os gases é igual a 1:
            X₁ + X₂ + X₃ + = 1
            Relação entre fração molar e pressão parcial
            Pi = Xi Ptotal`, tipo: 'h3'},
        { titulo: 'Lei de Amagat — Volumes Parciais', texto: `A Lei de Amagat estabelece que o volume total de uma mistura gasosa é igual à soma dos volumes parciais de seus componentes.
            Vtotal= V₁ + V₂ + V₃ + ...
            O volume parcial é o volume que cada gás ocuparia sozinho, na mesma temperatura e pressão da mistura.
            Para gases ideais, a fração volumétrica é igual à fração molar:
            Vi : Vtotal = Xi`, tipo: 'h3'},
        { titulo: 'Massa molar média da mistura', texto: `Exemplo
            Uma mistura possui:
            - 50% de gás A, com massa molar de 20g/mol.
            - 50% de gás B, com massa molar de 40g/mol.
            Mmédia = 0,5 . 20 + 0,5 . 40
            Mmédia = 30g/mol`, tipo: 'h3'},
    ],
    //Introdução à Radioatividade
    IR: [
        { titulo: 'introdução à radioatividade', texto: `A radioatividade é o fenômeno em que núcleos atômicos instáveis emitem partículas ou energia para alcançar uma configuração mais estável.
            Esse processo ocorre naturalmente em alguns elementos químicos e também pode ser provocado artificialmente.
            A radioatividade está relacionada às transformações que acontecem no núcleo do átomo, diferentemente das reações químicas comuns, que envolvem principalmente a eletrosfera.`, tipo: 'h2'},
        { titulo: 'Estabilidade nuclear', texto: `O núcleo de um átomo é formado por:
            - Prótons: partículas com carga positiva.
            - Nêutrons: partículas sem carga elétrica.
            Alguns núcleos apresentam uma combinação instável de prótons e nêutrons. Para alcançar maior estabilidade, podem emitir radiação.
            Esse processo é chamado de decaimento radioativo.`, tipo: 'h3'},
        { titulo: 'Tipos de radiação', texto: `Existem três tipos clássicos de radiação estudados na radioatividade:
            Radiação alfa (α)
            - Formada por 2 prótons e 2 nêutrons.
            - Carga elétrica: +2.
            - Baixo poder de penetração.
            - Alto poder de ionização.
            - Pode ser representada por ²He₄.

            Radiação beta (β)
            Na emissão beta negativa (β⁻):
            - Um nêutron transforma-se em próton.
            - Há emissão de um elétron.
            - Carga elétrica: −1.
            - Poder de penetração intermediário.

            Radiação gama (γ)
            - É uma onda eletromagnética.
            - Não possui massa nem carga elétrica.
            - Alto poder de penetração.
            - Geralmente acompanha outras emissões radioativas.`, tipo: 'h3'},
        { titulo: 'Comparação entre as radiações', texto: ``, tipo: 'h3'},
        { titulo: '', texto: `Ordem de poder de penetração:
            alpha < beta < gamma

            Ordem de poder de ionização:
            alpha > beta > gamma`, tipo: 'h3'},
        { titulo: 'Emissões radioativas e alterações no núcleo', texto: `As emissões radioativas podem alterar o número atômico (Z) e o número de massa (A).
            Emissão alfa
            O núcleo perde 2 prótons e 2 nêutrons.
            ⁶X₁₂ -> ⁶⁻²Y₁₂₋₄ + ²α₄
            Consequências:
            - Número de massa diminui 4 unidades.
            - Número atômico diminui 2 unidades.

            Emissão beta negativa (β⁻)
            Um nêutron transforma-se em próton, emitindo um elétron.
            ⁶X₁₂ -> ⁶⁻¹X₁₂ + ⁻¹β₀
            Consequências:
            - Número de massa permanece igual.
            - Número atômico aumenta 1 unidade.

            Emissão gama
            O núcleo libera energia na forma de radiação eletromagnética.
            ⁶X₁₂ -> ⁶X₁₂ + ₀

            Consequências:
            - Número de massa não muda.
            - Número atômico não muda.
            - O núcleo perde energia.
            5. Radioatividade natural e artificial
            Radioatividade natural: ocorre espontaneamente em núcleos instáveis encontrados na natureza.

            Exemplos:
            - Urânio-238.
            - Tório-232.
            - Rádio-226.
            Radioatividade artificial: ocorre quando núcleos são transformados por processos provocados artificialmente, como determinadas reações nucleares.

            Suas aplicações incluem:
            - Medicina nuclear.
            - Produção de radioisótopos.
            - Pesquisas científicas.
            - Indústria.`, tipo: 'h3'},
        { titulo: 'Radioatividade natural e artificial', texto: `Radioatividade natural: ocorre espontaneamente em núcleos instáveis encontrados na natureza.
            Exemplos:
            - Urânio-238.
            - Tório-232.
            - Rádio-226.

            Radioatividade artificial: ocorre quando núcleos são transformados por processos provocados artificialmente, como determinadas reações nucleares.
            Suas aplicações incluem:
            - Medicina nuclear.
            - Produção de radioisótopos.
            - Pesquisas científicas.
            - Indústria.`, tipo: 'h3'},
        { titulo: 'Macete', texto: `Alfa: perde 2 prótons e 2 nêutrons.
            Beta negativa: ganha 1 próton no núcleo pela transformação de um nêutron.
            Gama: libera energia, sem alterar A ou Z.`, tipo: 'h3'},
    ],
    //Decaimentos Radioativos
    DC: [
        { titulo: 'decaimentos radioativos', texto: `O decaimento radioativo é o processo espontâneo pelo qual um núcleo atômico instável emite partículas ou energia para se tornar mais estável. Durante esse processo, o núcleo original se transforma em outro núcleo, que pode pertencer ao mesmo elemento ou a um elemento químico diferente.
            A radioatividade é um fenômeno nuclear: envolve alterações no núcleo do átomo, e não na eletrosfera.`, tipo: 'h2'},
        { titulo: 'O que provoca o decaimento radioativo?', texto: `Alguns átomos possuem núcleos instáveis devido à proporção entre prótons e nêutrons ou ao excesso de energia nuclear.
            Para alcançar uma configuração mais estável, esses núcleos podem emitir:
            - Partículas alfa (α);
            - Partículas beta (β);
            - Radiação gama (γ).
            Cada tipo de emissão provoca alterações diferentes no núcleo.`, tipo: 'h3'},
        { titulo: 'Decaimento alfa (α)', texto: `Ocorre quando um núcleo instável emite uma partícula alfa, formada por dois prótons e dois nêutrons — equivalente ao núcleo de um átomo de hélio.
            Características:
            - O número de massa diminui em 4 unidades.
            - O número atômico diminui em 2 unidades.
            - A partícula emitida possui carga +2.
            Representação geral:
            ⁹²X₂₃₈ -> ⁹²⁻²Y₂₃₈₋₄ + ²α₄

            Exemplo:
            ⁹²U₂₃₈ -> ⁹⁰Th₂₃⁴ + ²α₄
            O urânio-238 transforma-se em tório-234 ao emitir uma partícula alfa.`, tipo: 'h3'},
        { titulo: 'Decaimento beta (β)', texto: `O decaimento beta ocorre quando há uma transformação entre partículas do núcleo, alterando o número de prótons e nêutrons.
            Existem dois tipos principais:
            Beta menos (β⁻)
            Acontece quando um nêutron se transforma em um próton, emitindo um elétron (partícula beta negativa) e um antineutrino.
            Características:
            - O número de massa permanece igual.
            - O número atômico aumenta em 1 unidade.
            - A partícula emitida possui carga -1.
            Representação simplificada:
            ⁶X₁₄ -> ⁶⁺¹Y₁₄ + ⁻¹β₀
            Exemplo:
            ⁶C₁₄ -> ⁷N₁₄ + ⁻¹β₀
            O carbono-14 transforma-se em nitrogênio-14.

            Beta mais (β⁺)
            Acontece quando um próton se transforma em um nêutron, emitindo um pósitron (partícula com a mesma massa do elétron, mas carga positiva) e um neutrino.
            Características:
            - O número de massa permanece igual.
            - O número atômico diminui em 1 unidade.
            - A partícula emitida possui carga +1.
            Representação simplificada:
            ⁶X₁₄ -> ⁶⁻¹Y₁₄ + ⁻¹β₀`, tipo: 'h3'},
        { titulo: 'Emissão gama (γ)', texto: `A emissão gama ocorre quando um núcleo, após uma transformação nuclear ou por estar em estado excitado, libera energia na forma de radiação eletromagnética.
            Diferentemente das emissões alfa e beta, a radiação gama não é uma partícula com massa: é um fóton de alta energia.
            Características:
            - Não altera o número de massa.
            - Não altera o número atômico.
            - Não possui carga elétrica.
            - Apresenta alto poder de penetração.
            Representação geral:
            ⁶X*️₁₄ -> ⁶X*₁₄ + γ
            O asterisco indica que o núcleo está em estado agitado.`, tipo: 'h3'},
        { titulo: 'Leis da conservação nos decaimentos', texto: `Nas equações nucleares, devem ser conservados:
            - Número de massa (A): a soma dos números de massa antes e depois da reação deve ser igual.
            - Número atômico (Z): a soma das cargas nucleares deve permanecer igual.
            Por exemplo:
            ⁹²X₂₃₈ -> ⁹²⁻²Y₂₃₈₋₄ + ²α₄

            Conferindo:
            - Massa: 238 = 234 + 4
            - Número atômico: 92 = 90 + 2
            As duas conservações são respeitadas.`, tipo: 'h3'},
    ],
    //Reações Nucleares
    RN: [
        { titulo: 'reações nucleares', texto: `As reações nucleares são processos nos quais os núcleos dos átomos sofrem transformações, podendo liberar ou absorver grandes quantidades de energia.
            Diferentemente das reações químicas, que envolvem principalmente alterações na eletrosfera e nas ligações entre átomos, as reações nucleares modificam a estrutura dos núcleos atômicos.`, tipo: 'h2'},
        { titulo: 'O que acontece em uma reação nuclear?', texto: `Durante uma reação nuclear, um núcleo pode:
            - Absorver partículas;
            - Emitir partículas;
            - Transformar-se em outro núcleo;
            - Liberar ou absorver energia.
            Essas transformações podem alterar o número de prótons, nêutrons e a identidade do elemento químico.`, tipo: 'h3'},
        { titulo: 'Fissão nuclear', texto: `A fissão nuclear acontece quando um núcleo atômico pesado se divide em dois ou mais núcleos menores, liberando energia e, geralmente, nêutrons.
            Um exemplo é a fissão do urânio-235, que pode ocorrer após a absorção de um nêutron.
            Características:
            - Divide núcleos pesados;
            - Libera grande quantidade de energia;
            - Geralmente libera nêutrons;
            - Pode dar origem a uma reação em cadeia.
            Aplicações: geração de eletricidade em usinas nucleares e pesquisas científicas.`, tipo: 'h3', imagem: ['../../imagens/quimica/reacoes_nucleares/fissao_nuclear_800px.jpg', '../../imagens/quimica/reacoes_nucleares/fissao_nuclear_600px.jpg', '../../imagens/quimica/reacoes_nucleares/fissao_nuclear_400px.jpg', '../../imagens/quimica/reacoes_nucleares/fissao_nuclear_200px.jpg', 'Como ocorre a fissão nuclear'] },
        { titulo: 'Fusão nuclear', texto: `A fusão nuclear ocorre quando dois núcleos atômicos leves se unem, formando um núcleo mais pesado e liberando energia.
            Esse processo acontece naturalmente no interior das estrelas, incluindo o Sol.
            Características:
            - Une núcleos leves;
            - Libera grande quantidade de energia;
            - Exige temperaturas e condições extremas para ocorrer;
            - É responsável pela energia produzida pelas estrelas.
            Aplicações: pesquisas para geração de energia e estudos sobre o funcionamento das estrelas.`, tipo: 'h3', imagem: ['../../imagens/quimica/reacoes_nucleares/fussao_nuclear_800px.jpg', '../../imagens/quimica/reacoes_nucleares/fussao_nuclear_600px.jpg', '../../imagens/quimica/reacoes_nucleares/fussao_nuclear_400px.jpg', '../../imagens/quimica/reacoes_nucleares/fussao_nuclear_200px.jpg', 'Imagem de Fusão Nuclear']},
        { titulo: 'Diferenças entre fissão e fusão nuclear', texto: `Fissão -> Divisão de núcleos - Geralmente pesados - Libera energia - Pode ocorrer em certos materiais radioativos - Usinas nucleares
            Fusão -> União de núcleos - Geralmente leves - Libera energia - Ocorre nas estrelas - Pesquisa energética`, tipo: 'h3'},
        { titulo: 'Reações nucleares naturais e artificiais', texto: `As reações nucleares podem ser classificadas de acordo com sua origem.
            Naturais: acontecem espontaneamente na natureza, como determinados decaimentos radioativos e processos de fusão no interior das estrelas.
            Artificiais: são provocadas por seres humanos, geralmente por meio do bombardeamento de núcleos com partículas, produzindo transformações nucleares.
            Um exemplo é a produção artificial de determinados radioisótopos utilizados na medicina.`, tipo: 'h3'},
        { titulo: 'Energia nuclear', texto: `A energia liberada em reações nucleares está relacionada à transformação de massa em energia, explicada pela equação de Einstein:
            E = mc²
            Onde:
            - E = energia;
            - m = massa convertida em energia;
            - c = velocidade da luz no vácuo.
            Uma pequena diferença de massa entre os reagentes e os produtos pode corresponder a uma quantidade muito grande de energia.`, tipo: 'h3'},
    ],
    //Introdução às Soluções
    IS: [
        { titulo: 'introdução às soluções', texto: `Em Química, uma solução é uma mistura homogênea formada por duas ou mais substâncias. Ela apresenta apenas uma fase visível e possui composição uniforme em toda a sua extensão.
            As soluções estão presentes em diversas situações do cotidiano, como água com sal, água com açúcar, ar atmosférico e ligas metálicas.`, tipo: 'h2'},
        { titulo: 'Componentes de uma solução', texto: `Uma solução é formada por dois componentes principais:
            Soluto: substância que é dissolvida em outra. Geralmente, está presente em menor quantidade.
            Solvente: substância responsável por dissolver o soluto. Geralmente, está presente em maior quantidade.
            Exemplo: água com sal
            - Soluto: sal (cloreto de sódio – NaCl).
            - Solvente: água (H₂O).
            - Solução: água salgada.
            Importante: a definição de soluto e solvente não depende exclusivamente da quantidade. Em alguns casos, as propriedades e o estado físico dos componentes também ajudam a identificá-los.`, tipo: 'h3'},
        { titulo: 'Classificação das soluções quanto ao estado físico', texto: `As soluções podem ser classificadas de acordo com seu estado físico:
            Soluções líquidas
            Apresentam estado físico líquido.
            Exemplo: água com sal e álcool misturado à água.

            Soluções gasosas
            Apresentam estado físico gasoso.
            Exemplo: ar atmosférico, formado por uma mistura homogênea de gases.

            Soluções sólidas
            Apresentam estado físico sólido.
            Exemplo: latão, uma liga metálica formada principalmente por cobre e zinco.`, tipo: 'h3'},
        { titulo: 'Classificação quanto à quantidade de soluto', texto: `As soluções também podem ser classificadas de acordo com a quantidade de soluto dissolvida em determinada quantidade de solvente, considerando uma temperatura específica.
            Solução insaturada
            É aquela que apresenta quantidade de soluto inferior ao limite máximo de dissolução.
            Ainda é possível dissolver mais soluto sem que haja excesso depositado no fundo.
            Solução saturada
            É aquela que contém a quantidade máxima de soluto que pode ser dissolvida em determinada quantidade de solvente, em uma temperatura específica.
            Se mais soluto for adicionado, o excesso não será dissolvido e poderá ficar depositado no fundo.
            Solução supersaturada
            É aquela que apresenta quantidade de soluto dissolvida superior ao limite de solubilidade em determinada temperatura.
            É uma condição instável: alterações no sistema, como a adição de um pequeno cristal do soluto, podem provocar a cristalização do excesso.`, tipo: 'h3'},
        { titulo: 'Coeficiente de solubilidade', texto: `O coeficiente de solubilidade representa a quantidade máxima de soluto que consegue se dissolver em determinada quantidade de solvente, em uma temperatura e pressão especificadas.
            Geralmente, é expresso em gramas de soluto para cada 100 g de solvente.
            Exemplo:
            Imagine que a solubilidade de uma substância seja de 36 g para cada 100 g de água a 20 °C.
            Isso significa que:
            - 36 g de soluto podem ser dissolvidos em 100 g de água;
            - Quantidades menores podem formar soluções insaturadas;
            - Uma quantidade superior pode deixar excesso de soluto sem dissolver, em condições de equilíbrio.`, tipo: 'h3'},
        { titulo: 'Curvas de solubilidade', texto: `As curvas de solubilidade são gráficos que mostram como a solubilidade de uma substância varia conforme a temperatura.
            De modo geral:
            - Curva crescente: a solubilidade aumenta com a temperatura.
            - Curva decrescente: a solubilidade diminui com a temperatura.
            - Curva pouco inclinada: a solubilidade varia pouco com a temperatura.
            A maioria dos sólidos apresenta aumento da solubilidade com a elevação da temperatura, enquanto muitos gases apresentam comportamento contrário.`, tipo: 'h3'},
        { titulo: 'Diferença entre solução, coloide e suspensão', texto: `Nem toda mistura que parece uniforme é uma solução verdadeira.
            Solução	-> Homogênea (uma fase). Ex: Água com sal dissolvido
            Coloide	-> Partículas dispersas de tamanho intermediário. Ex: Leite e gelatina
            Suspensão -> Partículas maiores, que podem sedimentar. Ex: Água com areia`, tipo: 'h3'},
    ],
    //Concentração de Soluções
    CS: [
        { titulo: 'concentração de soluções', texto: `A concentração de uma solução indica a quantidade de soluto presente em determinada quantidade de solução ou de solvente.
            Ela permite identificar se uma solução é mais concentrada ou mais diluída, sendo fundamental em cálculos químicos, laboratórios, indústrias e na preparação de medicamentos.`, tipo: 'h2'},
        { titulo: 'Concentração comum (C)', texto: `A concentração comum representa a massa de soluto dissolvida em determinado volume de solução.
            Sua unidade mais utilizada é gramas por litro (g/L).
            Fórmula:
            C = m / V
            Onde:
            - C = concentração comum (g/L);
            - m = massa do soluto (g);
            - V = volume da solução (L).

            Exemplo:
            Uma solução foi preparada com 20 g de sal em 2 litros de solução. Qual é sua concentração comum?
            Resolução:
            C = 20 / 2
            C = 10g/L
            Isso significa que cada litro da solução contém 10 g de sal.`, tipo: 'h3'},
        { titulo: 'Concentração molar ou molaridade (M)', texto: `A concentração molar, também chamada de molaridade, indica a quantidade de matéria (em mol) do soluto presente em um litro de solução.
            Sua unidade é mol/L.
            Fórmula:
            M = n / V
            Onde:
            - M = concentração molar (mol/L);
            - n = quantidade de matéria do soluto (mol);
            - V = volume da solução (L).
            Como a quantidade de matéria pode ser calculada pela massa e pela massa molar, também podemos utilizar:
            M = m / (MM . V)
            Onde:
            - m = massa do soluto (g);
            - MM = massa molar (g/mol);
            - V = volume da solução (L).

            Exemplo:
            Uma solução contém 40 g de NaOH (hidróxido de sódio) em 2 litros de solução. Sabendo que sua massa molar é 40 g/mol, determine a molaridade.
            Resolução:
            Primeiro, calculamos a quantidade de matéria:
            n = m / MM
            n = 40 / 40 = 1 mol
            Depois, calculamos a molaridade:
            M = 1 / 2
            M = 0,5mol/L`, tipo: 'h3'},
        { titulo: 'Título em massa (T)', texto: `O título em massa representa a relação entre a massa do soluto e a massa total da solução.
            É uma grandeza adimensional, ou seja, não possui unidade.
            Fórmula:
            T = m_1 / m
            Onde:
            - T = título em massa;
            - m_1 = massa do soluto;
            - m = massa total da solução.
            Lembre-se:
            m_solução = m_soluto + m_solvente

            Exemplo:
            Uma solução possui 20 g de sal dissolvidos em 180 g de água. Determine seu título em massa.
            Resolução:
            Primeiro, calculamos a massa total:
            m = 20 + 180 = 200g
            Depois:
            T = 20 / 200
            T = 0,1
            Isso significa que 10% da massa da solução corresponde ao soluto.`, tipo: 'h3'},
        { titulo: 'Porcentagem em massa (% m/m)', texto: `A porcentagem em massa indica quantos gramas de soluto existem em cada 100 g de solução.
            Fórmula:
            %m/m= T . 100
            Exemplo:
            Uma solução possui título em massa igual a 0,25.
            %m/m = 0,25 . 100
            25%
            Portanto, 25% da massa total da solução corresponde ao soluto.`, tipo: 'h3'},
        { titulo: 'Porcentagem em volume (% V/V)', texto: `A porcentagem em volume indica o volume de soluto presente em cada 100 unidades de volume da solução.
            É muito utilizada em misturas de líquidos.
            Fórmula:
            %V/V= (V_1 / V) . 100
            Onde:
            - V_1 = volume do soluto;
            - V = volume total da solução.

            Exemplo:
            Uma solução possui 40 mL de álcool em 200 mL de solução.
            %V/V= (40 . 200) . 100
            20%`, tipo: 'h3'},
        { titulo: 'Concentração em partes por milhão (ppm)', texto: `A concentração em partes por milhão é utilizada para expressar quantidades muito pequenas de uma substância em uma mistura.
            É comum em análises ambientais, controle da qualidade da água e estudos de poluição.
            Fórmula:
            ppm = (m_soluto / m_solução) . 10⁶
            Quando a solução é aquosa e sua densidade é aproximadamente 1 kg/L:
            1ppm ≈ 1mg/L

            Exemplo:
            Uma amostra de água contém 5 mg de determinada substância em 1 litro de água.
            5ppm ≈ 5mg/L`, tipo: 'h3'},
        { titulo: 'Diluição de soluções', texto: `A diluição acontece quando adicionamos solvente a uma solução, diminuindo sua concentração sem alterar a quantidade de soluto.
            Durante uma diluição:
            - A quantidade de soluto permanece constante.
            - O volume da solução aumenta.
            - A concentração diminui.
            Fórmula da diluição:
            C_1 . V_1 = C_2 . V_2
            Onde:
            - C_1 = concentração inicial;
            - V_1 = volume inicial;
            - C_2 = concentração final;
            - V_2 = volume final.
            A fórmula também pode ser utilizada com a molaridade, desde que a unidade de concentração seja a mesma nos dois lados.

            Exemplo:
            Uma solução de concentração 10 g/L possui volume de 200 mL. Ela é diluída até atingir 500 mL. Qual será a concentração final?
            Resolução:
            C_1 . V_1 = C_2 . V_2
            10 . 200 = C_2 . 500
            C_2= 2000 / 500
            C_2 = 4g/L`, tipo: 'h3'},
        { titulo: 'Comparação das principais concentrações', texto: `Comum -> C = m / V	- g/L
            Molar -> M = n / V - mol/L
            Título em massa -> T = m_1 / m - Sem unidade
            Porcentagem em massa -> T . 100 - %
            Porcentagem em volume -> (V_1 / V) . 100 - %
            Partes por milhão -> (m_1 / 5m) . 10⁶ -	ppm`, tipo: 'h3'},
        { titulo: 'Cuidados importantes nos cálculos', texto: `Converta o volume para litros quando utilizar fórmulas com unidade g/L ou mol/L.
            Não confunda massa do soluto com massa total da solução.
            A massa molar deve estar em g/mol quando a massa estiver em gramas.
            Na diluição, a quantidade de soluto permanece constante.
            Título em massa e porcentagem em massa representam a mesma relação, mas em escalas diferentes.`, tipo: 'h3'},
        { titulo: 'Resumo para memorizar', texto: `Concentração comum: massa de soluto por volume de solução.
            Molaridade: quantidade de matéria por volume de solução.
            Título: proporção entre massa do soluto e massa da solução.
            Porcentagem: concentração expressa em cada 100 partes.
            PPM: concentração de substâncias em quantidades muito pequenas.
            Diluição: adição de solvente para diminuir a concentração.
            Regra principal: antes de escolher uma fórmula, identifique quais informações o exercício fornece e qual tipo de concentração ele solicita. Isso evita misturar grandezas diferentes.`, tipo: 'h3'},
    ],
    //Processos com Soluções
    PS: [
        { titulo: 'processos com soluções', texto: `Os processos envolvendo soluções são procedimentos utilizados para preparar, modificar, separar ou analisar misturas homogêneas. Eles são importantes em laboratórios, indústrias, no tratamento de água e em diversas situações do cotidiano.
            Os principais processos estudados em Química são a dissolução, a diluição, a concentração e a mistura de soluções.`, tipo: 'h2'},
        { titulo: 'Dissolução', texto: `A dissolução é o processo em que um soluto se dispersa em um solvente, formando uma solução homogênea.
            Exemplo: quando adicionamos sal à água e agitamos, o sal se dissolve, formando uma solução aquosa.
            A dissolução depende de fatores como:
            - Natureza química do soluto e do solvente;
            - Temperatura;
            - Pressão, principalmente para gases;
            - Agitação;
            - Superfície de contato do soluto.
            Importante: agitação e superfície de contato geralmente aumentam a velocidade da dissolução, mas não necessariamente a quantidade máxima que pode ser dissolvida.`, tipo: 'h3'},
        { titulo: 'Diluição de soluções', texto: `A diluição acontece quando adicionamos solvente a uma solução, diminuindo sua concentração.
            Durante a diluição:
            - A quantidade de soluto permanece constante;
            - O volume da solução aumenta;
            - A concentração diminui.
            Fórmula:
            C₁V₁ = C₂V₂
            Onde:
            - C₁ = concentração inicial;
            - V₁ = volume inicial;
            - C₂ = concentração final;
            - V₂ = volume final.`, tipo: 'h3', imagem: ['../../imagens/quimica/processo_solucoes/diluição_solução_800px.jpg', '../../imagens/quimica/processo_solucoes/diluição_solução_600px.jpg', '../../imagens/quimica/processo_solucoes/diluição_solução_400px.jpg', '../../imagens/quimica/processo_solucoes/diluição_solução_200px.jpg', 'Imagem de uma diluição']},
        { titulo: 'Concentração de soluções', texto: `A concentração é a quantidade de soluto presente em determinada quantidade de solução.
            Uma solução pode ficar mais concentrada quando:
            - Adicionamos mais soluto;
            - Retiramos parte do solvente, sem perder soluto.
            Imagine três recipientes com o mesmo volume de água:
            - Recipiente A: 5 g de sal;
            - Recipiente B: 10 g de sal;
            - Recipiente C: 20 g de sal.
            Considerando que todo o sal foi dissolvido, o recipiente C apresenta a maior concentração.`, tipo: 'h3'},
        { titulo: 'Mistura de soluções de mesmo soluto', texto: `A mistura de soluções de mesmo soluto acontece quando juntamos duas ou mais soluções que possuem a mesma substância dissolvida.
            Nesse processo, as quantidades de soluto são somadas.
            Quando os volumes são aditivos, podemos utilizar:
            C_f = (C₁V₁ + C₂V₂) / (V₁+V₂)
            Onde:
            - C_f = concentração final;
            - C₁ e C₂ = concentrações iniciais;
            - V₁ e V₂ = volumes iniciais.`, tipo: 'h3'},
        { titulo: 'Mistura de soluções de solutos diferentes', texto: `Quando misturamos soluções com solutos diferentes, cada substância deve ser analisada separadamente.
            Dependendo das substâncias envolvidas, pode ocorrer:
            - Reação química;
            - Formação de precipitado;
            - Liberação de gás;
            - Apenas mistura, sem reação química.`, tipo: 'h3'},
        { titulo: "Separação dos componentes de uma solução", texto: `Uma solução pode ser separada por diferentes processos físicos, dependendo das propriedades de seus componentes.
            Destilação simples
            Utilizada para separar um líquido de um soluto não volátil dissolvido nele.
            Exemplo: obtenção de água a partir de água salgada.

            Destilação fracionada
            Utilizada para separar líquidos miscíveis com diferentes temperaturas de ebulição.
            Exemplo: separação de componentes de uma mistura de líquidos.

            Evaporação e cristalização
            Permitem recuperar um soluto dissolvido por meio da remoção do solvente e da formação de cristais.
            Exemplo: obtenção de sal a partir da água do mar.`, tipo: "h3"},
        { titulo: "Resumo para memorizar", texto: `Dissolução: formação de uma solução a partir do soluto e do solvente.
            Diluição: adição de solvente, diminuindo a concentração.
            Concentração: aumento da proporção de soluto na solução.
            Mistura de soluções: combinação de diferentes soluções.
            Destilação: separação baseada na volatilidade dos componentes.
            Cristalização: recuperação de um soluto na forma sólida.`, tipo: "h3"},
    ],
    
//Matérias B
    //Estrutura da Matéria
    EM: [
        { titulo: 'estrutura da matéria', texto: `Explica do que tudo é feito, como os átomos são organizados e como as partículas se comportam. É um dos fundamentos da Química e ajuda a entender ligações químicas, tabela periódica, íons e reações.`, tipo: 'h2'},
        { titulo: 'O que é matéria?', texto: `Matéria é tudo aquilo que possui massa e ocupa lugar no espaço.
            Exemplos: água, ar, madeira, ferro e seu caderno.
            A matéria é formada por partículas, como átomos, moléculas e íons.
            Átomo -> É uma unidade que caracteriza um elemento químico. Por exemplo, um átomo de cobre (Cu)
            Molécula -> Conjunto de átomos ligados quimicamente. Exemplo: água (H₂O), formada por dois átomos de hidrogênio e um de oxigênio.
            Íon -> Átomo ou grupo de átomos que possui carga elétrica por perder ou ganhar elétrons. Exemplo: Na+ e Cl-.`, tipo: 'h3'},
        { titulo: 'Estrutura do átomo', texto: `O átomo possui duas regiões principais: o núcleo e a eletrosfera.
            Núcleo: região central, onde ficam os prótons e os nêutrons. Concentra quase toda a massa do átomo.
            Eletrosfera: região ao redor do núcleo onde se encontram os elétrons, distribuídos em níveis de energia.
            - Núcleo: região central, onde ficam os prótons e os nêutrons. Concentra quase toda a massa do átomo.
            - Eletrosfera: região ao redor do núcleo onde se encontram os elétrons, distribuídos em níveis de energia.
            As três partículas subatômicas
            Partícula	Carga elétrica	Localização
            Próton (p+)	+1	Núcleo
            Nêutron (n)	0   Núcleo
            Elétron (e-)	-1  Eletrosfera
            Uma observação importante: o próton e o nêutron possuem massas próximas, enquanto a massa do elétron é muito menor.`, tipo: 'h3', imagem: ['../../imagens/quimica/atomo/atomo_800px.png', '../../imagens/quimica/atomo/atomo_600px.png', '../../imagens/quimica/atomo/atomo_400px.png', '../../imagens/quimica/atomo/atomo_200px.png', 'Imagem com atomo em sistema solar']},
        { titulo: 'Modelos atômicos', texto: `Dalton — bola de bilhar
            O átomo era representado como uma esfera maciça e indivisível.`, tipo: 'h3', imagem: [`../../imagens/quimica/atomo/modelo_dalton_800px.jpg`, `../../imagens/quimica/atomo/modelo_dalton_600px.jpg`, `../../imagens/quimica/atomo/modelo_dalton_400px.jpg`, `../../imagens/quimica/atomo/modelo_dalton_200px.jpg`, `Modelo de Dalton`]},
        { titulo: '', texto: `Thonsom - pudim de passas
            Propôs um átomo com carga positiva distribuída e elétrons inseridos nele.`, tipo: 'h3', imagem: ['../../imagens/quimica/atomo/modelo_thomsom_800px.jpg', '../../imagens/quimica/atomo/modelo_thomsom_600px.jpg', '../../imagens/quimica/atomo/modelo_thomsom_400px.jpg', '../../imagens/quimica/atomo/modelo_thomsom_200px.jpg', `Modelo Thonsom`]},
        { titulo: ``, texto: `Rutherford — modelo nuclear
            Demonstrou a existência de um núcleo pequeno e positivo e mostrou que grande parte do átomo é espaço vazio.`, tipo: 'h3', imagem: [`../../imagens/quimica/atomo/modelo_rutherford_800px.jpg`, `../../imagens/quimica/atomo/modelo_rutherford_600px.jpg`, `../../imagens/quimica/atomo/modelo_rutherford_400px.jpg`, `../../imagens/quimica/atomo/modelo_rutherford_200px.jpg`, `Modelo Rutherford`]},
        { titulo: '', texto: `Bohr - níveis de energia
            Propôs níveis de energia definidos para os elétrons. O modelo quântico atual descreve os elétrons por orbitais, não por órbitas circulares fixas.`, tipo: 'h3', imagem: ['../../imagens/quimica/atomo/modelo_bohr_800px.jpg', '../../imagens/quimica/atomo/modelo_bohr_600px.jpg', '../../imagens/quimica/atomo/modelo_bohr_400px.jpg', '../../imagens/quimica/atomo/modelo_bohr_200px.jpg', `Modelo Bohr`]},
    ],
    //Atômos e Íons
    AI: [
        { titulo: 'átomos e íons', texto: `Átomos e íons são conceitos fundamentais para entender a estrutura da matéria, as ligações químicas e as reações químicas.
            A diferença principal é simples: um átomo é eletricamente neutro quando possui a mesma quantidade de prótons e elétrons; um íon possui carga elétrica porque ganhou ou perdeu elétrons.`, tipo: 'h2'},
        { titulo: 'O que é um átomo?', texto: `O átomo é uma unidade fundamental de um elemento químico.
            Ele é formado por três partículas principais:
            Partícula	Carga	Localização
            Próton	Positiva (+)	Núcleo
            Nêutron	Neutra (0)	Núcleo
            Elétron	Negativa (−)	Eletrosfera

            Quando um átomo é neutro?
            Quando o número de prótons é igual ao número de elétrons.
            Exemplo: átomo de sódio (Na).
            - Prótons: 11
            - Elétrons: 11
            - Carga elétrica: zero.
            As cargas positivas e negativas se anulam`, tipo: 'h3'},
        { titulo: 'O que são íons?', texto: `Íons são átomos ou grupos de átomos que apresentam carga elétrica.
            Eles surgem quando há transferência de elétrons.
            Existem dois tipos principais:

            A) Cátion (+)
            Carga positiva
            É formado quando um átomo perde elétrons.
            Exemplo: sódio.
            Na -> Na+ + e-
            O sódio começa com:
            - 11 prótons;
            - 11 elétrons.
            Depois de perder um elétron:
            - 11 prótons;
            - 10 elétrons.
            Como existem mais cargas positivas do que negativas, ele se torna um cátion.

            B) Ânion (−)
            Carga negativa
            É formado quando um átomo ganha elétrons.
            Exemplo: cloro.
            Cl + e- -> Cl-
            O cloro começa com:
            - 17 prótons;
            - 17 elétrons.
            Depois de ganhar um elétron:
            - 17 prótons;
            - 18 elétrons.
            Como existem mais cargas negativas, ele se torna um ânion.`, tipo: 'h3'},
        { titulo: 'Diferença entre átomo e íon', texto: `Átomo neutro -> Prótons = elétrons
            Cátion -> prótons > elétrons
            Ânion -> prótons < elétrons

            Uma regra para memorizar:
            - Perdeu elétrons → ficou positivo.
            - Ganhou elétrons → ficou negativo.
            Não confunda: o número de prótons não muda quando um átomo vira íon. O que muda é a quantidade de elétrons.`, tipo: 'h3'},
        { titulo: 'Como calcular a carga de um íon?', texto: `Existe uma fórmula simples:     
            Carga = p - e
            Em que:
            - p = número de prótons;
            - e = número de elétrons.
            Exemplo:
            Um átomo possui 13 prótons e 10 elétrons.
            13-10=+3
            Portanto, sua carga é 3+
            Outro exemplo:
            Um átomo possui 8 prótons e 10 elétrons.
            8-10=-2`, tipo: 'h3'},
        { titulo: 'Isótopos, Isóbaros, Isótonos e Isoeletrônicos', texto: `Esses quatro conceitos comparam átomos ou íons a partir da quantidade de prótons, nêutrons e elétrons.
            O segredo é saber qual partícula ou número está sendo comparado.
            Isótopos — mesmo número de prótons
            Isóbaros — mesmo número de massa
            Isótonos — mesmo número de nêutrons
            Isoeletrônicos — mesmo número de elétrons

            Macete:
            - IsótoPos → mesmo número de Prótons.
            - IsóBAROS → mesma massa (A).
            - IsótoNos → mesmos Nêutrons.
            - IsoEletrônicos → mesmos elétrons.`, tipo: 'h3'},
    ],
    //Eletrosfera dos Atômos
    EA: [
        { titulo: 'eletrosfera do átomo', texto: `A eletrosfera é a região ao redor do núcleo do átomo onde se encontram os elétrons.
            Ela é importante porque os elétrons participam das ligações químicas, da formação de íons e das propriedades dos elementos.`, tipo: 'h2'},
        { titulo: 'Como o átomo é organizado?', texto: `O átomo possui duas regiões:
            - Núcleo: contém prótons e nêutrons.
            - Eletrosfera: contém elétrons distribuídos em regiões de energia.
            Os elétrons possuem carga negativa e massa muito menor que a dos prótons e nêutrons.
            Atenção: em modelos escolares, os elétrons são desenhados em órbitas ou camadas. No modelo quântico atual, eles são descritos por orbitais, que representam regiões de maior probabilidade de encontrar um elétron.`, tipo: 'h3'},
        { titulo: 'Camadas eletrônicas', texto: `No modelo escolar de distribuição eletrônica, os elétrons são organizados em camadas ao redor do núcleo.
            As camadas são identificadas por letras:
            K - 1 --> 2  - elétrons
            L - 2 --> 8  - elétrons
            M - 3 --> 18 - elétrons
            N - 4 --> 32 - elétrons
            O - 5 --> 32 - elétrons
            P - 6 --> 18 - elétrons
            Q - 7 --> 8  - elétrons
            Camadas de K a Q ou 1 a 7 e suas capacidades de elétons
            Macete:
            K, L, M, N, O, P, Q. Essas são as letras que eu devo saber
            2, 8, 18, 32, 32, 18 e o 8 vem depois.

            Esses valores representam capacidades máximas teóricas das camadas. A distribuição real dos elétrons segue níveis e subníveis de energia.
            Para exercícios introdutórios, costuma-se usar a regra simplificada de distribuição por camadas.`, tipo: 'h3'},
        { titulo: 'Distribuição por subníveis', texto: `Além das camadas K, L, M, N, O, P e Q, a eletrosfera é organizada em subníveis de energia.
            Os quatro subníveis usados na distribuição eletrônica são:
            s, p, d, f (para decorar existe a frase 'SoPa De Feijão' entre outras)
            Cada subnível comporta uma quantidade máxima de elétrons:
            Subnível	Capacidade máxima
            s	2 elétrons
            p	6 elétrons
            d	10 elétrons
            f	14 elétrons
            Atenção: os números 2, 6, 10 e 14 indicam a capacidade máxima de cada subnível, não a quantidade obrigatória de elétrons.

            Ordem de preenchimento dos subníveis
            Os elétrons ocupam os subníveis seguindo uma ordem crescente de energia, conhecida como diagrama de Linus Pauling.`, tipo: 'h3', imagem: ['../../imagens/quimica/eletrosfera/distribuição_eletronica_800.jpg', '../../imagens/quimica/eletrosfera/distribuição_eletronica_600.jpg', '../../imagens/quimica/eletrosfera/distribuição_eletronica_400.jpg', '../../imagens/quimica/eletrosfera/distribuição_eletronica_200.jpg', `Distribuição eletronica de Pauling`]},
        { titulo: '', texto: `A ordem de preenchimento é:
            1s
            2s 2p
            3s 3p
            4s 3d 4p
            5s 4d 5p
            6s 4f 5d 6p
            7s 5f 6d 7p
            Lendo na ordem indicada pelas diagonais:
            1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, 7s, 5f, 6d, 7p`, tipo: 'h3'},
        { titulo: 'Relação entre camadas e subníveis', texto: `Camada	Subníveis presentes	Capacidade máxima
            K (n=1)	1s = 2
            L (n=2)	2s, 2p = 8
            M (n=3)	3s, 3p, 3d = 18
            N (n=4)	4s, 4p, 4d, 4f = 32
            A capacidade máxima de cada camada é calculada por:
            2n^2
            Por exemplo, para a camada M, n=3:
            2(3)^2 = 18
            Isso significa que a camada M pode comportar até 18 elétrons.
            Importante: a ordem de preenchimento dos subníveis não é simplesmente a ordem das camadas. Por exemplo, o subnível 4s é preenchido antes do 3d.`, tipo: 'h3'},
    ],
    //Tabela Periódica
    TP: [
        { titulo: 'desenvolvimento da tabela peróidica',  texto: `A tabela periódica é uma organização dos elementos químicos que permite observar padrões em suas propriedades. Ela não surgiu pronta: foi desenvolvida ao longo de muitos anos, conforme os cientistas descobriram novos elementos e compreenderam melhor a estrutura dos átomos.
            A ideia central é esta: elementos com propriedades semelhantes apresentam padrões que se repetem quando são organizados em determinada ordem.`, tipo: 'h2'},
        { titulo: 'As primeiras tentativas de organização', texto: `Döbereiner — Tríades (1829)
            Organizou alguns elementos em grupos de três, chamados tríades. Os elementos de cada grupo apresentavam propriedades semelhantes.
            Exemplo: cloro, bromo e iodo. A massa atômica do elemento central era aproximadamente a média das massas dos outros dois.

            Newlands — Lei das Oitavas (1864–1865)
            Organizou os elementos em ordem crescente de massa atômica. Percebeu que certas propriedades se repetiam a cada oito elementos, como as notas musicais.
            A ideia funcionava melhor para os elementos mais leves.

            Mendeleev — Tabela periódica (1869)
            Organizou os elementos principalmente em ordem crescente de massa atômica, agrupando aqueles com propriedades semelhantes.
            Seu grande mérito foi deixar espaços para elementos ainda não descobertos e prever suas propriedades.

            Moseley — Número atômico (1913)
            Demonstrou que a organização correta dos elementos deveria seguir o número atômico, isto é, a quantidade de prótons no núcleo.
            Essa descoberta fundamentou a organização da tabela periódica moderna.`, tipo: 'h3'},
        { titulo: 'Mendeleev', texto: `Mendeleev não apenas organizou os elementos conhecidos. Ele percebeu que algumas posições da tabela deveriam ficar vazias.
            Ele deixou espaços para elementos ainda desconhecidos e previu suas propriedades
            Quando esses elementos foram descobertos posteriormente, várias previsões se mostraram bastante próximas dos valores reais.
            Isso fortaleceu a ideia de que os elementos seguiam uma organização periódica.`, tipo: 'h3'},
    ],
    //Organização da Tabela
    OT: [
        { titulo: 'organização atual da tabela periódica', texto: `A Tabela Periódica atual organiza os elementos químicos em ordem crescente de número atômico (Z). Isso significa que os elementos são colocados de acordo com a quantidade de prótons em seus núcleos.`, tipo: 'h2'},
        { titulo: 'Períodos e grupos', texto: `Períodos: são as 7 linhas horizontais. Indicam o número de camadas eletrônicas ocupadas no modelo escolar de distribuição eletrônica.
            Grupos ou famílias: são as 18 colunas verticais. Elementos de um mesmo grupo geralmente apresentam propriedades químicas semelhantes.
            Exemplo: o sódio (Na) e o potássio (K) estão no grupo 1 e possuem propriedades químicas semelhantes.
            Curiosidade: Itens da familia 1 podem reagir tão forte com água que gera explosões`, tipo: 'h3', imagem: ['../../imagens/quimica/tabelas_periodicas/tabela_periodica_800px.jpg', '../../imagens/quimica/tabelas_periodicas/tabela_periodica_600px.jpg', '../../imagens/quimica/tabelas_periodicas/tabela_periodica_400px.jpg', '../../imagens/quimica/tabelas_periodicas/tabela_periodica_200px.jpg', 'Tabela Periódica']},
        { titulo: 'Classificação dos elementos', texto: `Metais: geralmente bons condutores de calor e eletricidade; tendem a perder elétrons.
            Ametais (não metais): geralmente maus condutores; tendem a ganhar ou compartilhar elétrons.
            Semimetais: apresentam propriedades intermediárias, como o silício.
            Gases nobres: possuem baixa reatividade química em condições comuns.`, tipo: 'h3'},
        { titulo: 'Lantanídeos e actinídeos', texto: `As duas linhas destacadas na parte inferior da tabela são:
            - Lantanídeos: elementos de número atômico 57 a 71.
            - Actinídeos: elementos de número atômico 89 a 103.
            Eles são mostrados separados para deixar a tabela mais compacta. Na organização completa, pertencem aos períodos 6 e 7.`, tipo: 'h3'},
    ],
    //Propriedades Periódicas
    PP: [
        { titulo: 'propriedades periódicas', texto: `As propriedades periódicas são características dos elementos químicos que variam de maneira regular conforme aumentamos o número atômico na Tabela Periódica.
                Elas ajudam a prever, por exemplo, qual átomo é maior, qual perde elétrons com mais facilidade e qual atrai elétrons com mais força.`, tipo: 'h2'},
        { titulo: 'Raio atômico', texto: `O raio atômico representa, de forma simplificada, o tamanho do átomo.
                - Descendo um grupo: o raio aumenta, pois são adicionadas camadas eletrônicas.
                - Da esquerda para a direita em um período: o raio geralmente diminui, pois a atração do núcleo sobre os elétrons aumenta.
                Resumo: o raio atômico aumenta em direção ao canto inferior esquerdo da tabela.
                Exemplo: o potássio (K) é maior que o sódio (Na), pois está abaixo dele no mesmo grupo.`, tipo: 'h3'},
        { titulo: 'Energia de ionização', texto: `É a energia necessária para retirar um elétron de um átomo isolado no estado gasoso.
                - Da esquerda para a direita: geralmente aumenta.
                - De cima para baixo: geralmente diminui.
                Resumo: a energia de ionização aumenta em direção ao canto superior direito.
                Átomos pequenos e com forte atração nuclear tendem a segurar seus elétrons com mais força.`, tipo: 'h3'},
        { titulo: 'Eletronegatividade', texto: `É a capacidade de um átomo de atrair os elétrons compartilhados em uma ligação química.
                - Da esquerda para a direita: geralmente aumenta.
                - De baixo para cima: geralmente aumenta.
                Resumo: aumenta em direção ao canto superior direito. O flúor (F) é o elemento mais eletronegativo.
                A eletronegatividade é especialmente importante para entender ligações químicas.`, tipo: 'h3'},
        { titulo: 'Como não confundir', texto: `Raio atômico -> Baixo e esquerda
                Energia de ionização -> Cima e direita
                Eletronegatividade -> Cima e direita
                Caráter metálico -> Baixo e esquerda`, tipo: 'h3'},
    ],
    //Ligação Iônica
    LI: [
        { titulo:'ligação iônica', texto: `A ligação iônica é uma ligação química formada pela atração eletrostática entre íons de cargas opostas: cátions (+) e ânions (−).
            Geralmente ocorre entre um metal e um ametal. O metal tende a perder elétrons, enquanto o ametal tende a ganhar elétrons.`, tipo: 'h2'},
        { titulo:'Como ocorre a ligação iônica?', texto: `Metal: perde elétrons e forma um cátion.
            Ametal: ganha elétrons e forma um ânion.
            A atração entre esses íons mantém o composto unido.`, tipo: 'h3'},
        { titulo:'Fórmula dos compostos iônicos', texto: `A fórmula deve apresentar cargas totais que se anulam. O composto final é eletricamente neutro.
            Exemplo: óxido de magnésio
            O magnésio forma Mg²+ e o oxigênio forma O²-.
            Como as cargas se anulam na proporção 1:1:
            Mg²+}+ O²- MgO
            Exemplo: cloreto de magnésio
            O magnésio forma Mg²+, enquanto cada cloro forma Cl-.
            São necessários dois íons cloreto para neutralizar a carga do magnésio:
            Mg²+ + 2Cl- MgCl₂`, tipo: 'h3'},
        { titulo:'Propriedades dos compostos iônicos', texto: `Estado físico -> Geralmente sólidos cristalinos à temperatura ambiente
            Ponto de fusão -> Geralmente elevado, devido à atração entre os íons
            Dureza -> Costumam ser duros, mas quebradiços
            Condutividade elétrica -> Conduzem quando fundidos ou dissolvidos em água, se houver íons móveis
            Estado sólido -> Não conduzem bem, pois os íons ficam presos na estrutura cristalina`, tipo: 'h3'},
    ],
    //Ligação Covalente
    LC: [
        { titulo: 'ligação covalente', texto: `A ligação covalente é uma ligação química em que dois ou mais átomos compartilham pares de elétrons para alcançar maior estabilidade eletrônica.
            Geralmente ocorre entre ametais, entre ametais e hidrogênio ou entre átomos de hidrogênio.
            Diferentemente da ligação iônica, não ocorre transferência completa de elétrons: os átomos compartilham elétrons.`, tipo: 'h2'},
        { titulo: 'Como ocorre a ligação covalente?', texto: `Os átomos compartilham elétrons da camada de valência para alcançar uma configuração eletrônica mais estável.
            - Cada par de elétrons compartilhado representa uma ligação covalente.
            - Os elétrons compartilhados são atraídos pelos núcleos dos dois átomos.
            - A quantidade de ligações depende dos elétrons que cada átomo precisa compartilhar.
            Iônica: ocorre transferência de elétrons e atração entre íons.
            Covalente: ocorre compartilhamento de elétrons.`, tipo: 'h3'},
        { titulo: 'Tipos de ligação covalente', texto: `As ligações covalentes são classificadas de acordo com a quantidade de pares de elétrons compartilhados.
            Ligação simples
            Compartilhamento de 1 par de elétrons.
            Exemplo: H - H (H₂).

            Ligação dupla
            Compartilhamento de 2 pares de elétrons.
            Exemplo: O = O (O₂).

            Ligação tripla
            Compartilhamento de 3 pares de elétrons.
            Exemplo: N ≡ N (N₂).`, tipo: 'h3'},
        { titulo: 'Regra do octeto', texto: `A regra do octeto estabelece que muitos átomos tendem a realizar ligações para alcançar 8 elétrons na camada de valência, adquirindo uma configuração semelhante à dos gases nobres.
            O hidrogênio é uma exceção importante: busca completar 2 elétrons, seguindo a regra do dueto.
            Exemplo: molécula de água (H₂O)
            - O oxigênio possui 6 elétrons na camada de valência.
            - Cada hidrogênio possui 1 elétron.
            - O oxigênio compartilha um par de elétrons com cada hidrogênio.
            - Assim, o oxigênio completa 8 elétrons e cada hidrogênio completa 2.`, tipo: 'h3'},
        { titulo: 'Propriedades das substâncias covalentes', texto: `As substâncias covalentes moleculares geralmente apresentam:
            - Pontos de fusão e ebulição relativamente baixos, em comparação com compostos iônicos.
            - Podem ser encontradas nos estados sólido, líquido ou gasoso.
            - Geralmente não conduzem eletricidade.
            - Podem ser polares ou apolares.
            Exceção importante: substâncias covalentes de rede, como diamante e quartzo, apresentam estruturas extensas e pontos de fusão elevados.`, tipo: 'h3'},
    ],
    //Ligações Metálicas
    LM: [
        { titulo: 'ligações metálicas', texto: `A ligação metálica é uma ligação química que ocorre entre átomos de metais. Ela é caracterizada pela presença de elétrons livres ou deslocalizados, que se movimentam pela estrutura metálica e mantêm os cátions unidos.
            Esse modelo é conhecido como modelo do mar de elétrons.`, tipo: 'h2'},
        { titulo: 'Como ocorre a ligação metálica?', texto: `Os átomos metálicos liberam parcialmente seus elétrons de valência, formando uma estrutura de cátions metálicos rodeados por elétrons deslocalizados.
            Os cátions metálicos ficam organizados em uma estrutura.
            Os elétrons deslocalizados movimentam-se por essa estrutura.
            A atração eletrostática entre os cátions e os elétrons mantém o metal unido.`, tipo: 'h3'},
        { titulo: 'Principais propriedades dos metais', texto: `As ligações metálicas explicam várias propriedades características dos metais:
            Condutividade elétrica -> Os elétrons livres permitem a passagem de corrente elétrica.
            Condutividade térmica -> A energia térmica é transferida com facilidade pela estrutura.
            Maleabilidade -> Capacidade de formar lâminas sem quebrar.
            Ductilidade -> Capacidade de formar fios.
            Brilho metálico -> Interação dos elétrons com a luz produz o brilho característico.
            Geralmente sólidos -> A maioria dos metais é sólida à temperatura ambiente, com exceções como o mercúrio.`, tipo: 'h3'},
        { titulo: 'Ligas metálicas', texto: `As ligas metálicas são materiais formados pela mistura de dois ou mais elementos, sendo pelo menos um deles um metal.
            Elas são produzidas para melhorar características como resistência, dureza e durabilidade.
            Latão
            Composto principalmente por cobre e zinco.

            Aço inoxidável
            Composto principalmente por ferro, cromo e, geralmente, níquel.

            Bronze
            Composto principalmente por cobre e estanho.`, tipo: 'h3'},
    ],
    //Geometria Molecular
    GM: [
        { titulo: 'geometria molecular', texto: `A geometria molecular é a forma como os átomos estão organizados no espaço dentro de uma molécula.
            Ela depende principalmente da repulsão entre os pares de elétrons ao redor do átomo central. Esses pares se afastam o máximo possível para alcançar uma configuração de menor repulsão.
            Esse princípio é chamado de Teoria da Repulsão dos Pares de Elétrons da Camada de Valência (VSEPR).`, tipo: 'h2'},
        { titulo: 'Teoria da repulsão dos pares eletrônicos', texto: `Os pares de elétrons da camada de valência se repelem, sejam eles:
            - Pares ligantes: elétrons envolvidos nas ligações químicas.
            - Pares não ligantes: elétrons que não participam de ligações, também chamados de pares isolados.
            Os pares não ligantes ocupam mais espaço e exercem maior repulsão, podendo alterar a geometria da molécula.`, tipo: 'h3'},
        { titulo: 'Principais geometrias moleculares', texto: `Linear
            - 2 regiões eletrônicas ao redor do átomo central.
            - Ângulo: 180°.
            - Exemplo: CO₂.
            Trigonal plana
            - 3 regiões eletrônicas.
            - Ângulo: 120°.
            - Exemplo: BF₃.
            Tetraédrica
            - 4 regiões eletrônicas.
            - Ângulo: aproximadamente 109,5°.
            - Exemplo: CH₄.
            Piramidal
            - 3 ligações e 1 par de elétrons não ligante.
            - Ângulo: aproximadamente 107°.
            - Exemplo: NH₃.
            Angular
            - 2 ligações e 2 pares de elétrons não ligantes.
            - Ângulo: aproximadamente 104,5° na água.
            - Exemplo: H₂O.
            Existem também outras geometrias, como:
            - Bipiramidal trigonal: 5 regiões eletrônicas. Exemplo: PCl₅.
            - Octaédrica: 6 regiões eletrônicas. Exemplo: SF₆.`, tipo: 'h3'},
        { titulo: 'Como identificar a geometria molecular?', texto: `Para identificar a geometria, siga estes passos:
            1. Identifique o átomo central.
            2. Desenhe a estrutura de Lewis da molécula.
            3. Conte as regiões eletrônicas ao redor do átomo central.
            4. Identifique quantos pares são ligantes e quantos são não ligantes.
            5. Determine a geometria molecular.
            Importante: ligações simples, duplas e triplas contam como uma região eletrônica cada uma.`, tipo: 'h3'},
        { titulo: 'Geometria eletrônica × geometria molecular', texto: `Não confunda esses dois conceitos:
            - Geometria eletrônica: considera todas as regiões eletrônicas, incluindo pares ligantes e não ligantes.
            - Geometria molecular: considera somente a posição dos átomos.
            Exemplo: água (H₂O).
            A água possui quatro regiões eletrônicas ao redor do oxigênio:
            - 2 pares ligantes.
            - 2 pares não ligantes.
            Sua geometria eletrônica é tetraédrica, mas sua geometria molecular é angular.`, tipo: 'h3'},
    ],
    //Polaridade das Ligações Químicas e das Moléculas
    PL: [
        { titulo: 'polaridade das ligações químicas e das moléculas', texto: `A polaridade está relacionada à distribuição dos elétrons em uma ligação química ou molécula. Ela permite identificar se existe uma distribuição uniforme ou desigual de cargas elétricas.
            É importante separar dois conceitos:
            - Polaridade das ligações: analisa a distribuição dos elétrons entre dois átomos.
            - Polaridade das moléculas: analisa a distribuição de cargas em toda a molécula, considerando as ligações e sua geometria.`, tipo: 'h2'},
        { titulo: 'Eletronegatividade', texto: `A eletronegatividade é a capacidade que um átomo possui de atrair para si os elétrons de uma ligação química.
            Quando dois átomos possuem eletronegatividades diferentes, o compartilhamento dos elétrons tende a ser desigual.
            Exemplo: na ligação H–Cl, o cloro é mais eletronegativo que o hidrogênio e atrai os elétrons com maior intensidade.`, tipo: 'h3'},
        { titulo: 'Polaridade das ligações químicas', texto: `As ligações covalentes podem ser classificadas em dois tipos:
            Ligação covalente apolar
            Ocorre quando os elétrons são compartilhados de maneira igual ou aproximadamente igual entre os átomos.
            - Geralmente acontece entre átomos iguais.
            - Não apresenta dipolo significativo.
            Exemplos:
            H - H   O = O   Cl - Cl`, tipo: 'h3'},
        { titulo: 'Ligação covalente polar', texto: `Ocorre quando os elétrons são compartilhados de maneira desigual, devido à diferença de eletronegatividade entre os átomos.
            - O átomo mais eletronegativo fica com carga parcial negativa (-).
            - O átomo menos eletronegativo fica com carga parcial positiva (+).
            Exemplo: HCl.
            O cloro atrai mais os elétrons, ficando com carga-, enquanto o hidrogênio fica com carga+.`, tipo: 'h3'},
        { titulo: 'Polaridade das moléculas', texto: `A polaridade molecular depende de dois fatores:
            1. A polaridade das ligações químicas.
            2. A geometria molecular.
            Uma molécula pode possuir ligações polares e, mesmo assim, ser apolar. Isso acontece quando os dipolos das ligações se anulam.
            Molécula apolar
            Quando a distribuição de cargas é simétrica e os dipolos se anulam.
            Exemplo: CO₂ (gás carbônico)
            - Possui duas ligações C=O polares.
            - Sua geometria é linear.
            - Os dipolos possuem sentidos opostos e mesma intensidade.
            - Portanto, eles se anulam.`, tipo: 'h3'},
    ],
    //Forças Intermoleculares
    FI: [
        { titulo: 'forças intermoleculares', texto: `As forças intermoleculares são forças de atração que ocorrem entre moléculas. Elas influenciam propriedades físicas das substâncias, como ponto de ebulição, ponto de fusão, viscosidade e solubilidade.
            Não devem ser confundidas com as ligações químicas: as ligações químicas mantêm os átomos unidos, enquanto as forças intermoleculares atuam entre moléculas.`, tipo: 'h2'},
        { titulo: 'Forças de dispersão de London', texto: `Também chamadas de forças dipolo induzido – dipolo induzido.
            Ocorrem devido à movimentação dos elétrons, que pode provocar a formação de dipolos temporários nas moléculas.
            Características:
            - Estão presentes em todas as moléculas.
            - São as únicas forças intermoleculares presentes em moléculas apolares.
            - Geralmente aumentam com o tamanho e a polarizabilidade da molécula.
            Exemplos: H₂, O₂, CO₂ e CH₄.`, tipo: 'h3'},
        { titulo: 'Dipolo permanente – dipolo permanente', texto: `Ocorre entre moléculas polares, que possuem regiões parcialmente positivas e negativas.
            A região positiva de uma molécula atrai a região negativa de outra.
            Características:
            - Ocorre entre moléculas polares.
            - Depende da polaridade das moléculas.
            - É uma atração entre dipolos permanentes.
            Exemplos: HCl, SO₂ e moléculas polares semelhantes.`, tipo: 'h3'},
        { titulo: 'Ligação de hidrogênio', texto: `É uma interação intermolecular relativamente intensa que ocorre quando o hidrogênio está ligado diretamente a um átomo de flúor (F), oxigênio (O) ou nitrogênio (N) e interage com F, O ou N de outra molécula.
            Características:
            - É mais intensa que as interações dipolo-dipolo comuns.
            - Ocorre em substâncias como água, amônia e fluoreto de hidrogênio.
            - Explica o ponto de ebulição relativamente elevado da água.
            Exemplos: HO₂ , NH₃ e HF.`, tipo: 'h3'},
        { titulo: 'Influência nas propriedades físicas', texto: `As forças intermoleculares influenciam diretamente o comportamento das substâncias.
            Ponto de ebulição: quanto mais energia for necessária para separar as moléculas, maior será a temperatura de ebulição.
            Ponto de fusão: as interações entre partículas influenciam a energia necessária para passar do estado sólido ao líquido.
            Viscosidade: substâncias com maior resistência ao escoamento podem apresentar interações intermoleculares mais intensas.
            Volatilidade: substâncias cujas moléculas se separam mais facilmente tendem a evaporar com maior facilidade.`, tipo: 'h3'},
        { titulo: 'Regra de solubilidade', texto: `Uma regra geral da Química é:
            Semelhante dissolve semelhante.
            - Substâncias polares tendem a dissolver substâncias polares.
            - Substâncias apolares tendem a dissolver substâncias apolares.
            Exemplo: água e óleo não se misturam facilmente porque possuem características de polaridade diferentes.`, tipo: 'h3'},
    ],
    //Teoria de Arrhenius
    TA: [
        { titulo: 'teoria de Arrhenius', texto: `A Teoria de Arrhenius, também conhecida como teoria da dissociação e ionização eletrolítica, foi proposta pelo químico sueco Svante Arrhenius no século XIX.
            Essa teoria explica o comportamento de determinadas substâncias quando dissolvidas em água, especialmente sua capacidade de formar íons e conduzir corrente elétrica.
            Ela é uma das bases para o estudo das funções inorgânicas: ácidos, bases e sais.`, tipo: 'h2'},
        { titulo: 'O que diz a Teoria de Arrhenius?', texto: `Segundo Arrhenius, determinadas substâncias, quando dissolvidas em água, produzem íons que permitem a condução de corrente elétrica.
            Esses íons são partículas com carga elétrica:
            - Cátions: íons positivos.
            - Ânions: íons negativos.
            Quanto maior a quantidade de íons livres em solução, maior tende a ser sua capacidade de conduzir corrente elétrica, considerando condições comparáveis.`, tipo: 'h3', imagem: ['../../imagens/quimica/teoria_arrhenius/experimento_arrhenius_800px.jpg', '../../imagens/quimica/teoria_arrhenius/experimento_arrhenius_600px.jpg', '../../imagens/quimica/teoria_arrhenius/experimento_arrhenius_400px.jpg', '../../imagens/quimica/teoria_arrhenius/experimento_arrhenius_200px.jpg', 'experimento da lampada feito por arrhenius']},
        { titulo: 'Dissociação iônica', texto: `A dissociação iônica acontece quando uma substância que já possui íons em sua estrutura, como um composto iônico, separa esses íons ao ser dissolvida em água.
            Exemplo: cloreto de sódio (NaCl)
            O sal de cozinha é formado por íons sódio (Na⁺) e cloreto (Cl⁻).
            Quando entra em contato com a água, seus íons se separam:
            NaCl₍ₛ₎ - H₂O -> Na₍ₐᵩ₎ + Cl₍ₐᵩ₎
            Observe que não ocorre a criação dos íons: eles já existiam na estrutura do composto.`, tipo: 'h3'},
        { titulo: 'Ionização', texto: `A ionização ocorre quando uma substância molecular reage com a água e forma íons.
            Diferentemente da dissociação, nesse processo os íons são formados durante a interação com a água.
            Exemplo: ácido clorídrico (HCl)
            O HCl é uma substância molecular. Ao entrar em contato com a água, forma íons hidrônio e cloreto:
            HCl + H₂O -> H₃O⁺ + Cl⁻
            O íon hidrônio (H₃O⁺) é formado quando uma molécula de água recebe um próton (H⁺).`, tipo: 'h3'},
        { titulo: 'Limitações da Teoria de Arrhenius', texto: `Apesar de sua importância, a teoria apresenta algumas limitações:
            - É restrita principalmente a soluções aquosas.s
            - Não explica adequadamente todas as reações ácido-base.
            - Não abrange bases que não possuem OH⁻ em sua fórmula, como a amônia (NH₃), de maneira direta.
            Posteriormente, outras teorias foram desenvolvidas para ampliar a compreensão das reações ácido-base, como as teorias de Brønsted-Lowry e Lewis.`, tipo: 'h3'},
    ],
    //Ácidos
    Aci: [
        { titulo: 'ácidos', texto: `Os ácidos são uma das principais funções inorgânicas estudadas na Química. Estão presentes em diversos produtos e fenômenos do cotidiano, como o suco de limão, o vinagre, o ácido presente no estômago e as baterias de automóveis.
            Segundo a Teoria de Arrhenius, ácidos são substâncias que, em solução aquosa, aumentam a concentração de íons hidrônio (H₃O⁺), formados pela transferência de prótons (H⁺) para moléculas de água.`, tipo: 'h2'},
        { titulo: 'Características dos ácidos', texto: `Os ácidos apresentam algumas características gerais:
            - Em solução aquosa, aumentam a concentração de H₃O⁺.
            - Geralmente apresentam sabor azedo, mas nunca devem ser experimentados para identificação.
            - Podem conduzir corrente elétrica quando dissolvidos em água, devido à presença de íons.
            - Podem reagir com determinadas bases, formando sal e água.
            - Alteram a coloração de indicadores ácido-base.`, tipo: 'h3'},
        { titulo: 'Ionização dos ácidos', texto: `A maioria dos ácidos estudados no ensino médio é formada por substâncias moleculares que produzem íons quando entram em contato com a água.
            Esse processo recebe o nome de ionização.
            Exemplo: ácido clorídrico (HCl)
            HCl + H₂O -> H₃O⁺ + Cl⁻
            Observe que:
            - HCl é a molécula do ácido;
            - H₃O⁺ é o íon hidrônio;
            - Cl⁻ é o ânion cloreto.
            O H⁺ não permanece livre de maneira significativa na água: ele se associa às moléculas de H₂O, formando H₃O⁺.`, tipo: 'h3'},
        { titulo: 'Classificação dos ácidos quanto à presença de oxigênio', texto: `Os ácidos podem ser classificados em dois grupos:
            Hidrácidos
            São ácidos que não apresentam oxigênio em sua composição.
            Exemplos:
            Fórmula	Nome
            HCl - Ácido clorídrico
            HF - Ácido fluorídrico
            HBr - Ácido bromídrico
            HI - Ácido iodídrico
            H₂S - Ácido sulfídrico

            Oxiácidos
            São ácidos que apresentam oxigênio em sua composição.
            Exemplos:
            Fórmula	Nome
            H₂SO₄ - Ácido sulfúrico
            HNO₃ - Ácido nítrico
            H₃PO₄ - Ácido fosfórico
            H₂CO₃ - Ácido carbônico
            HClO₄ - Ácido perclórico`, tipo: 'h3'},
        { titulo: 'Classificação quanto ao número de hidrogênios ionizáveis', texto: `Os ácidos também podem ser classificados pela quantidade de hidrogênios ionizáveis presentes em sua fórmula.
            Monoácido -> 1 - Ex: HCl
            Diácido	-> 2 - Ex: H₂SO₄
            Triácido -> 3 - Ex: H₃PO₄
            Tetrácido -> 4 - Ex: H₄SiO₄
            Atenção: nem todo hidrogênio presente na fórmula de um ácido é necessariamente ionizável. Nos oxiácidos, geralmente são ionizáveis os hidrogênios ligados ao oxigênio.`, tipo: 'h3'},
        { titulo: 'Classificação quanto à força', texto: `A força de um ácido está relacionada ao seu grau de ionização em água, isto é, à proporção de moléculas que formam íons.
            Ácidos fortes
            Apresentam elevado grau de ionização em água.
            Exemplos:
            - HCl – ácido clorídrico;
            - HBr – ácido bromídrico;
            - HI – ácido iodídrico;
            - HNO₃ – ácido nítrico;
            - HClO₄ – ácido perclórico;
            - H₂SO₄ – ácido sulfúrico (considerando principalmente sua primeira ionização).

            Ácidos moderados
            Apresentam grau de ionização intermediário.
            Exemplo:
            - H₃PO₄ – ácido fosfórico.

            Ácidos fracos
            Apresentam baixo grau de ionização em água.
            Exemplos:
            - HF – ácido fluorídrico;
            - H₂CO₃ – ácido carbônico;
            - H₂S – ácido sulfídrico;
            - CH₃COOH – ácido acético.
            Importante: força ácida não é a mesma coisa que concentração. Um ácido forte pode estar muito diluído, enquanto um ácido fraco pode estar bastante concentrado.`, tipo: 'h3'},
        { titulo: 'Grau de ionização (α)', texto: `O grau de ionização representa a porcentagem de moléculas de um ácido que efetivamente formam íons em solução.
            Fórmula:
            α = n_ionizadas / n_inicial . 100
            Onde:
            - α = grau de ionização;
            - n_ionizadas = quantidade de moléculas ionizadas;
            - n_inicial = quantidade inicial de moléculas.
            Quanto maior o grau de ionização, maior tende a ser a força do ácido em condições comparáveis.`, tipo: 'h3'},
        { titulo: 'Nomenclatura dos ácidos', texto: `A nomenclatura dos ácidos depende da presença ou ausência de oxigênio.
            Hidrácidos
            Utiliza-se:
            Ácido + (nome do elemento + ídrico)
            Exemplos:
            - HCl: ácido clorídrico;
            - HBr: ácido bromídrico;
            - H₂S: ácido sulfídrico.

            Oxiácidos
            A nomenclatura tradicional utiliza terminações relacionadas ao estado de oxidação do elemento central.
            Terminação	Exemplo
            -oso	H₂SO₃ – ácido sulfuroso
            -ico	H₂SO₄ – ácido sulfúrico
            Quando existem mais de dois oxiácidos de um mesmo elemento, também podem ser utilizados os prefixos hipo- e per-.
            Exemplo da família dos oxiácidos do cloro:
            Fórmula	Nome
            HClO	Ácido hipocloroso
            HClO₂	Ácido cloroso
            HClO₃	Ácido clórico
            HClO₄	Ácido perclórico`, tipo: 'h3'},
        { titulo: 'Indicadores ácido-base', texto: `Os indicadores ácido-base são substâncias que mudam de cor de acordo com o pH do meio.
            A escala de pH geralmente varia de 0 a 14 em soluções aquosas diluídas a 25 °C:
            - pH menor que 7: meio ácido;
            - pH igual a 7: meio neutro;
            - pH maior que 7: meio básico.
            Exemplos de indicadores:
            - Papel de tornassol;
            - Fenolftaleína;
            - Indicador universal;
            - Extrato de repolho roxo.`, tipo: 'h3', imagem: ['../../imagens/quimica/acidos/tabela_ph_800px.jpg', '../../imagens/quimica/acidos/tabela_ph_600px.jpg', '../../imagens/quimica/acidos/tabela_ph_400px.jpg', '../../imagens/quimica/acidos/tabela_ph_200px.jpg', 'Imagem da tabela do pH']},
        { titulo: 'Resumo para memorizar', texto: `- Ácidos: aumentam a concentração de H₃O⁺ em água.
            - Hidrácidos: não possuem oxigênio.
            - Oxiácidos: possuem oxigênio.
            - Monoácidos: possuem um hidrogênio ionizável.
            - Diácidos: possuem dois hidrogênios ionizáveis.
            - Triácidos: possuem três hidrogênios ionizáveis.
            - Ácidos fortes: apresentam elevado grau de ionização.
            - Ácidos fracos: apresentam baixo grau de ionização.
            - pH ácido: menor que 7, em condições usuais de referência.
            Regra principal: para classificar um ácido, observe três aspectos: presença de oxigênio, quantidade de hidrogênios ionizáveis e grau de ionização.`, tipo: 'h3'},
    ],
    //Bases
    Bas: [
        { titulo: 'bases', texto: `As bases são uma das principais funções inorgânicas estudadas na Química. Estão presentes em produtos de limpeza, medicamentos, fertilizantes e em diversos processos industriais.
            Segundo a Teoria de Arrhenius, bases são substâncias que, quando dissolvidas em água, liberam íons hidróxido (OH⁻).`, tipo: 'h2'},
        { titulo: 'Características das bases', texto: `As bases apresentam algumas características gerais:
            - Liberam íons OH⁻ em solução aquosa.
            - Podem conduzir corrente elétrica quando dissolvidas em água, devido à presença de íons.
            - Alteram a coloração de determinados indicadores ácido-base.
            - Reagem com ácidos em processos de neutralização.
            - Muitas apresentam sensação escorregadia ao contato, mas nunca devem ser tocadas ou experimentadas para identificação.`, tipo: 'h3'},
        { titulo: 'Dissociação iônica das bases', texto: `A maioria das bases estudadas no ensino médio é formada por compostos iônicos que, ao serem dissolvidos em água, separam seus íons.
            Esse processo recebe o nome de dissociação iônica.
            Exemplo: hidróxido de sódio (NaOH)
            NaOH₍ₛ₎ - H₂O -> Na₍ₐᵩ₎ + OH₍ₐᵩ₎
            Observe que:
            - NaOH é o composto básico;
            - Na⁺ é o cátion sódio;
            - OH⁻ é o ânion hidróxido.
            O íon OH⁻ é responsável pela característica básica da solução segundo Arrhenius.`, tipo: 'h3'},
        { titulo: 'Classificação quanto ao número de hidroxilas (OH⁻)', texto: `As bases podem ser classificadas de acordo com a quantidade de grupos hidróxido presentes em sua fórmula.
            Monobase -> 1 - Ex: NaOH
            Dibase -> 2 - Ex: Ca(OH)₂
            Tribase -> 3 - Ex: Al(OH)₃
            Tetrabase -> 4 - Ex: Sn(OH)₄
            Exemplos:
            - NaOH: hidróxido de sódio.
            - Mg(OH)₂: hidróxido de magnésio.
            - Fe(OH)₃: hidróxido de ferro III.
            - Pb(OH)₄: hidróxido de chumbo IV.`, tipo: 'h3'},
        { titulo: 'Classificação quanto à força', texto: `A força de uma base está relacionada ao seu grau de dissociação em água, ou seja, à proporção de unidades da base que liberam íons OH⁻.
            Bases fortes
            Apresentam elevado grau de dissociação em água.
            São geralmente os hidróxidos dos metais alcalinos (família 1A) e de alguns metais alcalino-terrosos (família 2A).
            Exemplos:
            - NaOH – hidróxido de sódio;
            - KOH – hidróxido de potássio;
            - Ba(OH)₂ – hidróxido de bário;
            - Ca(OH)₂ – hidróxido de cálcio.

            Bases fracas
            Apresentam baixo grau de dissociação em água.
            Exemplos:
            - NH₄OH – hidróxido de amônio (representação tradicional da amônia em água);
            - Al(OH)₃ – hidróxido de alumínio;
            - Mg(OH)₂ – hidróxido de magnésio.

            Atenção: força não é solubilidade.
            Uma base pode ser forte e pouco solúvel em água. O hidróxido de cálcio, por exemplo, é considerado uma base forte, embora apresente solubilidade limitada.`, tipo: 'h3'},
        { titulo: 'Classificação quanto à solubilidade', texto: `As bases também podem ser classificadas conforme sua capacidade de se dissolver em água.
            Solúveis -> Dissolvem-se facilmente - Ex: NaOH e KOH
            Pouco solúveis -> Dissolvem-se em quantidade limitada - Ex: Ca(OH)₂
            Praticamente -> insolúveis	Apresentam solubilidade muito baixa - Ex: Al(OH)₃ e Fe(OH)₃

            De maneira geral:
            - Hidróxidos dos metais alcalinos são solúveis.
            - Hidróxidos dos metais alcalino-terrosos apresentam solubilidade variável.
            - A maioria dos demais hidróxidos é pouco solúvel ou praticamente insolúvel.`, tipo: 'h3'},
        { titulo: 'Nomenclatura das bases', texto: `A nomenclatura das bases segue uma regra relativamente simples:
            Hidróxido de + nome do elemento
            Quando o elemento apresenta mais de um número de oxidação, utiliza-se um algarismo romano para indicar sua carga.
            Exemplos:
            Fórmula	Nome
            NaOH	Hidróxido de sódio
            KOH	Hidróxido de potássio
            Ca(OH)₂	Hidróxido de cálcio
            Al(OH)₃	Hidróxido de alumínio
            Fe(OH)₂	Hidróxido de ferro II
            Fe(OH)₃	Hidróxido de ferro III
            CuOH	Hidróxido de cobre I
            Cu(OH)₂	Hidróxido de cobre II`, tipo: 'h3'},
        { titulo: 'Resumo para memorizar', texto: `Bases: liberam OH⁻ em solução aquosa segundo Arrhenius.
            Monobases: possuem um grupo OH⁻.
            Dibases: possuem dois grupos OH⁻.
            Tribases: possuem três grupos OH⁻.
            Bases fortes: apresentam elevado grau de dissociação.
            Bases fracas: apresentam baixo grau de dissociação.
            Bases solúveis: dissolvem-se facilmente em água.
            Neutralização: reação entre ácido e base, geralmente formando sal e água.
            Regra principal: para identificar uma base pela teoria de Arrhenius, observe se ela libera íons OH⁻ em solução aquosa. Não confunda quantidade de hidroxilas, força e solubilidade: são três classificações diferentes.`, tipo: 'h3'},
    ],
    //Sais
    Sai: [
        { titulo: 'sais', texto: `Os sais são compostos químicos iônicos formados por cátions (íons positivos) e ânions (íons negativos). Em geral, são produzidos por uma reação de neutralização entre um ácido e uma base.
            Nessa reação, os íons H⁺ do ácido reagem com os íons OH⁻ da base, formando água. Os íons restantes formam o sal.`, tipo: 'h2'},
        { titulo: 'Características dos sais', texto: `Os sais apresentam algumas propriedades gerais:
            - São compostos iônicos, formados por cátions e ânions.
            - Muitos são sólidos em temperatura ambiente.
            - Geralmente apresentam altos pontos de fusão e ebulição.
            - Podem conduzir corrente elétrica quando dissolvidos em água ou fundidos, caso tenham íons livres para se movimentar.
            - Sua solubilidade em água varia conforme a composição química.
            Atenção: nem todo sal é solúvel em água. O cloreto de sódio (NaCl), por exemplo, é solúvel, enquanto o carbonato de cálcio (CaCO₃) apresenta baixa solubilidade.`, tipo: 'h3'},
        { titulo: 'Classificação dos sais', texto: `Os sais podem ser classificados de acordo com sua composição e com a presença de hidrogênios ionizáveis ou grupos hidroxila.
            Sais normais (neutros)
            São formados quando ocorre a substituição de todos os hidrogênios ionizáveis do ácido por cátions.
            Exemplos:
            - NaCl — cloreto de sódio.
            - K₂SO₄ — sulfato de potássio.
            - CaCO₃ — carbonato de cálcio.
            Apesar do nome, um sal normal não necessariamente produz uma solução com pH igual a 7. Isso depende da reação dos seus íons com a água.

            Sais ácidos (hidrogenossais)
            São sais que ainda apresentam hidrogênios ionizáveis em sua composição, pois a neutralização do ácido foi parcial.
            Exemplos:
            - NaHCO₃ — hidrogenocarbonato de sódio (bicarbonato de sódio).
            - NaHSO₄ — hidrogenossulfato de sódio.
            - KH₂PO₄ — di-hidrogenofosfato de potássio.

            Sais básicos (hidroxissais)
            São sais que apresentam grupos hidroxila (OH) em sua composição, geralmente devido à neutralização parcial de uma base.
            Exemplo:
            Mg(OH)Cl
            Nome: hidroxicloreto de magnésio.
            3.4. Sais duplos ou mistos
            São sais que apresentam dois cátions diferentes ou dois ânions diferentes em sua composição.
            Exemplos:
            - KAl(SO₄)₂ — sulfato duplo de potássio e alumínio.
            - CaNa₂(SO₄)₂ — sulfato duplo de cálcio e sódio.`, tipo: 'h3'},
        { titulo: 'Nomenclatura dos sais', texto: `A nomenclatura dos sais geralmente segue a estrutura:
            Nome do ânion + de + nome do cátion
            O nome do ânion depende do ácido que lhe deu origem.
            Ácido de origem	Ânion	Terminação
            Ácido terminado em -ídrico	Cloreto, sulfeto	-eto
            Ácido terminado em -ico	Sulfato, nitrato	-ato
            Ácido terminado em -oso	Sulfito, nitrito	-ito

            Exemplos:
            Fórmula	Nome
            NaCl	Cloreto de sódio
            CaS	Sulfeto de cálcio
            KNO₃	Nitrato de potássio
            Na₂SO₄	Sulfato de sódio
            CaSO₃	Sulfito de cálcio
            Na₂CO₃	Carbonato de sódio

            Quando o cátion pode apresentar diferentes números de oxidação, eles podem ser indicados por algarismos romanos.
            Exemplo:
            - FeCl₂ — cloreto de ferro (II).
            - FeCl₃ — cloreto de ferro (III).`, tipo: 'h3'},
        { titulo: 'Reações de formação dos sais', texto: `A principal reação estudada no ensino médio é a neutralização entre ácidos e bases.
            Neutralização total
            Ocorre quando todos os hidrogênios ionizáveis do ácido são neutralizados pelos grupos OH da base.
            HCl + NaOH -> NaCl + H₂O
            Outro exemplo:
            H₂SO₄ + 2NaOH -> Na₂SO_4 + 2H₂O

            Neutralização parcial
            Ocorre quando apenas parte dos hidrogênios ionizáveis do ácido ou dos grupos OH da base é neutralizada.
            Exemplo:
            H₂SO₄ + NaOH -> NaHSO₄ + H₂O
            O produto NaHSO₄ é um sal ácido, pois ainda apresenta um hidrogênio ionizável.`, tipo: 'h3'},
        { titulo: 'Dissociação dos sais em água', texto: `Quando um sal solúvel é colocado em água, seus íons se separam, processo chamado de dissociação iônica.
            Exemplo:
            NaCl₍ₛ₎ -> Na⁺₍ₐᵩ₎ + Cl⁻₍ₐᵩ₎
            Isso significa que o cloreto de sódio se separa em íons sódio e cloreto na solução.
            Outro exemplo:
            CaCl₂ -> Ca⁺² + 2Cl⁻
            Observe que a quantidade de íons precisa respeitar a fórmula do composto e sua neutralidade elétrica.`, tipo: 'h3'},
        { titulo: 'Resumo geral', texto: `Sal normal -> Não apresenta H ionizável nem OH na fórmula
            Sal ácido -> Apresenta hidrogênio ionizável
            Sal básico -> Apresenta grupo OH na fórmula
            Sal duplo ou misto -> Apresenta mais de um tipo de cátion ou ânion

            Pontos importantes para memorizar:
            - Sais são compostos iônicos formados por cátions e ânions.
            - A neutralização entre ácido e base é uma forma comum de produzir sais.
            - Sais solúveis podem sofrer dissociação iônica em água.
            - A presença de hidrogênio ou OH na fórmula ajuda a identificar sais ácidos e básicos.
            - Sal normal não significa necessariamente solução neutra.`, tipo: 'h3'},
    ],
    //Óxidos
    Oxi: [
        { titulo: 'óxidos', texto: `Os óxidos são compostos binários, ou seja, formados por apenas dois elementos químicos, sendo um deles obrigatoriamente o oxigênio.
            Na maioria dos óxidos estudados no ensino médio, o oxigênio apresenta número de oxidação (NOX) igual a −2.
            Exemplos:
            - CO₂ — dióxido de carbono.
            - CaO — óxido de cálcio.
            - Fe₂O₃ — óxido de ferro (III).
            - SO₃ — trióxido de enxofre.
            Atenção: nem todo composto que contém oxigênio é um óxido. Por exemplo, H₂SO₄ (ácido sulfúrico) não é um óxido, pois possui três elementos químicos.`, tipo: 'h2'},
        { titulo: 'Classificação dos óxidos', texto: `Os óxidos podem ser classificados de acordo com seu comportamento químico, principalmente em relação à reação com água, ácidos e bases.
            Óxidos básicos
            São geralmente formados por metais e apresentam comportamento básico.
            Podem reagir com água, formando bases, ou com ácidos, formando sal e água.
            Exemplo com água:
            CaO + H₂O -> Ca(OH)₂
            O óxido de cálcio reage com água e forma hidróxido de cálcio.
            Exemplo com ácido:
            CaO + 2HCl -> CaCl₂ + H₂O
            Exemplos de óxidos básicos:
            - Na₂O — óxido de sódio.
            - CaO — óxido de cálcio.
            - MgO — óxido de magnésio.
            - FeO — óxido de ferro (II).

            Óxidos ácidos
            São geralmente formados por ametais e apresentam comportamento ácido.
            Podem reagir com água, formando ácidos, ou com bases, formando sal e água.
            Exemplo com água:
            SO₃ + H₂O -> H₂SO₄
            O trióxido de enxofre reage com água e forma ácido sulfúrico.
            Exemplo com base:
            CO₂ + 2NaOH -> Na₂CO₃ + H₂O
            Exemplos de óxidos ácidos:
            - CO₂ — dióxido de carbono.
            - SO₂ — dióxido de enxofre.
            - SO₃ — trióxido de enxofre.
            - N₂O₅ — pentóxido de dinitrogênio.

            Óxidos anfóteros
            São óxidos que podem reagir tanto com ácidos quanto com bases, apresentando comportamento anfótero.
            Exemplo:
            O óxido de alumínio (Al₂O₃) pode reagir com ácidos:
            Al₂O₃ + 6HCl -> 2AlCl₃ + 3H₂O
            Também pode reagir com bases fortes, formando aluminatos.
            Exemplos:
            - Al₂O₃ — óxido de alumínio.
            - ZnO — óxido de zinco.
            - BeO — óxido de berílio.

            Óxidos neutros
            São óxidos que não apresentam comportamento ácido ou básico significativo nas reações comuns estudadas no ensino médio.
            Geralmente, não reagem com água para formar ácidos ou bases.
            Exemplos:
            - CO — monóxido de carbono.
            - NO — monóxido de nitrogênio.
            - N₂O — monóxido de dinitrogênio.

            Peróxidos
            São compostos que apresentam o grupo O₂⁻², no qual cada oxigênio possui NOX igual a −1.
            Diferentemente dos óxidos comuns, nos peróxidos o oxigênio não apresenta NOX −2.
            Exemplos:
            - H₂O₂ — peróxido de hidrogênio.
            - Na₂O₂ — peróxido de sódio.
            - CaO₂ — peróxido de cálcio.
            Exemplo de decomposição do peróxido de hidrogênio:
            2H₂O_₂ -> 2H₂O + O₂`, tipo: 'h3'},
        { titulo: 'Nomenclatura dos óxidos', texto: `A nomenclatura depende dos elementos presentes e da quantidade de átomos na fórmula.
            Nomenclatura com prefixos
            É muito utilizada para óxidos moleculares, especialmente os formados por ametais.
            Prefixo	Quantidade
            Mono - 1
            Di - 2
            Tri - 3
            Tetra - 4
            Penta - 5
            Hexa - 6
            Hepta - 7
            A estrutura é:
            Prefixo + óxido de + prefixo + elemento
            Exemplos:
            Fórmula	Nome
            CO -> Monóxido de carbono
            CO₂ -> Dióxido de carbono
            SO₂ -> Dióxido de enxofre
            SO₃ -> Trióxido de enxofre
            N₂O₅ -> Pentóxido de dinitrogênio

            Nomenclatura com número de oxidação
            É utilizada principalmente para óxidos metálicos quando o elemento pode apresentar diferentes números de oxidação.
            A estrutura é:
            Óxido de + elemento + (NOX)
            Exemplos:
            Fórmula	Nome
            FeO	Óxido de ferro (II)
            Fe₂O₃	Óxido de ferro (III)
            Cu₂O	Óxido de cobre (I)
            CuO	Óxido de cobre (II)
            Quando o elemento apresenta apenas um NOX comum naquele contexto, o algarismo romano pode ser dispensado.`, tipo: 'h3'},
        { titulo: 'Número de oxidação (NOX) nos óxidos', texto: `Para determinar a fórmula de um óxido, é importante compreender o número de oxidação dos elementos.
            Nos óxidos comuns, o oxigênio apresenta NOX −2.
            Como um composto neutro deve apresentar soma dos NOX igual a zero, podemos descobrir o NOX do outro elemento.
            Exemplo: Fe₂O₃
            Sabemos que:
            - Ferro (Fe): NOX desconhecido.
            - Oxigênio (O): NOX −2.
            Montando a equação:
            2x + 3(-2) = 0
            2x - 6 = 0
            2x = 6
            x = +3
            Portanto, o ferro apresenta NOX +3, e o composto é chamado de óxido de ferro (III).`, tipo: 'h3'},
        { titulo: 'Resumo geral', texto: `Básico	Geralmente reage com ácidos	CaO
            Ácido	Geralmente reage com bases	CO₂
            Anfótero	Reage com ácidos e bases	Al₂O₃
            Neutro	Não apresenta comportamento ácido ou básico significativo	CO
            Peróxido	Oxigênio com NOX −1	H₂O₂

            Pontos importantes para memorizar:
            - Óxidos são compostos binários que possuem oxigênio.
            - Nos óxidos comuns, o oxigênio apresenta NOX −2.
            - Nos peróxidos, o oxigênio apresenta NOX −1.
            - Óxidos básicos são geralmente formados por metais.
            - Óxidos ácidos são geralmente formados por ametais.
            - Óxidos anfóteros podem reagir com ácidos e bases.`, tipo: 'h3'},
    ],
    //Tipos de Reações Inorgânicas
    TI: [
        { titulo: 'tipos de reações inorgânicas', texto: `As reações inorgânicas são transformações químicas nas quais uma ou mais substâncias reagem, formando novas substâncias com propriedades e composições diferentes.
            Essas transformações são representadas por equações químicas, nas quais os reagentes aparecem à esquerda e os produtos à direita.
            Exemplo:
            2H₂ + O₂ -> 2H₂O
            - Reagentes: hidrogênio (H₂) e oxigênio (O₂).
            - Produto: água (H₂O).
            - A seta indica o sentido da transformação química.
            As principais reações inorgânicas são divididas em quatro tipos:
            1. Síntese ou adição.
            2. Decomposição ou análise.
            3. Simples troca ou deslocamento.
            4. Dupla troca.`, tipo: 'h2'},
        { titulo: 'Reação de síntese ou adição', texto: `É uma reação na qual duas ou mais substâncias se combinam para formar um único produto.
            Representação geral:
            A + B -> AB

            Exemplos:
            Formação da água:
            2H₂ + O₂ -> 2H₂O

            Formação do óxido de magnésio:
            2Mg + O₂ -> 2MgO

            Formação do cloreto de sódio:
            2Na + Cl₂ -> 2NaCl

            Características:
            - Dois ou mais reagentes formam um único produto.
            - Pode envolver substâncias simples, compostas ou ambas.
            - É frequentemente chamada de reação de combinação.`, tipo: 'h3'},
        { titulo: 'Reação de decomposição ou análise', texto: `É uma reação na qual uma única substância se divide, formando duas ou mais substâncias diferentes.
            Representação geral:
            AB -> A + B

            Exemplos:
            Decomposição do carbonato de cálcio:
            CaCO₃ -> CaO + CO₂

            Decomposição da água oxigenada:
            2H₂O₂ -> 2H₂O + O₂

            Decomposição da água por eletrólise:
            2H₂O -> 2H₂ + O₂

            Características:
            - Existe apenas um reagente.
            - São formados dois ou mais produtos.
            - Pode ocorrer por aquecimento, eletricidade ou ação da luz, dependendo da substância.
            Classificações específicas da decomposição
            Algumas reações de decomposição recebem nomes de acordo com a fonte de energia utilizada:
            Pirólise -> Calor
            Eletrólise -> Energia elétrica
            Fotólise -> Luz`, tipo: 'h3'},
        { titulo: 'Reação de simples troca ou deslocamento', texto: `É uma reação na qual uma substância simples reage com uma substância composta, deslocando um de seus elementos.
            Representação geral:
            A + BC -> AC + B
            Isso acontece quando o elemento isolado apresenta maior tendência de reação do que o elemento que será deslocado.
            Exemplo:
            Zn + 2HCl -> ZnCl₂ + H₂
            Nesse caso:
            - O zinco (Zn) reage com o ácido clorídrico (HCl).
            - O zinco substitui o hidrogênio do ácido.
            - São formados cloreto de zinco (ZnCl₂) e gás hidrogênio (H₂).

            Série de reatividade
            Nem todo elemento consegue deslocar outro de um composto. Para que a reação aconteça, é necessário considerar a reatividade química dos elementos.
            Na simples troca entre metais, o metal livre geralmente precisa ser mais reativo que o metal presente no composto.
            Exemplo:
            Fe + CuSO₄ -> FeSO₄ + Cu
            O ferro desloca o cobre porque apresenta maior reatividade nessa comparação.
            Importante: se o metal livre for menos reativo que o metal do composto, a substituição geralmente não acontece.`, tipo: 'h3'},
        { titulo: 'Reação de dupla troca', texto: `É uma reação na qual dois compostos trocam seus íons ou partes constituintes, formando dois novos compostos.
            Representação geral:
            AB + CD -> AD + CB
            Geralmente, essas reações ocorrem em soluções aquosas e são favorecidas quando há formação de:
            - Um precipitado (sólido insolúvel).
            - Um gás.
            - Uma substância pouco ionizada, como a água.

            Formação de precipitado
            Ocorre quando dois compostos em solução reagem e formam um produto insolúvel, que se separa da solução.
            Exemplo:
            AgNO₃ + NaCl -> AgCl + NaNO₃
            O cloreto de prata (AgCl) é insolúvel em água e forma um precipitado.

            Formação de gás
            Algumas reações de dupla troca produzem substâncias instáveis que se decompõem, liberando gases.
            Exemplo:
            Na₂CO₃ + 2HCl -> 2NaCl + H₂O + CO₂
            O ácido clorídrico reage com o carbonato de sódio, formando água, sal e dióxido de carbono.

            Reação de neutralização
            É um caso importante de reação entre ácido e base, frequentemente estudado dentro das reações de dupla troca.
            Ocorre quando os íons H⁺ do ácido reagem com os íons OH⁻ da base, formando água.
            Exemplo:
            HCl + NaOH -> NaCl + H₂O
            Produtos:
            - NaCl: sal.
            - H₂O: água.`, tipo: 'h3'},
        { titulo: 'Comparação entre os quatro tipos de reações', texto: `Síntese - A + B → AB - Vários reagentes, um produto
            Decomposição - AB → A + B - Um reagente, vários produtos
            Simples troca - A + BC → AC + B - Um elemento desloca outro
            Dupla troca - AB + CD → AD + CB - Dois compostos trocam íons`, tipo: 'h3'},
    ],
}

catalogo.Quimica = conteudosQuimica