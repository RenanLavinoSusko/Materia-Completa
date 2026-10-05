function girar() {
    angulodogiro = (angulodogiro + vel) % 360;

    girando.forEach((Elemento, index) => {
        // Mantém os nomes das matérias legíveis (na horizontal) enquanto giram
        Elemento.style.transform = `rotate(${angulodogiro + index * 30}deg) translate(15em) rotate(${-angulodogiro - index * 30}deg)`;
        
    });

    // Mantém o loop infinito rodando sozinho
    idAnimacao = requestAnimationFrame(girar);
}

// 1. Quando o mouse ENTRA, o giro PARA
roda.addEventListener('mouseenter', () => {
    cancelAnimationFrame(idAnimacao); // Interrompe o loop da animação
    idAnimacao = null; 
});

// 2. Quando o mouse SAI, o giro CONTINUA de onde parou
roda.addEventListener('mouseleave', () => {
    if (!idAnimacao) { // Garante que não vai criar loops duplicados
        girar();
    }
});


// Variáveis que irão girar
let girando = document.querySelectorAll('#girador li');
let roda = document.querySelector('.materias'); // Elemento pai
let angulodogiro = 0;
const vel = 0.1; // Velocidade contínua do giro (ajuste se achar rápido/lento)
let idAnimacao;  // Guarda a referência da animação

//Estilo
let conteudo = document.getElementById('conteudo') //Div que vai aparecer as respostas
const informacao = [
    {} //Artes
]

// Inicializa o giro automático assim que a página carrega
girar();