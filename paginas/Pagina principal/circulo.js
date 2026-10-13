function giro() { 
  // Avança o giro e mantém entre 0 e 359
  angulodogiro = (angulodogiro + vel) % 360

  elementosgirando.forEach((elemento, posicao) => { 
    // Calcula o ângulo específico deste item
    let anguloItem = (angulodogiro + posicao * 30) % 360

    // Aplica a rotação no elemento HTML
    elemento.style.transform = `rotate(${anguloItem}deg) translate(15em) rotate(${-anguloItem}deg)`
    
    // MELHORIA NA CONDIÇÃO: 
    if (anguloItem >= 345 || anguloItem <= 15) { 
      // Só atualiza a cor se a propriedade cor1 não estiver vazia
      if (design[posicao].cor1 !== '') {
        fundo.style.backgroundColor = design[posicao].cor5
        header.style.backgroundColor = design[posicao].cor1
        roda.style.backgroundColor = design[posicao].cor3
    } 
  }}) 

  animacao = requestAnimationFrame(giro) 
}

function controlarGiro() {
  if (Tela.matches) {
    if (!animacao) giro();
  } else {
    cancelAnimationFrame(animacao);
    animacao = null;
    resetarEstilos();
  }
}

function resetarEstilos() {
  elementosgirando.forEach(el => el.style.transform = '');
  fundo.style.backgroundColor = '';
  header.style.backgroundColor = '';
  roda.style.backgroundColor = '';
  itemAtivo = -1;
}

//Variaveis
    //do html
let elementosgirando = document.querySelectorAll('#itens_que_rodam li')
let header = document.getElementsByTagName('header')[0];
let fundo = document.getElementsByTagName('body')[0];
let roda = document.getElementById('roda');
    //do giro
const vel = 0.02;
let angulodogiro = 0;
let animacao;
    //Da area visual
const design = [
  {cor1: '#F5C6F5', cor2: '#C8A2C8', cor3: '#A384A3', cor4: '#7A637A', cor5: '#333333', imagem: '../../imagens/principal.artes.jpg'},    
  {cor1: '#00F57A', cor2: '#00C864', cor3: '#00A352', cor4: '#007A3D', cor5: '#333333', imagem: '../../imagens/principal.biologia.jpg'},
  {cor1: '#F5EDDC', cor2: '#D1CABC', cor3: '#A8A397', cor4: '#7F7B73', cor5: '#333333', imagem: '../../imagens/principal.filosofia.jpg'},
  {cor1: '#F2003D', cor2: '#C90032', cor3: '#A10028', cor4: '#73001D', cor5: '#333333', imagem: '../../imagens/principal.fisica.jpg'},
  {cor1: '#FFA500', cor2: '#DB8F00', cor3: '#B37400', cor4: '#8A5A00', cor5: '#333333', imagem: '../../imagens/principal.geografia.jpg'},
  {cor1: '#FEEEC5', cor2: '#DBCEAB', cor3: '#B3A78B', cor4: '#8A816B', cor5: '#333333', imagem: '../../imagens/principal.historia.jpg'},
  {cor1: '#00FCF4', cor2: '#00CEC8', cor3: '#00ABA5', cor4: '#00827E', cor5: '#333333', imagem: '../../imagens/principal.ingles.jpg'},
  {cor1: '#338AFF', cor2: '#2C78DB', cor3: '#2462B3', cor4: '#1C4B8A', cor5: '#333333', imagem: '../../imagens/principal.matematica.jpg'},
  {cor1: '#FF373E', cor2: '#DB3036', cor3: '#B3272C', cor4: '#8A1E22', cor5: '#333333', imagem: '../../imagens/principal.portugues.jpg'},
  {cor1: '#B70FFF', cor2: '#9D0DDB', cor3: '#800BB3', cor4: '#63088A', cor5: '#333333', imagem: '../../imagens/principal.quimica.jpg'},
  {cor1: '#D2FCDE', cor2: '#AACEB5', cor3: '#8EAB97', cor4: '#6C8273', cor5: '#333333', imagem: '../../imagens/principal.redacao.jpg'},
  {cor1: '#FFF9B2', cor2: '#DBD69A', cor3: '#B3AE7D', cor4: '#8A8660', cor5: '#333333', imagem: '../../imagens/principal.sociologia.jpg'}    
]
const Tela = window.matchMedia('(min-width: 1400px)');

PC.addEventListener('change', controlarGiro);
controlarGiro();