// Variavels
    // Matérias
const materiaA = document.getElementById('materia_A');
const materiaB = document.getElementById('materia_B');

const div_materia = [
    materiaA, materiaB
];
const materia_id = [
    "A", "B"
];

    // Conteudo 
const local = document.querySelector('#quadro');

    // anos 
const ano1A = document.getElementById('ano1A');
const ano2A = document.getElementById('ano2A');
const ano3A = document.getElementById('ano3A');

const ano1B = document.getElementById('ano1B');
const ano2B = document.getElementById('ano2B');
const ano3B = document.getElementById('ano3B');

const div_anos = [
        ano1A, ano2A, ano3A,
        ano1B, ano2B, ano3B
];

const anos_id = [
    'an1A', 'an2A', 'an3A',
    'an1B', 'an2B', 'an3B',
];

    // Controle de Animações
let execucaoescrita = 0;

// Funções
    // Das Matérias e Anos
function atualizarMaterias() {
    // Deixa os anos invisiveis
    div_anos.forEach(ano => {
        ano.style.display = 'none'
    });

    // Tira os checked
    document.getElementsByName('ano').forEach(checado => {
        checado.checked = false;
    });

    // A materia selecionada mostra os anos
    document.getElementsByName('materia').forEach(materia => {
        const indice = materia_id.indexOf(materia.id);
        if (indice >= 0) {
            if (materia.checked) {
                div_materia[indice].style.display = 'block';
            }
            else {
                div_materia[indice].style.display = 'none'
            }
        };
    });
};

    // Do ano
function atualizarAno() {
        // A materia selecionada mostra os anos
    document.getElementsByName('ano').forEach(ano => {
        const indice = anos_id.indexOf(ano.id);
        div_anos[indice].style.display = 'none';
        if (ano.checked) {
            if (indice >= 0) {
                div_anos[indice].style.display = 'block';
            };
        };
    });
};

    // Escrita
function escrita(titulo, texto, tipo ='h3', image ='', execucao) {

    return new Promise(resolve => {

        // Verifica se a execução ainda é válida (resolve() nao para só avisa)
        if (execucao !== execucaoescrita) {
            resolve();
            return;
        };

        // Cria Variaveis  
        let h;
        if (tipo === 'h2') {
            h = document.createElement('h2');
        }
        else {
            h = document.createElement('h3');
        };
        const p = document.createElement('p');
        p.style.whiteSpace = 'pre-line';

        local.appendChild(h);
        local.appendChild(p);

        let indicetitulo = 0;
        let indicetexto = 0;

        const escrevendo = setInterval(() => {
            // Para encerrar animações antigas
            if (execucao !== execucaoescrita) {
                clearInterval(escrevendo);
                resolve();
                return; 
            };
            // Escreve Titulo
            if (indicetitulo < titulo.length) {
                h.textContent += titulo[indicetitulo];
                indicetitulo++;
            }
            // Escreve Texto
            else if (indicetexto < texto.length) {
                p.textContent += texto[indicetexto];
                indicetexto++;
            }
            // Adiciona imagem
            else {
                clearInterval(escrevendo);
                if (Array.isArray(image) && image.length >= 5) {

                    imagens(
                        image[0],
                        image[1],
                        image[2],
                        image[3],
                        image[4]
                    );
                };

                resolve();
            };
        }, 10)
    });
};

    // Imagem
function imagens(img1, img2, img3, img4, alt) {

    const picture = document.createElement('picture');

    const tamanho4 = document.createElement('source');
    tamanho4.media = '(min-width: 800px)';
    tamanho4.srcset = img1;

    const tamanho3 = document.createElement('source');
    tamanho3.media = '(min-width: 600px)';
    tamanho3.srcset = img2;

    const tamanho2 = document.createElement('source');
    tamanho2.media = '(min-width: 400px)';
    tamanho2.srcset = img3;

    const tamanho1 = document.createElement('img');
    tamanho1.src = img4;
    tamanho1.alt = alt;

    picture.appendChild(tamanho4);
    picture.appendChild(tamanho3);
    picture.appendChild(tamanho2);
    picture.appendChild(tamanho1);

    local.appendChild(picture);
};

    // Conteudo
async function conteudo(id) {
    // Para controle de execução
    const execucaoid = ++execucaoescrita;
    // Limpa o quadro, melhor que local.innerHTML = ''
    local.replaceChildren();

    const bloco = conteudosBiologia[id]; //Pega os dados

    if (!bloco) {
        alert('Erro na procura da matéria tente outro conteudo');
        return;
    };

    for (const i of bloco) {
        await escrita(
            i.titulo || '',
            i.texto || '',
            i.tipo || '',
            i.imagem || '',
            execucaoid
        );

        //Caso mude para outro conteudo para
        if (execucaoid !== execucaoescrita) {
            return
        };
    };
    
}

atualizarMaterias();

// Eventos das matérias
document.getElementsByName('materia').forEach(input => {
    input.addEventListener('change', atualizarMaterias);
});


// Eventos dos anos
document.getElementsByName('ano').forEach(input => {
    input.addEventListener('change', atualizarAno);
});


// Eventos dos conteúdos
document.getElementsByName('conteudo').forEach(input => {

    input.addEventListener('change', () => {
        conteudo(input.id);
    });
});
