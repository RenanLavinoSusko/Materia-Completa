//Desing
const design = [
  {cor1: '#F5C6F5', cor2: '#C8A2C8', cor3: '#A384A3', cor4: '#7A637A', imagem: '../../imagens/imagens_pg_principal/principal_artes.jpg', nome: 'artes', descricao: 'Estuda as manifestações artísticas (artes visuais, música, teatro, dança) e sua evolução histórica. Pontos centrais: movimentos artísticos (Renascimento, Barroco, Impressionismo, Modernismo, Arte Contemporânea), arte brasileira (Semana de 22, Tarsila, Portinari) e a função social e cultural da arte.'},    
  {cor1: '#00F57A', cor2: '#00C864', cor3: '#00A352', cor4: '#007A3D', imagem: '../../imagens/imagens_pg_principal/principal_biologia.jpg', nome: 'biologia', descricao: 'Estuda os seres vivos e suas relações. Temas principais: citologia, genética (Leis de Mendel), evolução, ecologia, fisiologia humana, botânica e microbiologia (vírus, bactérias, doenças).'},
  {cor1: '#F5EDDC', cor2: '#D1CABC', cor3: '#A8A397', cor4: '#7F7B73', imagem: '../../imagens/imagens_pg_principal/principal_filosofia.jpg', nome: 'filosofia', descricao: 'Estuda questões fundamentais sobre conhecimento, ética, política e existência. Vai da Grécia Antiga (Sócrates, Platão, Aristóteles) até os modernos (Descartes, Kant) e contemporâneos (Nietzsche, Foucault), passando por ética, política e teoria do conhecimento.'},
  {cor1: '#F2003D', cor2: '#C90032', cor3: '#A10028', cor4: '#73001D', imagem: '../../imagens/imagens_pg_principal/principal_fisica.jpg', nome: 'física', descricao: 'Estuda os fenômenos naturais e as leis que regem o universo. Temas principais: mecânica (movimentos e leis de Newton), termodinâmica, óptica, ondulatória (acústica), eletromagnetismo e introdução à física moderna.'},
  {cor1: '#FFA500', cor2: '#DB8F00', cor3: '#B37400', cor4: '#8A5A00', imagem: '../../imagens/imagens_pg_principal/principal_geografia.jpg', nome: 'geografia', descricao: 'Estuda a relação entre sociedade e espaço. Temas principais: cartografia, geologia e relevo, clima, hidrografia, urbanização, globalização, geopolítica, questões ambientais e agropecuária.'},
  {cor1: '#FEEEC5', cor2: '#DBCEAB', cor3: '#B3A78B', cor4: '#8A816B', imagem: '../../imagens/imagens_pg_principal/principal_historia.jpg', nome: 'história', descricao: 'Estuda o passado humano para entender o presente. Cobre História Geral (Antiguidade, Idade Média, Revoluções, Guerras Mundiais) e do Brasil (Colônia, Império, República, Ditadura Militar, redemocratização).'},
  {cor1: '#00FCF4', cor2: '#00CEC8', cor3: '#00ABA5', cor4: '#00827E', imagem: '../../imagens/imagens_pg_principal/principal_ingles.jpg', nome: 'inglês', descricao: 'Foca em interpretação de textos e vocabulário. Temas principais: tempos verbais, preposições, conectivos, cognatos e falsos cognatos, e leitura de textos jornalísticos, charges e letras de música..'},
  {cor1: '#338AFF', cor2: '#2C78DB', cor3: '#2462B3', cor4: '#1C4B8A', imagem: '../../imagens/imagens_pg_principal/principal_matematica.jpg', nome: 'matemática', descricao: 'Estuda números, formas, padrões e raciocínio lógico. Temas principais: aritmética, álgebra, funções, geometria plana e espacial, trigonometria, estatística, probabilidade e análise combinatória.'},
  {cor1: '#FF373E', cor2: '#DB3036', cor3: '#B3272C', cor4: '#8A1E22', imagem: '../../imagens/imagens_pg_principal/principal_portugues.jpg', nome: 'português', descricao: 'Estuda a língua e a literatura. Temas principais: gramática (morfologia, sintaxe, concordância, regência, crase), interpretação de texto, gêneros textuais, figuras de linguagem e escolas literárias (Barroco ao Modernismo).'},
  {cor1: '#B70FFF', cor2: '#9D0DDB', cor3: '#800BB3', cor4: '#63088A', imagem: '../../imagens/imagens_pg_principal/principal_quimica.jpg', nome: 'química', descricao: 'Estuda a composição, as propriedades e as transformações da matéria. Temas principais: atomística, tabela periódica, ligações químicas, estequiometria, soluções, termoquímica, cinética, equilíbrio, eletroquímica e química orgânica.'},
  {cor1: '#D2FCDE', cor2: '#AACEB5', cor3: '#8EAB97', cor4: '#6C8273', imagem: '../../imagens/imagens_pg_principal/principal_redacao.jpg', nome: 'redação', descricao: 'Foca em produzir textos dissertativo-argumentativos. No modelo do ENEM, são cinco competências: norma culta, compreensão do tema, argumentação, coesão e proposta de intervenção detalhada (agente, ação, meio, finalidade e detalhamento).'},
  {cor1: '#FFF9B2', cor2: '#DBD69A', cor3: '#B3AE7D', cor4: '#8A8660', imagem: '../../imagens/imagens_pg_principal/principal_sociologia.jpg', nome: 'sociologia', descricao: 'Estuda a sociedade e as relações sociais. Temas principais: os clássicos (Durkheim, Weber, Marx), cultura e identidade, desigualdade, movimentos sociais, trabalho, cidadania, violência e mudança social.'}    
];

