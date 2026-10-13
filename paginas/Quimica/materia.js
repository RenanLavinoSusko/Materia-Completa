let A = document.getElementById('materia_A');
let B = document.getElementById('materia_B');

// Função que atualiza a visibilidade das matérias
function atualizarMaterias() {
    document.getElementsByName('materia').forEach((input) => {
        if (input.checked) { // Verifica qual rádio está selecionado
            if (input.id === "A") {
                A.style.display = "block";
                B.style.display = "none";
            } else if (input.id === "B") {
                B.style.display = "block";
                A.style.display = "none";
            }
        }
    });
}

// Executa uma vez ao carregar a página para definir o estado inicial
atualizarMaterias();

// Adiciona o evento de "change" (mudança) para cada rádio button
document.getElementsByName('materia').forEach((input) => {
    input.addEventListener('change', atualizarMaterias);
});