// ==========================================
// VARIÁVEIS
// ==========================================

// Matérias
const materiaA = document.getElementById('materia_A');
const materiaB = document.getElementById('materia_B');

// Conteúdo
const local = document.querySelector('#quadro');

// Anos
const ano1A = document.getElementById('ano1A');
const ano2A = document.getElementById('ano2A');
const ano3A = document.getElementById('ano3A');

const ano1B = document.getElementById('ano1B');
const ano2B = document.getElementById('ano2B');
const ano3B = document.getElementById('ano3B');

// Controle das animações
let execucaoAtual = 0;


// ==========================================
// FUNÇÕES DAS MATÉRIAS
// ==========================================

function atualizarMaterias() {

    // Esconde todos os anos
    const anos = [
        ano1A, ano2A, ano3A,
        ano1B, ano2B, ano3B
    ];

    anos.forEach(ano => {
        if (ano) ano.style.display = 'none';
    });

    // Desmarca os anos
    document.getElementsByName('ano').forEach(input => {
        input.checked = false;
    });

    // Verifica a matéria selecionada
    document.getElementsByName('materia').forEach(input => {

        if (input.checked) {

            if (input.id === 'A') {
                materiaA.style.display = 'block';
                materiaB.style.display = 'none';

            } else if (input.id === 'B') {
                materiaB.style.display = 'block';
                materiaA.style.display = 'none';
            }
        }
    });
}


// ==========================================
// FUNÇÕES DOS ANOS
// ==========================================

function atualizarano() {

    document.getElementsByName('ano').forEach(input => {

        if (!input.checked) return;

        // Primeiro ano
        if (input.id === 'an1A' || input.id === 'an1B') {

            ano1A.style.display = 'block';
            ano1B.style.display = 'block';

            ano2A.style.display = 'none';
            ano2B.style.display = 'none';

            ano3A.style.display = 'none';
            ano3B.style.display = 'none';
        }

        // Segundo ano
        else if (input.id === 'an2A' || input.id === 'an2B') {

            ano2A.style.display = 'block';
            ano2B.style.display = 'block';

            ano1A.style.display = 'none';
            ano1B.style.display = 'none';

            ano3A.style.display = 'none';
            ano3B.style.display = 'none';
        }

        // Terceiro ano
        else if (input.id === 'an3A' || input.id === 'an3B') {

            ano3A.style.display = 'block';
            ano3B.style.display = 'block';

            ano1A.style.display = 'none';
            ano1B.style.display = 'none';

            ano2A.style.display = 'none';
            ano2B.style.display = 'none';
        }
    });
}


// ==========================================
// FUNÇÃO DE ESCRITA
// ==========================================

function escrita(titulo, texto, tipo = 'h3', image = '', execucao) {

    return new Promise(resolve => {

        // Verifica se a execução ainda é válida
        if (execucao !== execucaoAtual) {
            resolve();
            return;
        }

        let h;

        if (tipo === 'h2') {
            h = document.createElement('h2');
        } else {
            h = document.createElement('h3');
        }

        const p = document.createElement('p');

        p.style.whiteSpace = 'pre-line';

        local.appendChild(h);
        local.appendChild(p);

        let cont = 0;
        let cont1 = 0;

        const intervalo = setInterval(() => {

            // Cancela animações antigas
            if (execucao !== execucaoAtual) {
                clearInterval(intervalo);
                resolve();
                return;
            }

            // Escreve o título
            if (cont < titulo.length) {

                h.textContent += titulo[cont];
                cont++;

            }

            // Escreve o texto
            else if (cont1 < texto.length) {

                p.textContent += texto[cont1];
                cont1++;

            }

            // Adiciona imagem
            else {

                clearInterval(intervalo);

                if (Array.isArray(image) && image.length >= 5) {

                    imagens(
                        image[0],
                        image[1],
                        image[2],
                        image[3],
                        image[4]
                    );
                }

                resolve();
            }

        }, 10);
    });
}


// ==========================================
// FUNÇÃO DE IMAGENS
// ==========================================

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
}


// ==========================================
// FUNÇÃO DE CONTEÚDO
// ==========================================

async function conteudo(id) {

    // Cria uma nova identificação para a execução
    const minhaExecucao = ++execucaoAtual;

    // Limpa o conteúdo anterior
    local.replaceChildren();

    const bloco = conteudosQuimica[id];

    if (!bloco) {
        console.error(`Conteúdo não encontrado: ${id}`);
        return;
    }

    for (const i of bloco) {

        await escrita(
            i.titulo || '',
            i.texto || '',
            i.tipo || 'h3',
            i.imagem || '',
            minhaExecucao
        );

        // Interrompe se outro conteúdo foi selecionado
        if (minhaExecucao !== execucaoAtual) {
            return;
        }
    }
}


// ==========================================
// EVENTOS
// ==========================================

// Seleciona a primeira matéria
const primeiraMateria = document.getElementById('A');

if (primeiraMateria) {
    primeiraMateria.checked = true;
}

atualizarMaterias();


// Eventos das matérias
document.getElementsByName('materia').forEach(input => {
    input.addEventListener('change', atualizarMaterias);
});


// Eventos dos anos
document.getElementsByName('ano').forEach(input => {
    input.addEventListener('change', atualizarano);
});


// Eventos dos conteúdos
document.getElementsByName('conteudo').forEach(input => {

    input.addEventListener('change', () => {
        conteudo(input.id);
    });

});