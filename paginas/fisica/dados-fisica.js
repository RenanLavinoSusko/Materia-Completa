const conteudosFisica = {
    // FÍSICA A — CINEMÁTICA E ENERGIA
    GF: [
        {
            titulo: "grandezas físicas",
            texto: `Grandezas físicas são propriedades de fenômenos, corpos ou sistemas que podem ser medidas ou determinadas quantitativamente. A Física utiliza grandezas para descrever, comparar e prever fenômenos naturais.

Uma grandeza física pode ser expressa por um valor numérico acompanhado de uma unidade. Por exemplo, uma distância de 5 metros representa uma medida de comprimento.

As grandezas podem ser classificadas como escalares ou vetoriais. Grandezas escalares são determinadas por valor numérico e unidade, enquanto grandezas vetoriais também exigem direção e sentido, dependendo da representação.

A padronização das unidades permite que medidas realizadas em diferentes locais e experimentos possam ser comparadas.`,
            tipo: "h2",
        },
        {
            titulo: "Sistema Internacional de Unidades",
            texto: `O Sistema Internacional de Unidades (SI) é um sistema padronizado utilizado para expressar grandezas físicas.

As sete grandezas fundamentais do SI são:

Comprimento: metro (m).

Massa: quilograma (kg).

Tempo: segundo (s).

Temperatura termodinâmica: kelvin (K).

Corrente elétrica: ampere (A).

Quantidade de substância: mol (mol).

Intensidade luminosa: candela (cd).

Grandezas derivadas são obtidas a partir de combinações das grandezas fundamentais. Por exemplo, velocidade é expressa em metros por segundo (m/s), enquanto força é expressa em newtons (N), equivalentes a kg·m/s².

O uso correto das unidades é fundamental para evitar erros em cálculos e interpretações físicas.`,
            tipo: "h3",
            imagem: ['../../imagens/fisica/fisica_a/grand_fisicas/grandezas_fundamentais_800px.jpg', '../../imagens/fisica/fisica_a/grand_fisicas/grandezas_fundamentais_600px.jpg', '../../imagens/fisica/fisica_a/grand_fisicas/grandezas_fundamentais_400px.jpg', '../../imagens/fisica/fisica_a/grand_fisicas/grandezas_fundamentais_200px.jpg', 'Infográfico das sete grandezas fundamentais do Sistema Internacional de Unidades (SI), apresentando nome, unidade, símbolo e instrumento de medição quando aplicável.']
        },
        {
            titulo: "Grandezas escalares e vetoriais",
            texto: `Grandezas escalares são descritas por um valor numérico e uma unidade, sem necessidade de direção e sentido. Exemplos incluem massa, temperatura, tempo, energia e volume.

Grandezas vetoriais necessitam de módulo, direção e sentido para serem completamente descritas. Exemplos incluem deslocamento, velocidade, aceleração e força.

Por exemplo, dizer que um objeto se desloca a 20 m/s informa apenas o módulo da velocidade. Para descrever completamente a velocidade vetorial, é necessário indicar também sua direção e seu sentido.

A distinção entre grandezas escalares e vetoriais é essencial para compreender movimentos e interações físicas.`,
            tipo: "h3",
        },
        {
            titulo: "Notação científica e ordem de grandeza",
            texto: `A notação científica permite representar números muito grandes ou muito pequenos de maneira compacta.

Um número pode ser escrito na forma a × 10ⁿ, em que a é um valor entre 1 e 10 em módulo e n é um expoente inteiro.

Por exemplo, 3000000 pode ser representado como 3 × 10⁶, enquanto 0,000004 pode ser representado como 4 × 10⁻⁶.

A ordem de grandeza corresponde a uma potência de dez que permite estimar o tamanho de um valor. Ela é utilizada para simplificar cálculos e avaliar escalas físicas, como dimensões de átomos, distâncias astronômicas e velocidades.`,
            tipo: "h3",
        }
    ],

    FC: [
        {
            titulo: "fundamentos da cinemática",
            texto: `A Cinemática é a área da Mecânica que descreve os movimentos dos corpos sem investigar diretamente suas causas. Ela analisa posição, deslocamento, velocidade, aceleração e tempo.

Para estudar um movimento, é necessário estabelecer um referencial, que permite determinar posições e observar alterações ao longo do tempo.

O movimento e o repouso são relativos ao referencial escolhido. Um passageiro sentado em um ônibus está em repouso em relação ao ônibus, mas em movimento em relação à rua.

A Cinemática permite representar movimentos por meio de equações, tabelas, gráficos e modelos matemáticos.`,
            tipo: "h2",
        },
        {
            titulo: "Referencial, posição e trajetória",
            texto: `Referencial é o sistema utilizado para observar e descrever o movimento de um corpo. A posição de um objeto depende do referencial adotado.

Trajetória é o conjunto de posições ocupadas por um corpo durante seu movimento. Ela pode ser retilínea, circular ou curvilínea.

A trajetória observada pode variar de acordo com o referencial. Um objeto lançado dentro de um veículo em movimento pode apresentar trajetórias diferentes para um observador dentro do veículo e para outro localizado fora dele.

A posição é frequentemente representada pela coordenada x em movimentos unidimensionais, podendo também ser representada por coordenadas em duas ou três dimensões.`,
            tipo: "h3",
        },
        {
            titulo: "Deslocamento e distância percorrida",
            texto: `Deslocamento corresponde à diferença entre a posição final e a posição inicial de um corpo.

Em um movimento unidimensional, o deslocamento pode ser calculado por:

Δx = xfinal − xinicial.

O deslocamento é uma grandeza vetorial e considera a posição inicial e final, independentemente do caminho percorrido.

Distância percorrida corresponde ao comprimento total da trajetória realizada, sendo uma grandeza escalar.

Um indivíduo que percorre 10 metros para frente e retorna 10 metros apresenta distância percorrida de 20 metros, mas deslocamento igual a zero.

Essa distinção é importante para compreender velocidade média e movimento.`,
            tipo: "h3",
            imagem: ['../../imagens/fisica/fisica_a/fund_cinematica/automovel_movimento_800px.jpg', '../../imagens/fisica/fisica_a/fund_cinematica/automovel_movimento_600px.jpg', '../../imagens/fisica/fisica_a/fund_cinematica/automovel_movimento_400px.jpg', '../../imagens/fisica/fisica_a/fund_cinematica/automovel_movimento_200px.jpg', 'Ilustração de um móvel sobre uma trajetória retilínea, mostrando posição inicial, posição final, deslocamento, distância percorrida, referencial e sentido do movimento.']
        },
        {
            titulo: "Velocidade média",
            texto: `Velocidade média é a relação entre o deslocamento realizado e o intervalo de tempo correspondente.

A expressão matemática é:

vm = Δx / Δt.

Em movimentos unidimensionais, a velocidade média pode apresentar sinal positivo ou negativo, dependendo do sentido do deslocamento e do referencial.

O sinal não indica necessariamente se o movimento é mais rápido ou mais lento, mas a orientação do deslocamento em relação ao eixo escolhido.

A velocidade média não deve ser confundida com rapidez média, que utiliza a distância total percorrida dividida pelo intervalo de tempo.

Por exemplo, se um veículo percorre 120 km em 2 horas, sua rapidez média nesse percurso é de 60 km/h, considerando a distância total percorrida.`,
            tipo: "h3",
        },
        {
            titulo: "Aceleração média",
            texto: `A aceleração média representa a variação da velocidade em relação ao intervalo de tempo.

Sua expressão é:

am = Δv / Δt.

A aceleração é uma grandeza vetorial, expressa no SI em metros por segundo ao quadrado (m/s²).

Um corpo apresenta aceleração quando sua velocidade varia em módulo, direção ou sentido.

Em movimentos retilíneos, a aceleração pode indicar aumento ou redução da velocidade, dependendo da relação entre os sinais da velocidade e da aceleração.

A aceleração não significa necessariamente que o corpo está aumentando sua rapidez. Um objeto pode apresentar aceleração enquanto diminui sua rapidez.`,
            tipo: "h3",
        },
        {
            titulo: "Gráficos da Cinemática",
            texto: `Os gráficos permitem representar visualmente o comportamento de grandezas físicas ao longo do tempo.

No gráfico posição versus tempo, a inclinação representa a velocidade, considerando a derivada da posição em relação ao tempo.

No gráfico velocidade versus tempo, a inclinação representa a aceleração. A área sob o gráfico, considerando sinais, representa o deslocamento.

No gráfico aceleração versus tempo, a área sob o gráfico representa a variação da velocidade.

A interpretação dos gráficos permite compreender movimentos sem depender exclusivamente de equações.`,
            tipo: "h3",
        }
    ],

    MU: [
        {
            titulo: "movimento uniforme",
            texto: `Movimento uniforme é aquele em que a velocidade permanece constante ao longo do tempo. Em um movimento uniforme retilíneo, o corpo percorre deslocamentos iguais em intervalos de tempo iguais.

Como a velocidade permanece constante, a aceleração é nula.

A posição varia linearmente com o tempo, permitindo representar o movimento por meio de uma equação horária simples.

O movimento uniforme pode ocorrer em diferentes sentidos, dependendo da orientação do referencial escolhido.`,
            tipo: "h2",
        },
        {
            titulo: "Equação horária do movimento uniforme",
            texto: `A equação horária do movimento uniforme é:

x = x0 + vt.

Nessa expressão:

x representa a posição final ou posição no instante t.

x0 representa a posição inicial.

v representa a velocidade constante.

t representa o tempo decorrido.

A equação permite determinar a posição de um corpo em qualquer instante, desde que o movimento seja uniforme e o referencial esteja definido.

Se um objeto parte da posição 5 m e apresenta velocidade de 3 m/s, após 4 segundos sua posição será 17 m, considerando o sentido positivo do movimento.`,
            tipo: "h3",
        },
        {
            titulo: "Movimento progressivo e retrógrado",
            texto: `Movimento progressivo ocorre quando a posição aumenta ao longo do tempo em relação ao eixo de referência, sendo representado por velocidade positiva.

Movimento retrógrado ocorre quando a posição diminui ao longo do tempo, sendo representado por velocidade negativa.

Essas classificações dependem da orientação do eixo escolhido.

Um movimento retrógrado não significa necessariamente que o corpo está desacelerando. Ele pode apresentar rapidez constante e deslocar-se continuamente no sentido negativo do eixo.`,
            tipo: "h3",
        },
        {
            titulo: "Gráfico posição versus tempo",
            texto: `No movimento uniforme, o gráfico posição versus tempo é uma reta.

A inclinação da reta corresponde à velocidade do movimento.

Uma reta crescente indica velocidade positiva, enquanto uma reta decrescente indica velocidade negativa.

Uma reta horizontal representa posição constante, caracterizando repouso em relação ao referencial.

A inclinação mais acentuada corresponde a um maior módulo de velocidade, desde que os eixos e escalas sejam comparáveis.`,
            tipo: "h3",
            imagem: ['../../imagens/fisica/fisica_a/movim_unif/grafico_mu_800px.jpg', '../../imagens/fisica/fisica_a/movim_unif/grafico_mu_600px.jpg', '../../imagens/fisica/fisica_a/movim_unif/grafico_mu_400px.jpg', '../../imagens/fisica/fisica_a/movim_unif/grafico_mu_200px.jpg', 'Gráficos de posição versus tempo e velocidade versus tempo no movimento uniforme, mostrando uma reta crescente, uma reta decrescente e um caso de repouso, com eixos e unidades.']
        },
        {
            titulo: "Encontro e ultrapassagem",
            texto: `Encontro entre corpos ocorre quando dois objetos ocupam a mesma posição no mesmo instante.

Para determinar o instante de encontro em movimentos uniformes, pode-se escrever a equação horária de cada corpo e igualar suas posições.

Ultrapassagem ocorre quando um corpo alcança outro que se desloca na mesma direção ou em direção diferente, dependendo da situação analisada.

A análise depende das posições iniciais, velocidades e referencial utilizado.

Problemas de encontro e ultrapassagem são aplicações importantes da equação horária do movimento uniforme.`,
            tipo: "h3",
            imagem: []
        }
    ],

    MUV: [
        {
            titulo: "movimento uniformemente variado",
            texto: `Movimento uniformemente variado é aquele em que a aceleração permanece constante ao longo do tempo.

Nesse movimento, a velocidade varia uniformemente, enquanto a posição pode variar de maneira quadrática em relação ao tempo.

O movimento uniformemente variado pode apresentar aumento ou redução da rapidez, dependendo da relação entre velocidade e aceleração.

Esse modelo é utilizado para descrever situações como movimentos de veículos acelerando de maneira constante e determinados movimentos de queda, quando a resistência do ar pode ser desprezada.`,
            tipo: "h2",
        },
        {
            titulo: "Equação da velocidade",
            texto: `A equação da velocidade no movimento uniformemente variado é:

v = v0 + at.

Nessa expressão:

v representa a velocidade no instante t.

v0 representa a velocidade inicial.

a representa a aceleração constante.

t representa o intervalo de tempo.

A equação permite calcular a velocidade de um corpo quando sua aceleração e o intervalo de tempo são conhecidos.

O sinal da aceleração depende da orientação do eixo e não deve ser interpretado isoladamente como aumento ou redução da rapidez.`,
            tipo: "h3",
        },
        {
            titulo: "Equação horária da posição",
            texto: `A posição no movimento uniformemente variado pode ser calculada pela expressão:

x = x0 + v0t + at²/2.

A equação relaciona a posição, o tempo, a velocidade inicial e a aceleração.

O termo at²/2 representa a contribuição da aceleração para a variação da posição.

A equação é utilizada quando se deseja determinar a posição em determinado instante, conhecendo as condições iniciais e a aceleração constante.`,
            tipo: "h3",
        },
        {
            titulo: "Equação de Torricelli",
            texto: `A equação de Torricelli relaciona velocidade, velocidade inicial, aceleração e deslocamento, sem utilizar diretamente o tempo.

v² = v0² + 2aΔx.

Essa equação é útil quando o intervalo de tempo não é informado ou não precisa ser determinado.

Ela é válida para movimentos com aceleração constante e exige atenção aos sinais das grandezas utilizadas.

O deslocamento deve ser considerado em relação ao referencial escolhido.`,
            tipo: "h3",
        },
        {
            titulo: "Gráfico velocidade versus tempo",
            texto: `No movimento uniformemente variado, o gráfico velocidade versus tempo é uma reta, pois a velocidade varia linearmente com o tempo.

A inclinação da reta representa a aceleração.

A área sob o gráfico velocidade versus tempo representa o deslocamento, considerando áreas positivas e negativas em relação ao eixo do tempo.

Uma reta crescente representa aceleração positiva, enquanto uma reta decrescente representa aceleração negativa, considerando o eixo vertical como velocidade.`,
            tipo: "h3",
            imagem: ['../../imagens/fisica/fisica_a/movim_unifvari/grafico_muv_800px.jpg', '../../imagens/fisica/fisica_a/movim_unifvari/grafico_muv_600px.jpg', '../../imagens/fisica/fisica_a/movim_unifvari/grafico_muv_400px.jpg', '../../imagens/fisica/fisica_a/movim_unifvari/grafico_muv_200px.jpg', 'Gráficos de posição versus tempo, velocidade versus tempo e aceleração versus tempo no movimento uniformemente variado, destacando a relação entre inclinação, área e grandezas físicas.']
        },
        {
            titulo: "Queda livre e aceleração gravitacional",
            texto: `Queda livre é o movimento de um corpo submetido apenas à força gravitacional, desconsiderando a resistência do ar.

Próximo à superfície da Terra, a aceleração gravitacional pode ser aproximada por 9,8 m/s², sendo frequentemente simplificada para 10 m/s² em exercícios.

A aceleração gravitacional possui direção vertical e sentido para baixo.

Quando a resistência do ar é desprezada, corpos de diferentes massas apresentam a mesma aceleração gravitacional nas mesmas condições.

A queda livre inclui movimentos de descida e, em determinados casos, movimentos de subida, desde que a única aceleração relevante seja a gravitacional.`,
            tipo: "h3",
            imagem: []
        }
    ],

    CM: [
        {
            titulo: "composição de movimentos",
            texto: `Composição de movimentos ocorre quando o movimento de um corpo pode ser analisado considerando diferentes componentes ou movimentos simultâneos.

Em situações envolvendo duas ou mais dimensões, a posição, velocidade e aceleração podem ser decompostas em componentes independentes.

A análise por componentes permite estudar movimentos complexos por meio de movimentos mais simples, geralmente organizados em eixos coordenados.

Esse método é utilizado em situações como deslocamento de barcos em rios, movimento de objetos em veículos e trajetória de projéteis.`,
            tipo: "h2",
        },
        {
            titulo: "Movimentos independentes",
            texto: `Em movimentos analisados em duas dimensões, as componentes do movimento em eixos perpendiculares podem ser tratadas separadamente, quando o modelo físico permite.

Por exemplo, em um movimento no plano, a posição pode ser representada pelas coordenadas x e y.

O movimento horizontal e o movimento vertical podem apresentar comportamentos diferentes, mas ocorrem simultaneamente.

A composição dessas componentes permite reconstruir a trajetória do corpo.`,
            tipo: "h3",
        },
        {
            titulo: "Composição de velocidades",
            texto: `A velocidade resultante corresponde à soma vetorial das velocidades consideradas em determinado referencial.

Quando as velocidades são perpendiculares, o módulo da velocidade resultante pode ser calculado pelo teorema de Pitágoras.

Quando os vetores apresentam outras orientações, a soma vetorial exige a análise de componentes ou de relações trigonométricas.

A composição de velocidades é utilizada para compreender movimentos relativos, como o deslocamento de um barco em relação à água e à margem.`,
            tipo: "h3",
            imagem: ['../../imagens/fisica/fisica_a/comp_movim/vel_resultante_800px.jpg', '../../imagens/fisica/fisica_a/comp_movim/vel_resultante_600px.jpg', '../../imagens/fisica/fisica_a/comp_movim/vel_resultante_400px.jpg', '../../imagens/fisica/fisica_a/comp_movim/vel_resultante_200px.jpg', 'Ilustração de um barco atravessando um rio com correnteza, mostrando vetores de velocidade do barco, da correnteza e da velocidade resultante, com representação vetorial.']
        },
        {
            titulo: "Movimento relativo",
            texto: `Movimento relativo descreve o movimento de um corpo em relação a outro corpo ou referencial.

A velocidade de um objeto em relação a outro pode ser determinada pela diferença vetorial entre suas velocidades, quando ambas estão expressas no mesmo referencial.

Por exemplo, um passageiro caminhando dentro de um trem apresenta uma velocidade em relação ao trem e outra em relação ao solo.

A velocidade observada depende do referencial utilizado, sendo importante definir claramente o sistema de observação.`,
            tipo: "h3",
            imagem: []
        }
    ],

    // FÍSICA A — LANÇAMENTOS E ENERGIA
    LH: [
        {
            titulo: "lançamento horizontal",
            texto: `Lançamento horizontal é um movimento de um corpo que inicialmente apresenta velocidade horizontal e passa a sofrer aceleração vertical devido à gravidade, considerando desprezível a resistência do ar.

Esse movimento pode ser analisado por meio de duas componentes independentes: movimento horizontal uniforme e movimento vertical uniformemente variado.

A trajetória resultante é parabólica, quando a gravidade é constante e a resistência do ar é desprezada.

O lançamento horizontal é um caso particular do movimento de projéteis.`,
            tipo: "h2",
            imagem: []
        },
        {
            titulo: "Movimento horizontal",
            texto: `No lançamento horizontal, a componente horizontal da velocidade permanece constante quando a resistência do ar é desprezada.

A posição horizontal pode ser determinada por:

x = x0 + v0x t.

A aceleração horizontal é nula no modelo ideal.

A componente horizontal do movimento não depende diretamente da altura inicial, embora a altura influencie o tempo de movimento e, consequentemente, o alcance horizontal.`,
            tipo: "h3",
        },
        {
            titulo: "Movimento vertical",
            texto: `A componente vertical do movimento é uniformemente variada devido à aceleração gravitacional.

Se o eixo vertical positivo estiver orientado para cima, a aceleração gravitacional será negativa.

A posição vertical pode ser calculada por:

y = y0 + v0y t + gt²/2, considerando g com sinal conforme o referencial.

No lançamento horizontal, a componente vertical inicial da velocidade é zero.

O tempo de queda depende da altura inicial e da aceleração gravitacional, desconsiderando a resistência do ar.`,
            tipo: "h3",
        },
        {
            titulo: "Tempo de queda e alcance",
            texto: `O tempo de queda pode ser determinado a partir da equação do movimento vertical.

Quando o corpo é lançado horizontalmente e a resistência do ar é desprezada, o tempo de queda depende da altura e da gravidade, não da velocidade horizontal inicial.

O alcance horizontal corresponde ao deslocamento horizontal durante o tempo de queda.

O alcance depende da velocidade horizontal inicial e do tempo de movimento.

A combinação entre movimento horizontal e vertical permite determinar a posição do corpo ao longo da trajetória.`,
            tipo: "h3",
            imagem: ['../../imagens/fisica/fisica_a/lanc_horiz/queda_horizontal_800px.jpg', '../../imagens/fisica/fisica_a/lanc_horiz/queda_horizontal_600px.jpg', '../../imagens/fisica/fisica_a/lanc_horiz/queda_horizontal_400px.jpg', '../../imagens/fisica/fisica_a/lanc_horiz/queda_horizontal_200px.jpg', 'Diagrama de lançamento horizontal de uma esfera a partir de uma altura, mostrando trajetória parabólica, componente horizontal constante da velocidade, queda vertical e aceleração da gravidade.']
        }
    ],

    LO: [
        {
            titulo: "lançamento oblíquo",
            texto: `Lançamento oblíquo é o movimento de um corpo lançado com velocidade inicial inclinada em relação à horizontal.

Desconsiderando a resistência do ar, o movimento pode ser dividido em componentes horizontal e vertical.

A componente horizontal da velocidade permanece constante, enquanto a componente vertical sofre aceleração gravitacional.

A trajetória resultante é parabólica, quando a gravidade é constante e o corpo permanece próximo à região em que essa aproximação é válida.

Esse modelo permite estudar alcance, altura máxima, tempo de voo e velocidade em diferentes posições.`,
            tipo: "h2",
        },
        {
            titulo: "Decomposição da velocidade inicial",
            texto: `A velocidade inicial pode ser decomposta em duas componentes perpendiculares.

Componente horizontal:

v0x = v0 cos θ.

Componente vertical:

v0y = v0 sen θ.

θ representa o ângulo de lançamento em relação à horizontal.

A decomposição permite analisar separadamente os movimentos horizontal e vertical.

As componentes dependem do ângulo de lançamento e do módulo da velocidade inicial.`,
            tipo: "h3",
        },
        {
            titulo: "Movimento horizontal",
            texto: `A componente horizontal do lançamento oblíquo é uniforme, quando a resistência do ar é desprezada.

A velocidade horizontal permanece constante ao longo da trajetória.

A posição horizontal pode ser determinada por:

x = x0 + v0 cos θ · t.

O deslocamento horizontal depende do tempo de movimento e da componente horizontal da velocidade inicial.`,
            tipo: "h3",
        },
        {
            titulo: "Movimento vertical",
            texto: `A componente vertical do lançamento oblíquo é uniformemente variada devido à gravidade.

A velocidade vertical varia ao longo da trajetória.

Na subida, a velocidade vertical diminui em módulo até atingir zero no ponto mais alto, considerando o eixo positivo para cima.

Na descida, a velocidade vertical passa a apresentar sentido para baixo.

A posição vertical pode ser determinada por:

y = y0 + v0 sen θ · t − gt²/2.

Essa expressão utiliza o eixo vertical positivo para cima e g como módulo da aceleração gravitacional.`,
            tipo: "h3",
        },
        {
            titulo: "Altura máxima",
            texto: `A altura máxima corresponde ao ponto mais alto da trajetória, no qual a componente vertical da velocidade é igual a zero, considerando o movimento ideal.

A altura máxima depende da componente vertical inicial da velocidade e da aceleração gravitacional.

O movimento horizontal continua ocorrendo mesmo quando a componente vertical da velocidade é zero.

A altura máxima pode ser calculada utilizando a equação de Torricelli aplicada ao movimento vertical.`,
            tipo: "h3",
        },
        {
            titulo: "Alcance e tempo de voo",
            texto: `O tempo de voo corresponde ao intervalo entre o lançamento e o instante em que o corpo retorna à altura de referência considerada.

O alcance horizontal corresponde ao deslocamento horizontal durante esse intervalo.

Quando o lançamento e a chegada ocorrem na mesma altura, o movimento é ideal e a resistência do ar é desprezada, determinadas relações simplificadas podem ser utilizadas para calcular o alcance.

O alcance depende do módulo da velocidade inicial, do ângulo de lançamento e da aceleração gravitacional.

Em condições ideais, lançamentos com ângulos complementares podem apresentar o mesmo alcance, quando a velocidade inicial é igual e as alturas inicial e final são iguais.`,
            tipo: "h3",
            imagem: ['../../imagens/fisica/fisica_a/lanc_obliquio/lanc_obliq_800px.jpg', '../../imagens/fisica/fisica_a/lanc_obliquio/lanc_obliq_600px.jpg', '../../imagens/fisica/fisica_a/lanc_obliquio/lanc_obliq_400px.jpg', '../../imagens/fisica/fisica_a/lanc_obliquio/lanc_obliq_200px.jpg', 'Diagrama de lançamento oblíquo de um projétil, mostrando ângulo de lançamento, componentes horizontal e vertical da velocidade inicial, trajetória parabólica, altura máxima e alcance horizontal.']
        }
    ],

    TE: [
        {
            titulo: "trabalho e energia",
            texto: `Trabalho e energia são conceitos fundamentais da Mecânica utilizados para analisar transformações e transferências de energia associadas aos movimentos e às interações.

Trabalho mecânico está relacionado à transferência de energia realizada por uma força quando ocorre deslocamento.

Energia é uma grandeza física associada à capacidade de produzir transformações, sendo utilizada em diferentes modelos físicos.

O estudo do trabalho permite relacionar forças, deslocamentos e variações de energia, frequentemente simplificando problemas mecânicos.`,
            tipo: "h2",
        },
        {
            titulo: "Trabalho de uma força constante",
            texto: `O trabalho realizado por uma força constante pode ser calculado pela expressão:

W = F · d · cos θ.

F representa o módulo da força.

d representa o deslocamento.

θ representa o ângulo entre a força e o deslocamento.

O trabalho é expresso em joules (J).

Quando a força possui o mesmo sentido do deslocamento, o trabalho é positivo.

Quando a força possui sentido oposto ao deslocamento, o trabalho é negativo.

Quando a força é perpendicular ao deslocamento, o trabalho é nulo.

O trabalho depende da força, do deslocamento e da orientação relativa entre ambos.`,
            tipo: "h3",
            imagem: ['../../imagens/fisica/fisica_a/trab_energia/trabalho_800px.jpg', '../../imagens/fisica/fisica_a/trab_energia/trabalho_600px.jpg', '../../imagens/fisica/fisica_a/trab_energia/trabalho_400px.jpg', '../../imagens/fisica/fisica_a/trab_energia/trabalho_200px.jpg', 'Ilustração de uma força aplicada sobre uma caixa em diferentes ângulos em relação ao deslocamento, destacando força, deslocamento, ângulo e trabalho realizado.']
        },
        {
            titulo: "Trabalho positivo, negativo e nulo",
            texto: `Trabalho positivo ocorre quando a força possui componente no sentido do deslocamento, contribuindo para a transferência de energia ao corpo.

Trabalho negativo ocorre quando a força possui componente oposta ao deslocamento, podendo reduzir a energia cinética do corpo.

Trabalho nulo ocorre quando a força não apresenta componente na direção do deslocamento ou quando não existe deslocamento.

A força centrípeta, em um movimento circular uniforme ideal, realiza trabalho nulo porque é perpendicular à velocidade instantânea e ao deslocamento tangencial.`,
            tipo: "h3",
        },
        {
            titulo: "Trabalho de forças variáveis",
            texto: `Quando a força varia ao longo do deslocamento, o trabalho pode ser calculado por meio da integral da componente da força na direção do deslocamento.

Em gráficos força versus posição, o trabalho corresponde à área sob a curva, considerando sinais.

A área pode representar trabalho positivo, negativo ou nulo, dependendo da orientação da força.

Essa abordagem permite analisar situações em que a força não permanece constante, como determinados sistemas elásticos.`,
            tipo: "h3",
        },
        {
            titulo: "Teorema do Trabalho e Energia Cinética",
            texto: `O teorema do trabalho e energia cinética afirma que o trabalho resultante realizado sobre um corpo é igual à variação de sua energia cinética.

Wresultante = ΔEc.

A energia cinética depende da massa e da velocidade do corpo.

O teorema permite relacionar trabalho, velocidade e deslocamento sem necessariamente calcular o tempo.

Quando o trabalho resultante é positivo, a energia cinética aumenta. Quando é negativo, a energia cinética diminui.

O teorema é uma aplicação importante da conservação e transformação de energia na Mecânica.`,
            tipo: "h3",
        }
    ],

    EC: [
        {
            titulo: "energia cinética",
            texto: `Energia cinética é a energia associada ao movimento de um corpo.

Ela depende da massa e do módulo da velocidade.

A energia cinética é uma grandeza escalar, expressa em joules.

Sua expressão matemática é:

Ec = mv²/2.

A energia cinética aumenta com a massa e com o quadrado da velocidade.

Quando a velocidade dobra, a energia cinética quadruplica, considerando a massa constante.

A energia cinética é sempre não negativa, no modelo clássico.`,
            tipo: "h2",
        },
        {
            titulo: "Energia cinética translacional",
            texto: `A energia cinética translacional corresponde à energia associada ao movimento de um corpo em relação a um referencial.

Ela depende do módulo da velocidade e da massa.

A expressão Ec = mv²/2 é utilizada para corpos tratados como partículas ou para o movimento translacional do centro de massa.

Em sistemas que apresentam rotação, também pode existir energia cinética rotacional.

A energia cinética total de determinados corpos pode envolver diferentes componentes de movimento.`,
            tipo: "h3",
            imagem: ['../../imagens/fisica/fisica_a/eng_cine/variacao_cinetica_800px.jpg', '../../imagens/fisica/fisica_a/eng_cine/variacao_cinetica_600px.jpg', '../../imagens/fisica/fisica_a/eng_cine/variacao_cinetica_400px.jpg', '../../imagens/fisica/fisica_a/eng_cine/variacao_cinetica_200px.jpg', 'Comparação entre dois objetos em movimento com diferentes massas e velocidades, ilustrando a relação entre massa, velocidade e energia cinética.']
        },
        {
            titulo: "Relação entre trabalho e energia cinética",
            texto: `O trabalho resultante realizado sobre um corpo modifica sua energia cinética.

Wresultante = Ecf − Eci.

Essa relação permite calcular variações de velocidade quando o trabalho das forças é conhecido.

Por exemplo, quando uma força resultante realiza trabalho positivo sobre um corpo, sua energia cinética aumenta.

Quando o trabalho resultante é negativo, a energia cinética diminui.

O teorema pode ser utilizado para resolver problemas de movimento em trajetórias retilíneas ou curvilíneas, desde que as grandezas envolvidas sejam corretamente analisadas.`,
            tipo: "h3",
        }
    ],

    EP: [
        {
            titulo: "energia potencial",
            texto: `Energia potencial é uma forma de energia associada à configuração ou posição de um sistema em relação a uma interação conservativa.

Ela pode ser associada à gravidade, à elasticidade e a outras interações conservativas.

A energia potencial depende da escolha de um referencial ou nível de referência, sendo geralmente importante analisar suas variações.

A energia potencial permite descrever transformações entre diferentes formas de energia, como ocorre em objetos elevados, sistemas de molas e movimentos mecânicos.`,
            tipo: "h2",
        },
        {
            titulo: "Energia potencial gravitacional",
            texto: `Energia potencial gravitacional é a energia associada à posição de um corpo em relação a um nível de referência, próximo à superfície terrestre.

A expressão simplificada é:

Ep = mgh.

m representa a massa.

g representa a aceleração gravitacional.

h representa a altura em relação ao nível de referência.

A energia potencial gravitacional depende da massa, da gravidade e da altura escolhida.

A variação da energia potencial gravitacional depende da diferença entre as alturas inicial e final.

O nível de referência pode ser escolhido convenientemente, desde que as diferenças de energia sejam corretamente calculadas.`,
            tipo: "h3",
        },
        {
            titulo: "Energia potencial elástica",
            texto: `Energia potencial elástica está associada à deformação de sistemas elásticos, como molas ideais.

A expressão para uma mola ideal é:

Ep = kx²/2.

k representa a constante elástica da mola.

x representa a deformação em relação à posição de equilíbrio.

A energia potencial elástica aumenta com o quadrado da deformação.

O modelo da mola ideal é utilizado quando a deformação está dentro de uma região em que a relação entre força e deformação pode ser aproximada pela Lei de Hooke.

Essa energia pode ser convertida em energia cinética durante o movimento de um sistema elástico.`,
            tipo: "h3",
            imagem: ['../../imagens/fisica/fisica_a/eng_poten/poten_elast_800px.jpg', '../../imagens/fisica/fisica_a/eng_poten/poten_elast_600px.jpg', '../../imagens/fisica/fisica_a/eng_poten/poten_elast_400px.jpg', '../../imagens/fisica/fisica_a/eng_poten/poten_elast_200px.jpg', 'Ilustração comparativa de energia potencial gravitacional em objetos posicionados em diferentes alturas e energia potencial elástica em uma mola comprimida e distendida.']
        }
    ],

    EM: [
        {
            titulo: "energia mecânica",
            texto: `Energia mecânica corresponde, em determinados sistemas, à soma da energia cinética e das energias potenciais associadas às interações conservativas.

Em = Ec + Ep.

A energia mecânica pode permanecer constante quando o sistema é isolado em relação às transferências relevantes e as forças que realizam trabalho são conservativas.

Quando forças dissipativas, como atrito, realizam trabalho, a energia mecânica pode diminuir ou aumentar, embora a energia total do sistema e de seu ambiente permaneça conservada em um sistema isolado.

O estudo da energia mecânica permite analisar movimentos sem necessariamente determinar todas as forças e acelerações em cada instante.`,
            tipo: "h2",
        },
        {
            titulo: "Conservação da energia mecânica",
            texto: `A conservação da energia mecânica ocorre quando o trabalho das forças não conservativas é nulo e as condições do sistema permitem a aplicação do modelo.

Em situações ideais, a energia cinética e a energia potencial podem transformar-se entre si, enquanto a soma permanece constante.

Por exemplo, durante a queda ideal de um objeto, a energia potencial gravitacional diminui e a energia cinética aumenta.

Em um sistema com mola ideal, a energia pode alternar entre energia potencial elástica e cinética.

A conservação da energia mecânica não significa que cada forma de energia permanece constante, mas que sua soma se mantém constante nas condições consideradas.`,
            tipo: "h3",

        },
        {
            titulo: "Forças conservativas e dissipativas",
            texto: `Forças conservativas são aquelas cujo trabalho depende apenas das posições inicial e final, não do caminho percorrido.

Força gravitacional e força elástica ideal são exemplos de forças conservativas.

Forças dissipativas, como o atrito em determinadas situações, podem transformar energia mecânica em outras formas, como energia térmica.

Em sistemas com forças dissipativas, a energia mecânica pode não permanecer constante.

A energia total continua conservada quando o sistema e suas transferências são considerados adequadamente, de acordo com o princípio de conservação da energia.`,
            tipo: "h3",

        },
        {
            titulo: "Transformações de energia",
            texto: `A energia pode transformar-se de uma forma para outra, dependendo das interações e processos envolvidos.

Em uma queda, energia potencial gravitacional pode transformar-se em energia cinética.

Em uma mola comprimida, energia potencial elástica pode transformar-se em energia cinética.

Em sistemas com atrito, parte da energia mecânica pode transformar-se em energia térmica.

Em máquinas e sistemas elétricos, energia pode ser transferida e transformada em diferentes formas.

A análise das transformações permite compreender o funcionamento de dispositivos, máquinas e fenômenos naturais.`,
            tipo: "h3",
            imagem: ['../../imagens/fisica/fisica_a/eng_mecan/transf_energia_800px.jpg', '../../imagens/fisica/fisica_a/eng_mecan/transf_energia_600px.jpg', '../../imagens/fisica/fisica_a/eng_mecan/transf_energia_400px.jpg', '../../imagens/fisica/fisica_a/eng_mecan/transf_energia_200px.jpg', 'Representação de uma montanha-russa em diferentes posições, mostrando a transformação entre energia potencial gravitacional e energia cinética, com indicação da energia mecânica.']
        }
    ],

    EPM: [
    {
        titulo: "estática do ponto material",
        texto: `A estática é a área da Mecânica que estuda as condições necessárias para que um corpo permaneça em equilíbrio. No estudo do ponto material, as dimensões do corpo são desprezadas, considerando-se que toda a sua massa esteja concentrada em um único ponto.

Um corpo está em equilíbrio estático quando permanece em repouso em relação a um referencial. Para que isso aconteça, a força resultante que atua sobre ele deve ser nula.

A condição de equilíbrio translacional é expressa por:

ΣF = 0

Em sistemas bidimensionais, essa condição pode ser dividida em duas equações:

ΣFx = 0
ΣFy = 0

Isso significa que a soma das forças na horizontal e na vertical deve ser igual a zero.

As principais forças estudadas são:

• Peso (P): força gravitacional exercida sobre o corpo, calculada por P = m · g.
• Força normal (N): força de contato perpendicular à superfície.
• Tração (T): força transmitida por cordas, fios ou cabos idealizados.
• Força de atrito (Fat): força que se opõe ao deslizamento ou à tendência de deslizamento entre superfícies.

Para resolver problemas de equilíbrio, normalmente é utilizado o diagrama de corpo livre, no qual todas as forças que atuam sobre o objeto são representadas por vetores.

Exemplo: um objeto suspenso por uma corda permanece em repouso quando a força de tração da corda equilibra seu peso, de modo que a força resultante seja nula.`,
        tipo: "h2",
        imagem: ['../../imagens/fisica/fisica_a/estatica_material/ponto_material_800px.jpg', '../../imagens/fisica/fisica_a/estatica_material/ponto_material_600px.jpg', '../../imagens/fisica/fisica_a/estatica_material/ponto_material_400px.jpg', '../../imagens/fisica/fisica_a/estatica_material/ponto_material_200px.jpg', "Diagrama de corpo livre de um objeto suspenso por uma corda em equilíbrio, mostrando o peso apontando para baixo e a força de tração apontando para cima, com vetores, ângulos e identificação das forças."]
    }
    ],

    ECE: [
        {
            titulo: "estática do corpo extenso",
            texto: `A estática do corpo extenso estuda as condições de equilíbrio de objetos cujas dimensões e distribuição de massa não podem ser desprezadas. Diferentemente do ponto material, além de analisar as forças, é necessário considerar os efeitos de rotação.

    Um corpo extenso pode apresentar movimento de translação e rotação. Para que permaneça em equilíbrio estático, duas condições devem ser satisfeitas simultaneamente:

    1. Equilíbrio translacional: a força resultante sobre o corpo deve ser nula.

    ΣF = 0

    2. Equilíbrio rotacional: o momento resultante, ou torque resultante, em relação a um eixo de rotação deve ser nulo.

    Στ = 0

    O torque, também chamado de momento de uma força, representa a capacidade de uma força provocar rotação em torno de um eixo ou ponto de apoio.

    Quando a força é perpendicular ao braço de alavanca, seu torque pode ser calculado por:

    τ = F · d

    Em que F representa a intensidade da força e d representa a distância perpendicular entre a linha de ação da força e o eixo de rotação, chamada braço de alavanca.

    Quando a força é aplicada inclinada, utiliza-se:

    τ = F · d · sen(θ)

    O sentido do torque pode ser horário ou anti-horário, sendo necessário estabelecer uma convenção de sinais para os cálculos.

    As alavancas são exemplos importantes de aplicação da estática dos corpos extensos. Elas são constituídas por uma barra rígida e um ponto de apoio, permitindo modificar a intensidade ou a direção de uma força.

    Exemplos cotidianos incluem gangorras, tesouras, abridores de garrafas e ferramentas.

    Para que uma alavanca permaneça em equilíbrio, os torques que tendem a girá-la em sentidos opostos devem se compensar, além de a força resultante ser nula.`,
            tipo: "h2",
            imagem: ['../../imagens/fisica/fisica_a/estatica_extenso/equilibrio_alavanca_800px.jpg', '../../imagens/fisica/fisica_a/estatica_extenso/equilibrio_alavanca_600px.jpg', '../../imagens/fisica/fisica_a/estatica_extenso/equilibrio_alavanca_400px.jpg', '../../imagens/fisica/fisica_a/estatica_extenso/equilibrio_alavanca_200px.jpg', "Diagrama de uma alavanca em equilíbrio mostrando ponto de apoio, força aplicada, força resistente, braços de alavanca, distâncias perpendiculares e torques em sentidos opostos."]    
        },
        {
            imagem: ['../../imagens/fisica/fisica_a/estatica_extenso/cond_equilibrio_800px.jpg', '../../imagens/fisica/fisica_a/estatica_extenso/cond_equilibrio_600px.jpg', '../../imagens/fisica/fisica_a/estatica_extenso/cond_equilibrio_400px.jpg', '../../imagens/fisica/fisica_a/estatica_extenso/cond_equilibrio_200px.jpg', "Ilustração de uma gangorra equilibrada com duas pessoas de massas diferentes posicionadas a distâncias diferentes do eixo central, mostrando a relação entre força e braço de alavanca."]
        }
    ],

    EF: [
        {
            titulo: "estática dos fluidos",
            texto: `A estática dos fluidos, também chamada de hidrostática, estuda os fluidos em repouso e as forças, pressões e propriedades associadas a eles. Os fluidos incluem líquidos e gases, embora os estudos introdutórios de hidrostática geralmente se concentrem nos líquidos.

    A densidade é uma propriedade que relaciona a massa de uma substância ao volume ocupado por ela.

    d = m / V

    A pressão representa a intensidade da força perpendicular distribuída sobre uma área.

    p = F / A

    Em um fluido em repouso, a pressão aumenta com a profundidade devido ao peso das camadas de fluido acima do ponto considerado.

    A pressão hidrostática pode ser calculada por:

    p = d · g · h

    Em que d representa a densidade do fluido, g a aceleração gravitacional e h a profundidade.

    Quando se considera a pressão atmosférica na superfície, a pressão total em determinada profundidade pode ser expressa por:

    p = p₀ + d · g · h

    Em que p₀ representa a pressão na superfície do fluido.

    O princípio de Pascal estabelece que uma variação de pressão aplicada a um fluido confinado é transmitida integralmente a todas as partes do fluido e às paredes do recipiente.

    Esse princípio é aplicado em sistemas hidráulicos, como elevadores hidráulicos e freios.

    O princípio de Arquimedes afirma que um corpo imerso total ou parcialmente em um fluido recebe uma força vertical para cima, chamada empuxo, cuja intensidade corresponde ao peso do fluido deslocado.

    E = d · g · V

    Em que d representa a densidade do fluido e V o volume de fluido deslocado.

    O empuxo explica fenômenos como a flutuação de navios, o funcionamento de boias e a aparente redução do peso de objetos submersos.

    A relação entre o peso do corpo e o empuxo determina se ele afunda, flutua ou permanece em equilíbrio dentro do fluido.`,
            tipo: "h2",
            imagem: ['../../imagens/fisica/fisica_a/estatica_fluido/fluidos_pressao_800px.jpg', '../../imagens/fisica/fisica_a/estatica_fluido/fluidos_pressao_600px.jpg', '../../imagens/fisica/fisica_a/estatica_fluido/fluidos_pressao_400px.jpg', '../../imagens/fisica/fisica_a/estatica_fluido/fluidos_pressao_200px.jpg', "Diagrama de um recipiente com líquido mostrando pontos em diferentes profundidades e a relação entre profundidade e pressão hidrostática, com indicação da pressão na superfície e da pressão total."]
        },
        {imagem: ['../../imagens/fisica/fisica_a/estatica_fluido/cond_flutuo_800px.jpg', '../../imagens/fisica/fisica_a/estatica_fluido/cond_flutuo_600px.jpg', '../../imagens/fisica/fisica_a/estatica_fluido/cond_flutuo_400px.jpg', '../../imagens/fisica/fisica_a/estatica_fluido/cond_flutuo_200px.jpg', 'Ilustração de um corpo parcialmente submerso em água mostrando peso para baixo, empuxo para cima, volume deslocado e nível do líquido.']},
        {imagem: ['../../imagens/fisica/fisica_a/estatica_fluido/prensa_hidraulica_800px.jpg', '../../imagens/fisica/fisica_a/estatica_fluido/prensa_hidraulica_600px.jpg', '../../imagens/fisica/fisica_a/estatica_fluido/prensa_hidraulica_400px.jpg', '../../imagens/fisica/fisica_a/estatica_fluido/prensa_hidraulica_200px.jpg', 'Esquema de prensa hidráulica com dois pistões de áreas diferentes, mostrando forças, pressões e transmissão da pressão pelo fluido.']}
    ],

    // FÍSICA B — DINÂMICA
    V: [
        {
            titulo: "vetores",
            texto: `Vetores são grandezas físicas que necessitam de módulo, direção e sentido para serem completamente representadas.

Um vetor pode ser representado graficamente por uma seta, cujo comprimento indica o módulo, cuja orientação indica a direção e cuja ponta indica o sentido.

Grandezas como força, velocidade, aceleração e deslocamento são vetoriais.

Vetores são fundamentais para a análise de movimentos e forças em diferentes dimensões, pois permitem representar e combinar grandezas que não podem ser somadas apenas por seus valores numéricos.`,
            tipo: "h2",
        },
        {
            titulo: "Elementos de um vetor",
            texto: `Um vetor possui três elementos fundamentais:

Módulo: representa a intensidade ou magnitude da grandeza.

Direção: corresponde à orientação da reta sobre a qual o vetor está situado, como horizontal, vertical ou inclinada.

Sentido: indica para qual lado o vetor aponta dentro de determinada direção.

Dois vetores podem apresentar o mesmo módulo e direção, mas sentidos opostos.

A representação vetorial permite distinguir grandezas que possuem valores iguais, mas orientações diferentes.`,
            tipo: "h3",
            imagem: []
        },
        {
            titulo: "Adição de vetores",
            texto: `A adição vetorial permite determinar um vetor resultante a partir da combinação de dois ou mais vetores.

Quando os vetores apresentam a mesma direção e o mesmo sentido, seus módulos podem ser somados.

Quando apresentam a mesma direção e sentidos opostos, os módulos podem ser subtraídos, considerando o sentido do vetor resultante.

Quando apresentam direções diferentes, a soma deve considerar suas orientações.

A adição vetorial pode ser realizada por métodos gráficos, como o método ponta-com-cauda, ou por decomposição em componentes.`,
            tipo: "h3",
        },
        {
            titulo: "Decomposição de vetores",
            texto: `A decomposição vetorial consiste em representar um vetor por meio de componentes em direções escolhidas, frequentemente eixos perpendiculares.

Para um vetor de módulo V que forma um ângulo θ com o eixo horizontal:

Vx = V cos θ.

Vy = V sen θ.

Essas relações são utilizadas quando o ângulo é medido a partir do eixo horizontal.

A decomposição facilita cálculos envolvendo forças, velocidades e deslocamentos em duas dimensões.

Os sinais das componentes dependem da orientação dos eixos escolhidos.`,
            tipo: "h3",
        },
        {
            titulo: "Vetor resultante",
            texto: `O vetor resultante corresponde à soma vetorial de todos os vetores considerados.

Quando dois vetores são perpendiculares, o módulo do resultante pode ser calculado pelo teorema de Pitágoras.

R = √(Ax² + Ay²).

Quando os vetores apresentam outras orientações, pode-se calcular o resultante por meio da decomposição em componentes.

A direção do vetor resultante pode ser determinada utilizando relações trigonométricas entre suas componentes.

O vetor resultante permite representar a combinação de diferentes deslocamentos, forças ou velocidades.`,
            tipo: "h3",
            imagem: ['../../imagens/fisica/fisica_b/vetores/esquemas_vetoriais_800px.jpg', '../../imagens/fisica/fisica_b/vetores/esquemas_vetoriais_600px.jpg', '../../imagens/fisica/fisica_b/vetores/esquemas_vetoriais_400px.jpg', '../../imagens/fisica/fisica_b/vetores/esquemas_vetoriais_200px.jpg', 'Diagrama de vetores mostrando módulo, direção, sentido, origem, extremidade, decomposição em componentes horizontal e vertical e soma vetorial.']
        }
    ],

    LN: [
        {
            titulo: "leis de newton",
            texto: `As Leis de Newton constituem a base da Mecânica Clássica e descrevem relações entre forças e movimentos.

Elas permitem compreender fenômenos como aceleração, equilíbrio, interação entre corpos e funcionamento de máquinas.

As três leis fundamentais são a Lei da Inércia, a Lei Fundamental da Dinâmica e a Lei da Ação e Reação.

A aplicação dessas leis exige a identificação do referencial, das forças atuantes e das condições do movimento.`,
            tipo: "h2",
        },
        {
            titulo: "Primeira Lei de Newton: Lei da Inércia",
            texto: `A Primeira Lei de Newton afirma que um corpo permanece em repouso ou em movimento retilíneo uniforme quando a força resultante sobre ele é nula, considerando um referencial inercial.

A inércia é a propriedade dos corpos de resistirem a alterações em seu estado de movimento.

A massa é uma medida da inércia de um corpo.

Quando a força resultante é nula, a velocidade permanece constante, podendo ser igual a zero ou diferente de zero.

A ausência de força resultante não significa ausência de forças, pois diferentes forças podem se equilibrar.`,
            tipo: "h3",
        },
        {
            titulo: "Segunda Lei de Newton: Lei Fundamental da Dinâmica",
            texto: `A Segunda Lei de Newton relaciona a força resultante aplicada a um corpo com sua aceleração.

Fresultante = m · a.

Fresultante representa a força resultante.

m representa a massa.

a representa a aceleração.

A aceleração é diretamente proporcional à força resultante e inversamente proporcional à massa, considerando as condições da lei.

A força resultante possui a mesma direção e sentido da aceleração.

A unidade de força no SI é o newton (N), equivalente a kg·m/s².

Essa lei permite determinar acelerações e forças em diferentes situações mecânicas.`,
            tipo: "h3",
        },
        {
            titulo: "Terceira Lei de Newton: Ação e Reação",
            texto: `A Terceira Lei de Newton afirma que, quando dois corpos interagem, cada um exerce uma força sobre o outro.

Essas forças possuem mesma intensidade, mesma direção e sentidos opostos, sendo aplicadas em corpos diferentes.

As forças de ação e reação não se anulam entre si em um diagrama de forças de um único corpo, pois atuam em corpos distintos.

Por exemplo, quando uma pessoa empurra uma parede, a parede exerce uma força de mesma intensidade e sentido oposto sobre a pessoa, considerando a interação.

A Terceira Lei descreve a relação entre forças de interação, não necessariamente o movimento dos corpos.`,
            tipo: "h3",
            imagem: ['../../imagens/fisica/fisica_b/', '../../imagens/fisica/fisica_b/', '../../imagens/fisica/fisica_b/', '../../imagens/fisica/fisica_b/', 'Infográfico ilustrando as três leis de Newton: inércia em um objeto, relação entre força resultante e aceleração e par de forças de ação e reação.']
        },
        {
            titulo: "Diagrama de forças",
            texto: `Um diagrama de forças, também conhecido como diagrama de corpo livre, representa as forças externas que atuam sobre um corpo ou sistema escolhido.

O diagrama permite identificar forças como peso, normal, atrito, tensão e forças aplicadas.

A escolha do corpo analisado é fundamental para evitar incluir forças que atuam sobre outros corpos.

Após identificar as forças, elas podem ser decompostas em componentes e utilizadas na aplicação da Segunda Lei de Newton.

Diagramas de forças são ferramentas essenciais para resolver problemas de dinâmica.`,
            tipo: "h3",
        },
        {
            titulo: "Força peso e força normal",
            texto: `A força peso corresponde à força gravitacional exercida pela Terra ou por outro corpo astronômico sobre um objeto.

Próximo à superfície terrestre, seu módulo pode ser aproximado por:

P = mg.

A força normal é uma força de contato exercida por uma superfície sobre um corpo, sendo geralmente perpendicular à superfície de contato.

A força normal não possui necessariamente módulo igual ao peso, pois depende das condições do movimento e das outras forças atuantes.

Peso e normal são forças diferentes, não constituindo um par de ação e reação entre si.`,
            tipo: "h3",
        }
    ],

    // FÍSICA B — DINÂMICA E GRAVITAÇÃO
    PI: [
        {
            titulo: "plano inclinado",
            texto: `Plano inclinado é uma superfície que apresenta determinada inclinação em relação à horizontal.

A análise de movimentos em planos inclinados envolve forças como peso, normal e, quando presente, atrito.

O peso pode ser decomposto em componentes paralelas e perpendiculares à superfície.

A decomposição facilita a aplicação das Leis de Newton e permite determinar acelerações, forças e condições de equilíbrio.

Planos inclinados são utilizados para compreender sistemas mecânicos e situações envolvendo rampas, objetos deslizantes e superfícies inclinadas.`,
            tipo: "h2",
        },
        {
            titulo: "Decomposição do peso",
            texto: `Em um plano inclinado, o peso pode ser decomposto em duas componentes perpendiculares.

A componente paralela ao plano é:

Pparalela = mg sen θ.

A componente perpendicular ao plano é:

Pperpendicular = mg cos θ.

θ representa o ângulo de inclinação em relação à horizontal.

A componente paralela está relacionada à tendência de movimento ao longo do plano.

A componente perpendicular contribui para a interação entre o corpo e a superfície, influenciando a força normal.

Essas expressões consideram a decomposição do peso em eixos orientados paralelamente e perpendicularmente ao plano.`,
            tipo: "h3",
            imagem: ['../../imagens/fisica/fisica_b/plan_inclin/decomp_peso_800px.jpg', '../../imagens/fisica/fisica_b/plan_inclin/decomp_peso_600px.jpg', '../../imagens/fisica/fisica_b/plan_inclin/decomp_peso_400px.jpg', '../../imagens/fisica/fisica_b/plan_inclin/decomp_peso_200px.jpg', 'Diagrama de um bloco em plano inclinado, mostrando peso, força normal, componentes do peso paralela e perpendicular ao plano, ângulo de inclinação e eixos coordenados']
        },
        {
            titulo: "Força normal no plano inclinado",
            texto: `A força normal é exercida pela superfície sobre o corpo e atua perpendicularmente à superfície de contato.

Em um plano inclinado, a força normal não é necessariamente igual ao peso.

Quando não existem outras forças com componentes perpendiculares ao plano e não há aceleração nessa direção, a normal pode ser calculada a partir da componente perpendicular do peso.

Nesse caso, N = mg cos θ.

Essa expressão não é válida para todas as situações, pois outras forças e acelerações podem modificar o valor da normal.

A análise depende do diagrama de forças e das condições do sistema.`,
            tipo: "h3",
        },
        {
            titulo: "Movimento em plano inclinado",
            texto: `O movimento em um plano inclinado pode ser analisado utilizando eixos paralelos e perpendiculares à superfície.

A Segunda Lei de Newton deve ser aplicada separadamente em cada direção.

A componente paralela do peso pode contribuir para a aceleração ao longo do plano, enquanto forças como atrito podem modificar o movimento.

Quando o atrito é desprezado, a análise torna-se mais simples.

Quando o atrito está presente, sua força deve ser incluída no diagrama de forças e na equação da dinâmica.

O resultado depende das forças atuantes, das condições iniciais e da orientação dos eixos escolhidos.`,
            tipo: "h3",
        }
    ],

    FA: [
        {
            titulo: "força de atrito",
            texto: `A força de atrito é uma força de contato que atua entre superfícies e se opõe ao deslizamento relativo ou à tendência de deslizamento entre elas.

O atrito depende de fatores relacionados às superfícies, às condições de contato e ao modelo físico considerado.

Existem diferentes tipos de atrito, como atrito estático e atrito cinético.

O atrito pode contribuir para o movimento, impedir o deslizamento, permitir a locomoção e transformar energia mecânica em outras formas, como energia térmica.

A análise do atrito é importante em situações envolvendo veículos, objetos sobre superfícies, sistemas mecânicos e movimentos cotidianos.`,
            tipo: "h2",
        },
        {
            titulo: "Atrito estático",
            texto: `Atrito estático atua quando existe contato entre superfícies e não ocorre deslizamento relativo entre elas.

A força de atrito estático ajusta-se às condições da interação, até atingir um valor máximo.

O módulo máximo do atrito estático pode ser representado por:

Fat máximo = μe N.

μe representa o coeficiente de atrito estático.

N representa a força normal.

O atrito estático não possui necessariamente seu valor máximo. Ele pode assumir valores menores, dependendo da força necessária para manter o equilíbrio.

O atrito estático pode impedir que um corpo deslize sobre uma superfície.`,
            tipo: "h3",
        },
        {
            titulo: "Atrito cinético",
            texto: `Atrito cinético atua quando ocorre deslizamento relativo entre superfícies em contato.

Em um modelo simplificado, o módulo do atrito cinético pode ser calculado por:

Fat = μc N.

μc representa o coeficiente de atrito cinético.

N representa a força normal.

A força de atrito cinético geralmente apresenta sentido oposto ao movimento relativo das superfícies.

O modelo de atrito cinético constante é uma aproximação, pois o atrito real pode depender de diferentes condições físicas.`,
            tipo: "h3",
        },
        {
            titulo: "Coeficiente de atrito",
            texto: `O coeficiente de atrito é uma grandeza adimensional utilizada em modelos que relacionam a força de atrito e a força normal.

O coeficiente de atrito estático máximo e o coeficiente de atrito cinético podem apresentar valores diferentes.

Esses coeficientes dependem das características das superfícies, da condição de contato e de outros fatores.

O coeficiente de atrito não é uma propriedade universal e invariável de um material isolado, pois depende das condições da interação entre as superfícies.

Os modelos de atrito são utilizados para aproximar situações reais e facilitar análises mecânicas.`,
            tipo: "h3",
        },
        {
            titulo: "Atrito e movimento",
            texto: `O atrito pode desempenhar diferentes funções nos movimentos.

Em veículos, o atrito entre pneus e solo contribui para a aceleração, frenagem e mudanças de direção.

Na caminhada, o atrito estático entre os pés e o solo permite que uma pessoa exerça forças sobre o chão sem deslizar.

Em sistemas mecânicos, o atrito pode dissipar energia mecânica e produzir aquecimento.

A análise do atrito deve considerar a direção da força em relação ao movimento ou à tendência de movimento, não apenas a velocidade do corpo.`,
            tipo: "h3",
            imagem: ['../../imagens/fisica/fisica_b/forca_atrito/atrito_800px.jpg', '../../imagens/fisica/fisica_b/forca_atrito/atrito_600px.jpg', '../../imagens/fisica/fisica_b/forca_atrito/atrito_400px.jpg', '../../imagens/fisica/fisica_b/forca_atrito/atrito_200px.jpg', 'Ilustração comparativa de atrito estático e cinético em um bloco sobre uma superfície, mostrando força de atrito, força aplicada, normal e sentido do movimento ou tendência de movimento.']
        }
    ],

    DMC: [
        {
            titulo: "dinâmica do movimento circular",
            texto: `Movimento circular ocorre quando um corpo percorre uma trajetória circular ou aproximadamente circular.

A dinâmica do movimento circular analisa as forças responsáveis pela aceleração necessária para modificar continuamente a direção da velocidade.

Mesmo quando o módulo da velocidade permanece constante, a velocidade vetorial pode variar devido à mudança de direção.

Essa variação está relacionada à aceleração centrípeta, orientada para o centro da trajetória circular.

O movimento circular pode ser uniforme ou apresentar variações no módulo da velocidade.`,
            tipo: "h2",
        },
        {
            titulo: "Aceleração centrípeta",
            texto: `A aceleração centrípeta está associada à mudança de direção da velocidade em movimentos circulares.

Seu módulo pode ser calculado por:

ac = v²/r.

v representa o módulo da velocidade tangencial.

r representa o raio da trajetória circular.

A aceleração centrípeta possui direção radial e sentido para o centro da trajetória.

Ela está presente em movimentos circulares mesmo quando o módulo da velocidade permanece constante.

A aceleração centrípeta não é uma força independente, mas uma aceleração resultante das forças que atuam na direção radial.`,
            tipo: "h3",
            imagem: ['../../imagens/fisica/fisica_b/dmc/mcu_800px.jpg', '../../imagens/fisica/fisica_b/dmc/mcu_600px.jpg', '../../imagens/fisica/fisica_b/dmc/mcu_400px.jpg', '../../imagens/fisica/fisica_b/dmc/mcu_200px.jpg', 'Diagrama de um corpo em movimento circular, mostrando trajetória circular, velocidade tangencial, aceleração centrípeta, força resultante centrípeta e raio.']
        },
        {
            titulo: "Força resultante centrípeta",
            texto: `A força resultante centrípeta corresponde à componente radial da força resultante necessária para produzir a aceleração centrípeta.

Seu módulo pode ser calculado por:

Fresultante radial = mv²/r.

A força centrípeta não representa necessariamente uma força adicional, pois pode ser produzida por forças como tensão, atrito, força gravitacional ou normal.

A identificação da força responsável pela aceleração centrípeta depende da situação analisada.

A expressão permite determinar a resultante das forças na direção radial, considerando o movimento circular.`,
            tipo: "h3",
        },
        {
            titulo: "Velocidade angular",
            texto: `Velocidade angular representa a variação da posição angular ao longo do tempo.

Em um movimento circular, ela pode ser expressa em radianos por segundo.

A velocidade angular média é:

ω = Δθ/Δt.

Quando o movimento circular é uniforme, a velocidade angular permanece constante.

A relação entre velocidade tangencial e velocidade angular é:

v = ωr.

Essa relação permite conectar grandezas angulares e lineares em movimentos circulares.`,
            tipo: "h3",
        },
        {
            titulo: "Período e frequência",
            texto: `Período é o intervalo de tempo necessário para completar uma volta.

Frequência é o número de voltas realizadas por unidade de tempo.

A frequência é expressa em hertz (Hz), equivalente a s⁻¹.

A relação entre período e frequência é:

f = 1/T.

Em movimento circular uniforme, a velocidade angular pode ser calculada por:

ω = 2π/T.

Essas grandezas são utilizadas para descrever movimentos circulares, rotações e sistemas periódicos.`,
            tipo: "h3",
        }
    ],

    ALK: [
        {
            titulo: "astronomia e leis de kepler",
            texto: `A Astronomia é a ciência que estuda os corpos celestes, suas estruturas, movimentos, propriedades e evolução.

As Leis de Kepler descrevem aspectos importantes dos movimentos planetários e contribuíram para o desenvolvimento da Mecânica Celeste.

Johannes Kepler formulou três leis fundamentais a partir da análise de observações astronômicas, especialmente dos movimentos dos planetas ao redor do Sol.

Essas leis descrevem a geometria das órbitas, a variação da velocidade orbital e relações entre períodos orbitais e dimensões das órbitas.`,
            tipo: "h2",
        },
        {
            titulo: "Primeira Lei de Kepler: Lei das Órbitas",
            texto: `A Primeira Lei de Kepler afirma que os planetas orbitam o Sol em trajetórias elípticas, sendo o Sol localizado em um dos focos da elipse.

Uma elipse é uma curva fechada que apresenta dois focos.

A distância entre o planeta e o Sol pode variar ao longo da órbita.

O periélio corresponde ao ponto de maior proximidade entre o planeta e o Sol.

O afélio corresponde ao ponto de maior distância entre o planeta e o Sol.

Essa lei descreve a geometria das órbitas planetárias e corrige a ideia de que todas as órbitas seriam perfeitamente circulares.`,
            tipo: "h3",
        },
        {
            titulo: "Segunda Lei de Kepler: Lei das Áreas",
            texto: `A Segunda Lei de Kepler afirma que o segmento imaginário que liga um planeta ao Sol varre áreas iguais em intervalos de tempo iguais.

Essa lei indica que a velocidade orbital varia ao longo da trajetória.

Um planeta apresenta maior velocidade orbital quando está mais próximo do Sol e menor velocidade orbital quando está mais distante, considerando uma órbita elíptica.

A lei das áreas está relacionada à conservação do momento angular em sistemas submetidos a forças centrais.

Ela permite compreender a variação da velocidade orbital sem exigir que a trajetória seja circular.`,
            tipo: "h3",
        },
        {
            titulo: "Terceira Lei de Kepler: Lei dos Períodos",
            texto: `A Terceira Lei de Kepler estabelece que o quadrado do período orbital de um planeta é proporcional ao cubo do semieixo maior de sua órbita, quando os corpos orbitam o mesmo astro central.

T² ∝ a³.

T representa o período orbital.

a representa o semieixo maior da órbita.

Para planetas que orbitam o mesmo astro central, a relação entre T² e a³ permanece constante, considerando o modelo ideal.

Essa lei permite comparar períodos orbitais e dimensões de órbitas planetárias.

Ela também pode ser utilizada em estudos de sistemas planetários, satélites e outros corpos em órbita.`,
            tipo: "h3",
            imagem: ['../../imagens/fisica/fisica_b/leis_kepler/3leis_kepler_800px.jpg', '../../imagens/fisica/fisica_b/leis_kepler/3leis_kepler_600px.jpg', '../../imagens/fisica/fisica_b/leis_kepler/3leis_kepler_400px.jpg', '../../imagens/fisica/fisica_b/leis_kepler/3leis_kepler_200px.jpg', 'Infográfico das três leis de Kepler, mostrando órbita elíptica com o Sol em um dos focos, variação da velocidade orbital e áreas iguais percorridas em intervalos de tempo iguais.']
        },
        {
            titulo: "Órbitas e movimento orbital",
            texto: `Movimento orbital ocorre quando um corpo se desloca ao redor de outro devido à interação gravitacional, considerando as condições do sistema.

Uma órbita pode apresentar diferentes formas, como circular ou elíptica, dependendo das condições iniciais e da interação gravitacional.

Em uma órbita circular ideal, a velocidade orbital permanece constante em módulo, enquanto sua direção varia continuamente.

Em órbitas elípticas, a velocidade orbital geralmente varia ao longo da trajetória.

O estudo das órbitas permite compreender movimentos de planetas, satélites naturais, satélites artificiais e outros corpos astronômicos.`,
            tipo: "h3",
        }
    ],

    GU: [
        {
            titulo: "gravitação universal",
            texto: `A Gravitação Universal descreve a interação gravitacional entre corpos que possuem massa.

Newton formulou a Lei da Gravitação Universal, segundo a qual dois corpos atraem-se mutuamente por uma força cuja intensidade depende das massas e da distância entre seus centros.

A gravitação está relacionada a fenômenos como queda dos corpos, órbitas planetárias, movimentos de satélites, marés e estrutura dos sistemas astronômicos.

A teoria da gravitação de Newton é uma aproximação extremamente útil em muitas situações, embora a Relatividade Geral seja necessária em determinados contextos, especialmente envolvendo campos gravitacionais intensos ou grande precisão.`,
            tipo: "h2",
        },
        {
            titulo: "Lei da Gravitação Universal",
            texto: `A Lei da Gravitação Universal pode ser expressa por:

F = Gm1m2/r².

F representa o módulo da força gravitacional.

G representa a constante gravitacional universal.

m1 e m2 representam as massas dos corpos.

r representa a distância entre os centros dos corpos.

A força gravitacional é atrativa e atua ao longo da linha que conecta os centros dos corpos.

A intensidade da força aumenta com as massas e diminui com o quadrado da distância entre os centros.

Essa lei é utilizada para calcular interações gravitacionais em diferentes escalas.`,
            tipo: "h3",
        },
        {
            titulo: "Campo gravitacional",
            texto: `Campo gravitacional representa a influência gravitacional produzida por uma massa sobre outros corpos.

O campo gravitacional pode ser descrito pela força gravitacional por unidade de massa de um corpo de prova.

Próximo à superfície terrestre, o campo gravitacional é frequentemente aproximado por g, cujo valor médio é aproximadamente 9,8 m/s².

A intensidade do campo gravitacional depende da massa do corpo que o produz e da distância em relação ao seu centro.

O campo gravitacional permite descrever a interação gravitacional sem precisar analisar diretamente cada par de corpos em todas as situações.`,
            tipo: "h3",
            imagem: ['../../imagens/fisica/fisica_b/gravitacao/corpos_atraindo_800px.jpg', '../../imagens/fisica/fisica_b/gravitacao/corpos_atraindo_600px.jpg', '../../imagens/fisica/fisica_b/gravitacao/corpos_atraindo_400px.jpg', '../../imagens/fisica/fisica_b/gravitacao/corpos_atraindo_200px.jpg', 'Ilustração de dois corpos de massas diferentes separados por uma distância, mostrando forças gravitacionais de atração em sentidos opostos, linha entre os centros e distância entre os corpos.']
        },
        {
            titulo: "Gravidade e peso",
            texto: `Peso corresponde à força gravitacional exercida sobre um corpo.

Próximo à superfície terrestre, o módulo do peso pode ser aproximado por:

P = mg.

m representa a massa.

g representa a aceleração gravitacional.

A massa é uma propriedade do corpo e permanece constante em diferentes locais, enquanto o peso pode variar de acordo com o campo gravitacional.

Por isso, um corpo pode apresentar massa igual na Terra e na Lua, mas pesos diferentes.

A distinção entre massa e peso é fundamental para compreender fenômenos gravitacionais.`,
            tipo: "h3",
        },
        {
            titulo: "Satélites e órbitas",
            texto: `Satélites podem apresentar órbitas determinadas pela interação gravitacional com um corpo central.

Satélites naturais, como a Lua, e satélites artificiais orbitam corpos astronômicos.

A gravidade fornece a força resultante necessária para modificar continuamente a direção da velocidade orbital.

Em uma órbita circular ideal, a força gravitacional pode atuar como força centrípeta.

A velocidade orbital e o período dependem da massa do corpo central e do raio orbital, considerando o modelo ideal.

Satélites artificiais possuem diferentes aplicações, como comunicação, navegação, meteorologia, observação terrestre e pesquisa científica.`,
            tipo: "h3",
        }
    ],

    // FÍSICA B — IMPULSO E COLISÕES
    DIC: [
        {
            titulo: "dinâmica impulsiva de um corpo",
            texto: `A dinâmica impulsiva estuda situações em que forças atuam durante intervalos de tempo relativamente curtos e podem provocar variações significativas no movimento de um corpo.

O impulso de uma força está relacionado à intensidade da força e ao intervalo de tempo em que ela atua.

O impulso permite relacionar forças e variações de quantidade de movimento.

Essa abordagem é útil para analisar interações como impactos, mudanças bruscas de velocidade e situações em que a força varia ao longo do tempo.

A dinâmica impulsiva complementa o estudo das Leis de Newton e permite resolver problemas por meio de relações entre impulso e quantidade de movimento.`,
            tipo: "h2",
        },
        {
            titulo: "Quantidade de movimento",
            texto: `Quantidade de movimento, também denominada momento linear, é uma grandeza vetorial relacionada à massa e à velocidade de um corpo.

Sua expressão é:

p = mv.

p representa a quantidade de movimento.

m representa a massa.

v representa a velocidade vetorial.

A quantidade de movimento depende da massa e da velocidade, incluindo a orientação da velocidade.

Sua unidade no SI é kg·m/s.

A quantidade de movimento é utilizada para analisar interações, colisões e sistemas de corpos.`,
            tipo: "h3",
        },
        {
            titulo: "Impulso de uma força",
            texto: `Impulso corresponde à ação de uma força ao longo de determinado intervalo de tempo.

Quando uma força constante atua sobre um corpo, o impulso pode ser calculado por:

I = F · Δt.

I representa o impulso.

F representa a força.

Δt representa o intervalo de tempo.

O impulso é uma grandeza vetorial e possui a mesma direção e sentido da força, quando a força é constante.

Sua unidade no SI é N·s, equivalente a kg·m/s.

Quando a força varia ao longo do tempo, o impulso pode ser determinado pela integral da força em relação ao tempo.`,
            tipo: "h3",
        },
        {
            titulo: "Teorema do Impulso",
            texto: `O Teorema do Impulso afirma que o impulso resultante sobre um corpo é igual à variação de sua quantidade de movimento.

Iresultante = Δp.

Essa relação permite calcular variações de velocidade, forças e intervalos de tempo em situações impulsivas.

O teorema pode ser aplicado quando a força resultante é constante ou variável, desde que o impulso seja corretamente determinado.

Ele permite analisar interações em que a força pode variar intensamente durante um curto intervalo de tempo.

A relação entre impulso e quantidade de movimento é uma das ferramentas fundamentais da dinâmica.`,
            tipo: "h3",
            imagem: ['../../imagens/fisica/fisica_b/dinam_imp/teorema_impulso_800px.jpg', '../../imagens/fisica/fisica_b/dinam_imp/teorema_impulso_600px.jpg', '../../imagens/fisica/fisica_b/dinam_imp/teorema_impulso_400px.jpg', '../../imagens/fisica/fisica_b/dinam_imp/teorema_impulso_200px.jpg', 'Diagrama de um corpo submetido a uma força durante um intervalo de tempo, mostrando impulso, variação da quantidade de movimento e vetores antes e depois da interação.']
        },
        {
            titulo: "Impulso e gráfico força versus tempo",
            texto: `Quando uma força varia ao longo do tempo, o impulso pode ser determinado pela área sob o gráfico força versus tempo.

Em gráficos unidimensionais, áreas acima do eixo podem representar impulso positivo, enquanto áreas abaixo do eixo podem representar impulso negativo.

O impulso total corresponde à soma das contribuições durante o intervalo analisado.

Essa representação é especialmente útil para analisar forças durante impactos e interações de curta duração.

O gráfico permite determinar a variação da quantidade de movimento sem precisar conhecer todos os detalhes do movimento durante a interação.`,
            tipo: "h3",
        }
    ],

    DIS: [
        {
            titulo: "dinâmica impulsiva em sistema",
            texto: `A dinâmica impulsiva em sistemas analisa a quantidade de movimento de conjuntos de corpos que interagem entre si.

Um sistema pode ser formado por dois ou mais corpos, sendo importante identificar as forças externas e internas que atuam sobre ele.

Quando o impulso resultante das forças externas sobre um sistema é nulo ou desprezível, a quantidade de movimento total do sistema permanece constante.

Essa condição está relacionada à conservação da quantidade de movimento.

O estudo de sistemas impulsivos permite analisar interações, colisões e movimentos de diferentes corpos sem precisar determinar detalhadamente todas as forças internas.`,
            tipo: "h2",
        },
        {
            titulo: "Quantidade de movimento de um sistema",
            texto: `A quantidade de movimento total de um sistema corresponde à soma vetorial das quantidades de movimento de seus componentes.

ptotal = p1 + p2 + p3 + ...

Cada corpo contribui com sua massa e velocidade vetorial.

A quantidade de movimento total depende das velocidades, massas e orientações dos corpos.

Em sistemas com diferentes corpos, a análise por componentes permite determinar a quantidade de movimento total em cada direção.

Essa representação é importante para estudar interações e conservação da quantidade de movimento.`,
            tipo: "h3",
        },
        {
            titulo: "Conservação da quantidade de movimento",
            texto: `A conservação da quantidade de movimento ocorre quando o impulso resultante das forças externas sobre o sistema é nulo ou desprezível durante o intervalo considerado.

Nesse caso, a quantidade de movimento total antes e depois da interação permanece igual.

A conservação da quantidade de movimento pode ser expressa por:

ptotal inicial = ptotal final.

A conservação é aplicada em sistemas isolados ou em situações em que os efeitos das forças externas podem ser desprezados.

Forças internas podem alterar as quantidades de movimento individuais dos corpos, mas não modificam a quantidade de movimento total do sistema quando as condições da conservação são satisfeitas.`,
            tipo: "h3",
            imagem: ['', '', '', '', 'Ilustração de um sistema de dois corpos interagindo, mostrando forças internas, forças externas, quantidades de movimento individuais e quantidade de movimento total do sistema.']
        },
        {
            titulo: "Centro de massa",
            texto: `O centro de massa é um ponto que representa a distribuição de massa de um sistema para determinadas análises mecânicas.

Sua posição depende da distribuição das massas e das posições dos componentes.

Em sistemas de partículas, o centro de massa pode ser determinado por uma média ponderada das posições, utilizando as massas como pesos.

O movimento do centro de massa está relacionado à força resultante externa sobre o sistema.

Quando a força resultante externa é nula, a quantidade de movimento total permanece constante e o centro de massa mantém velocidade constante.

O conceito facilita a análise de sistemas formados por vários corpos.`,
            tipo: "h3",
        },
        {
            titulo: "Impulsos internos e externos",
            texto: `Impulsos internos correspondem às interações entre componentes de um sistema.

Impulsos externos correspondem às ações de forças exercidas por elementos externos ao sistema escolhido.

Em um sistema, os impulsos internos não alteram a quantidade de movimento total quando as interações respeitam as condições de conservação, embora possam modificar o movimento individual dos componentes.

O impulso externo resultante pode modificar a quantidade de movimento total do sistema.

A escolha correta do sistema é fundamental para aplicar a conservação da quantidade de movimento.`,
            tipo: "h3",
        }
    ],

    C: [
        {
            titulo: "colisões",
            texto: `Colisões são interações entre corpos que ocorrem durante intervalos de tempo relativamente curtos, podendo provocar alterações em suas velocidades.

O estudo das colisões envolve conceitos como quantidade de movimento, impulso, energia cinética e conservação.

Em sistemas isolados, a quantidade de movimento total pode permanecer conservada durante a colisão.

A energia cinética pode ou não permanecer conservada, dependendo do tipo de colisão.

As colisões podem ser classificadas como elásticas, inelásticas e perfeitamente inelásticas, de acordo com o comportamento da energia cinética e dos corpos após a interação.`,
            tipo: "h2",
        },
        {
            titulo: "Colisão elástica",
            texto: `Colisão elástica é aquela em que a quantidade de movimento total e a energia cinética total permanecem conservadas, considerando um sistema isolado.

Durante a colisão, os corpos podem alterar suas velocidades, mas a energia cinética total antes e depois da interação permanece igual.

As colisões perfeitamente elásticas são modelos ideais utilizados em Física.

Em determinadas situações, colisões podem ser aproximadas por modelos elásticos, embora interações reais possam apresentar perdas de energia cinética.

A análise das colisões elásticas envolve conservação da quantidade de movimento e conservação da energia cinética.`,
            tipo: "h3",
        },
        {
            titulo: "Colisão inelástica",
            texto: `Colisão inelástica ocorre quando a quantidade de movimento total permanece conservada em um sistema isolado, mas a energia cinética total não permanece conservada.

Parte da energia cinética pode transformar-se em outras formas de energia, como energia térmica, sonora ou deformações.

A conservação da quantidade de movimento continua válida quando o impulso externo resultante é nulo ou desprezível.

A energia total permanece conservada em um sistema isolado, embora a energia cinética possa diminuir.

Colisões inelásticas são comuns em situações reais, pois muitos impactos envolvem deformações e dissipação de energia mecânica.`,
            tipo: "h3",
        },
        {
            titulo: "Colisão perfeitamente inelástica",
            texto: `Colisão perfeitamente inelástica é aquela em que os corpos permanecem unidos ou passam a apresentar a mesma velocidade após a interação, considerando o modelo simplificado.

A quantidade de movimento total permanece conservada em um sistema isolado.

A energia cinética total geralmente diminui durante a interação, transformando-se em outras formas de energia.

Esse tipo de colisão representa o caso limite de maior perda de energia cinética entre os modelos de colisão para determinada configuração de massas e condições iniciais.

A análise utiliza a conservação da quantidade de movimento para determinar a velocidade comum após a colisão.`,
            tipo: "h3",
            imagem: ['../../imagens/fisica/fisica_b/colisoes/tipos_colisao_800px.jpg', '../../imagens/fisica/fisica_b/colisoes/tipos_colisao_600px.jpg', '../../imagens/fisica/fisica_b/colisoes/tipos_colisao_400px.jpg', '../../imagens/fisica/fisica_b/colisoes/tipos_colisao_200px.jpg', 'Diagrama comparativo de colisões elástica, parcialmente inelástica e perfeitamente inelástica, mostrando dois corpos antes e depois da colisão, velocidades e conservação da quantidade de movimento.']
        },
        {
            titulo: "Coeficiente de restituição",
            texto: `O coeficiente de restituição é uma grandeza utilizada para descrever o comportamento de colisões em determinadas situações.

Ele relaciona as velocidades relativas de afastamento e aproximação dos corpos ao longo da direção da colisão, utilizando seus módulos e uma convenção adequada.

Em modelos idealizados:

Colisão perfeitamente elástica: coeficiente de restituição igual a 1.

Colisão perfeitamente inelástica: coeficiente de restituição igual a 0.

Colisões intermediárias: coeficiente entre 0 e 1, em determinados modelos.

O coeficiente de restituição permite caracterizar colisões e comparar diferentes comportamentos de interação.`,
            tipo: "h3",
        },
        {
            titulo: "Conservação da quantidade de movimento nas colisões",
            texto: `Em um sistema isolado, a quantidade de movimento total antes da colisão é igual à quantidade de movimento total após a colisão.

Para dois corpos em uma dimensão:

m1v1 inicial + m2v2 inicial = m1v1 final + m2v2 final.

Os sinais das velocidades devem ser definidos de acordo com o referencial escolhido.

A conservação da quantidade de movimento pode ser aplicada em colisões elásticas, inelásticas e perfeitamente inelásticas, desde que o impulso externo resultante seja nulo ou desprezível.

A equação permite determinar velocidades finais, velocidades iniciais ou outras grandezas desconhecidas.

A conservação da energia cinética deve ser analisada separadamente, pois não é válida em todas as colisões.`,
            tipo: "h3",
        }
    ]
};