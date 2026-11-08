//Variaveis
    //Materias
let materiaA = document.getElementById('materia_A');
let materiaB = document.getElementById('materia_B');

    //Conteudo
let h2_ou_h3 = 0;
let local = document.querySelector('#quadro');

    //Ano
let ano1A = document.getElementById('ano1A');
let ano2A = document.getElementById('ano2A');
let ano3A = document.getElementById('ano3A');
let ano1B = document.getElementById('ano1B');
let ano2B = document.getElementById('ano2B');
let ano3B = document.getElementById('ano3B');

//Funções
    //Materias
function atualizarMaterias() {  
    document.getElementsByName('materia').forEach((input) => {
        ano1A.style.display = ano1B.style.display = ano2A.style.display = ano2B.style.display = ano3A.style.display = ano3B.style.display = 'none'
        if (input.checked) { // Verifica qual rádio está selecionado
            if (input.id === "A") {
                materiaA.style.display = "block";
                materiaB.style.display = "none";
            } else if (input.id === "B") {
                materiaB.style.display = "block";
                materiaA.style.display = "none";
            }
        }
    });
}// Função que atualiza a visibilidade das matérias

    //Anos
function atualizarano() {
    document.getElementsByName('ano').forEach((input) => {
    if (input.checked) {
        if (input.id === 'an1A' || input.id === 'an1B') {
            ano1A.style.display = ano1B.style.display = 'block'
            ano2A.style.display = ano2B.style.display = ano3A.style.display = ano3B.style.display = 'none'
        }
        else if (input.id === 'an2A' || input.id === 'an2B') {
            ano2A.style.display = ano2B.style.display = 'block'
            ano1A.style.display = ano1B.style.display = ano3A.style.display = ano3B.style.display = 'none'
        }
        else if (input.id === 'an3A' || input.id === 'an3B') {
            ano3A.style.display = ano3B.style.display = 'block'
            ano1A.style.display = ano1B.style.display = ano2A.style.display = ano2B.style.display = 'none'
        }   
    }
    })
}

    //Conteudo
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
    let img = document.createElement('img');
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

// Seleciona a primeira materia "A"
atualizarMaterias();

// Adiciona o evento de "change" (mudança) para cada rádio button
document.getElementsByName('materia').forEach((input) => {
    input.addEventListener('change', atualizarMaterias);
});

document.getElementsByName('ano').forEach((input) => {
    input.addEventListener('change', atualizarano);
});