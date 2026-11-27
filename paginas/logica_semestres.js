// Variavels
    // Matérias
const se11 = document.getElementById('se11');
const se12 = document.getElementById('se12');
const se21 = document.getElementById('se21');
const se22 = document.getElementById('se22');
const se31 = document.getElementById('se31');
const se32 = document.getElementById('se32');

const div_semestre = [
    se11, se12, 
    se21, se22,
    se31, se32
];
const semestre_id = [
    'sem11', 'sem12',
    'sem21', 'sem22', 
    'sem31', 'sem32'
];

    // Conteudo
let conteudo_pg = document.querySelector('meta[name="page-mat"]')?.content;
const local = document.querySelector('#quadro');

    // anos 
const ano1 = document.getElementById('ano1');
const ano2 = document.getElementById('ano2');
const ano3 = document.getElementById('ano3');

const div_anos = [
        ano1, ano2, ano3
];

const anos_id = [
    'an1', 'an2', 'an3',
];

    // Controle de Animações
let execucaoescrita = 0;

// Funções
    // Das Matérias e Anos
function atualizarSemestre() {

    // A materia selecionada mostra os anos
    document.getElementsByName('semestre').forEach(sem => {
        const indice = semestre_id.indexOf(sem.id);
        if (indice >= 0) {
            div_semestre[indice].style.display = 'none';

            if (sem.checked) {
                div_semestre[indice].style.display = 'block';
            };
        };
    });
};

    // Do ano
function atualizarAno() {
    document.getElementsByName('semestre').forEach(sem => {
        const indice = semestre_id.indexOf(sem.id);
        if (indice >= 0) {
            div_semestre[indice].style.display = 'none'
        }    
        sem.checked = false;
    });

        // A materia selecionada mostra os anos
    document.getElementsByName('ano').forEach(ano => {
        const indice = anos_id.indexOf(ano.id);
        if (indice >= 0) {
            div_anos[indice].style.display = 'none';
            if (ano.checked) {
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

    const link_img800px = document.createElement('a')
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

    link_img800px.href = img1
    link_img800px.appendChild(picture);

    local.appendChild(link_img800px);
    
};

    // Conteudo
async function conteudo(id) {
    // Para controle de execução
    const execucaoid = ++execucaoescrita;
    // Limpa o quadro, melhor que local.innerHTML = ''
    local.replaceChildren();

    const bloco = catalogo[conteudo_pg][id]; //Pega os dados

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

atualizarAno();

// Eventos das matérias
document.getElementsByName('semestre').forEach(input => {
    input.addEventListener('change', atualizarSemestre);
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