//Elementos HTML
let elementosgirando = document.querySelectorAll('#itens_que_rodam li');
let header = document.getElementsByTagName('header')[0];
let fundo = document.getElementsByTagName('body')[0];
let roda = document.getElementById('roda');
let materia = document.getElementsByTagName('h2')[0];
let descricao = document.querySelector('#conteudo p');
let bordas = document.querySelectorAll('.bordado');
let main = document.getElementsByTagName('main')[0];

//Elementos do giro
const vel = 0.02; 
let angulodogiro = 0;
let animacao;
let itemAtivo = -1;

//Variavel do geral
let loopId = null;
let trocador = 0;

 //Fuções do circulo
function atualizarPosicoes() {
  main.style.backgroundColor = '#33333300';
  elementosgirando.forEach((elemento, posicao) => { 
    let anguloItem = (angulodogiro + posicao * 30) % 360;

    if (anguloItem < 0) anguloItem += 360; 

    elemento.style.transform = `rotate(${anguloItem}deg) translate(14em) rotate(${-anguloItem}deg) translate(-50%, -50%)`;
    
    if (anguloItem >= 345 || anguloItem <= 15) { 
      if (itemAtivo !== posicao && design[posicao].cor1 !== '') {
        itemAtivo = posicao;

        fundo.style.backgroundImage = `url(${design[posicao].imagem})`;
        header.style.backgroundColor = design[posicao].cor1;
        roda.style.backgroundColor = design[posicao].cor3;
        materia.textContent = design[posicao].nome;
        descricao.textContent = design[posicao].descricao;
        
        bordas.forEach(borda => {
          borda.style.backgroundImage = `linear-gradient(180deg, ${design[posicao].cor1}, ${design[posicao].cor2}, ${design[posicao].cor3}, ${design[posicao].cor4})`;
        });
      }
    } 
  });
}
function loopGiroAutomatico() { 
  if (!modoManual) {
    angulodogiro = (angulodogiro + vel) % 360;
    atualizarPosicoes();
    animacao = requestAnimationFrame(loopGiroAutomatico); 
  }
}
function controlarGiro() {
  if (Tela.matches) {
    if (!animacao && !modoManual) {
      loopGiroAutomatico();
    };
  } else {
    pararAnimacaoCompleta();
    resetarEstilos();
  }
}
function pararAnimacaoCompleta() {
  cancelAnimationFrame(animacao);
  animacao = null;
}
function resetarEstilos() {
  elementosgirando.forEach(el => {
    el.style.transform = 'none';
    el.style.backgroundColor = 'white';   // <-- essa linha nova
  });
  fundo.style.backgroundImage = 'none';
  header.style.backgroundColor = '';
  roda.style.backgroundColor = '';
  main.style.backgroundColor = '';
  itemAtivo = -1;
  modoManual = false;
}
function tratarScrollRoda(evento) { 
  
  if (!modoManual) {
    evento.preventDefault();
    pararAnimacaoCompleta();
    modoManual = true; 
  }
  
  const direcao = evento.deltaY > 0 ? 4 : -4; 
  angulodogiro = (angulodogiro + direcao) % 360;
  
  atualizarPosicoes();
}

//Função para telas menores
function trocar() {
    if (trocador >= design.length) {
        trocador = 0;
    }

    // Limpa os itens da lista
    for (var i = 0; i < elementosgirando.length; i++) {
        elementosgirando[i].style.backgroundColor = 'white';
    }

    // Aplica os gradientes
    bordas.forEach(borda => {
        borda.style.backgroundImage = `linear-gradient(180deg, ${design[trocador].cor1}, ${design[trocador].cor2}, ${design[trocador].cor3}, ${design[trocador].cor4})`;
    });

    header.style.backgroundColor = design[trocador].cor1;
    main.style.backgroundColor = design[trocador].cor3; 
        
    if (elementosgirando[trocador]) {
        elementosgirando[trocador].style.backgroundColor = design[trocador].cor4;
    }
        
    materia.textContent = `${design[trocador].nome}`;
    descricao.textContent = `${design[trocador].descricao}`;

    trocador++;
}

//Controlador
const Tela = window.matchMedia('(min-width: 1366px)');
function iniciarCarrosselMobile() {
    if (loopId) return;        // já tá rodando, não duplica
    trocar();                  // mostra a primeira matéria na hora
    loopId = setInterval(trocar, 10000);
}
function pararCarrosselMobile() {
    if (loopId) {
      clearInterval(loopId);
      loopId = null;
    }
}
function aplicarModo() {
    if (Tela.matches) {
        // TELA GRANDE: carrossel mobile desligado, anel ligado
        resetarEstilos();
        pararCarrosselMobile();
        loopGiroAutomatico();
        roda.addEventListener('wheel', tratarScrollRoda, { passive: false });
    } else {
        // TELA PEQUENA: anel desligado, carrossel mobile ligado
        roda.removeEventListener('wheel', tratarScrollRoda);
        pararAnimacaoCompleta();
        resetarEstilos();
        iniciarCarrosselMobile();
    }
}

Tela.addEventListener('change', aplicarModo);
aplicarModo();