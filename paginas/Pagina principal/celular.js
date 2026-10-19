{
    // Variável para guardar o ID do timer e podermos pará-lo completamente
    let loopId = null;
    let trocador = 0;

    function trocar() {
        if (trocador >= design.length) {
            trocador = 0;
        }

        // Limpa os itens da lista
        for (var i = 0; i < itemli.length; i++) {
            itemli[i].style.backgroundColor = 'white';
        }

        // Aplica os gradientes
        bordas.forEach(borda => {
            borda.style.backgroundImage = `linear-gradient(180deg, ${design[trocador].cor1}, ${design[trocador].cor2}, ${design[trocador].cor3}, ${design[trocador].cor4})`;
        });

        header.style.backgroundColor = design[trocador].cor1;
        main.style.backgroundColor = design[trocador].cor3; 
        
        if (itemli[trocador]) {
            itemli[trocador].style.backgroundColor = design[trocador].cor4;
        }
        
        h2.textContent = `${design[trocador].nome}`;
        p.textContent = `${design[trocador].descricao}`;

        trocador++;
    }

    // Função inteligente que liga/desliga o sistema em tempo real
    function checarTamanhoDaTela(e) {
        if (e.matches) {
            // Se a tela for menor que 1399px e o loop ainda não estiver ativo
            if (!loopId) {
                trocar(); // Roda uma vez imediatamente
                loopId = setInterval(trocar, 1500); // Liga o timer
            }
        } else {
            // Se passar de 1399px, desliga o timer IMEDIATAMENTE
            if (loopId) {
                clearInterval(loopId);
                loopId = null; // Reseta a variável do timer
            }

            // Limpa completamente todos os estilos injetados pelo JS
            header.style.backgroundColor = "";
            main.style.backgroundColor = ""; 
            h2.textContent = "";
            p.textContent = "";
            
            for (var i = 0; i < itemli.length; i++) {
                itemli[i].style.backgroundColor = "white";
            }
            
            bordas.forEach(borda => {
                borda.style.backgroundImage = "";
            });
        }
    }

    // Seleção dos elementos HTML
    let header = document.getElementsByTagName('header')[0];
    let main = document.getElementById('main');
    let itemli = document.querySelectorAll('ul li');
    let bordas = document.querySelectorAll('.bordado');
    let h2 = document.getElementsByTagName('h2')[0];
    let p = document.getElementsByTagName('p')[0];

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
    
    // Definição correta da Media Query (max-width corrigido!)
    const Tela = window.matchMedia('(max-width: 1399px)');
    
    // 1. Executa assim que abre a página para decidir se inicia ou não
    checarTamanhoDaTela(Tela);

    // 2. Fica ouvindo o redimensionamento do navegador em tempo real
    Tela.addEventListener('change', checarTamanhoDaTela);
}