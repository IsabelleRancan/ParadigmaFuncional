let embarcacoes = [
    { comprimento: 4.5, motorizacao: 30, possuiConvesAberto: true, possuiCabineHabitavel: false },
    { comprimento: 6.0, motorizacao: 45, possuiConvesAberto: true, possuiCabineHabitavel: false },
    { comprimento: 7.5, motorizacao: 50, possuiConvesAberto: false, possuiCabineHabitavel: false },
    { comprimento: 3.2, motorizacao: 20, possuiConvesAberto: true, possuiCabineHabitavel: false },
    { comprimento: 8.0, motorizacao: 60, possuiConvesAberto: true, possuiCabineHabitavel: true },
    { comprimento: 7.8, motorizacao: 50, possuiConvesAberto: true, possuiCabineHabitavel: false },
    { comprimento: 5.0, motorizacao: 40, possuiConvesAberto: false, possuiCabineHabitavel: false },
    { comprimento: 8.0, motorizacao: 50, possuiConvesAberto: false, possuiCabineHabitavel: false },
    { comprimento: 6.5, motorizacao: 60, possuiConvesAberto: true, possuiCabineHabitavel: true },
    { comprimento: 4.0, motorizacao: 15, possuiConvesAberto: true, possuiCabineHabitavel: false },
    { comprimento: 4.8, motorizacao: 25, possuiConvesAberto: true, possuiCabineHabitavel: false },
    { comprimento: 7.0, motorizacao: 40, possuiConvesAberto: true, possuiCabineHabitavel: false },
    { comprimento: 8.0, motorizacao: 50, possuiConvesAberto: false, possuiCabineHabitavel: false },
    { comprimento: 3.5, motorizacao: 10, possuiConvesAberto: true, possuiCabineHabitavel: false },
    { comprimento: 6.8, motorizacao: 45, possuiConvesAberto: true, possuiCabineHabitavel: false },
    { comprimento: 7.2, motorizacao: 50, possuiConvesAberto: false, possuiCabineHabitavel: false },
    { comprimento: 4.7, motorizacao: 35, possuiConvesAberto: true, possuiCabineHabitavel: false },
    { comprimento: 5.5, motorizacao: 60, possuiConvesAberto: true, possuiCabineHabitavel: true },
    { comprimento: 6.3, motorizacao: 50, possuiConvesAberto: false, possuiCabineHabitavel: false },
    { comprimento: 4.1, motorizacao: 20, possuiConvesAberto: true, possuiCabineHabitavel: false },
    { comprimento: 7.9, motorizacao: 55, possuiConvesAberto: true, possuiCabineHabitavel: true },
    { comprimento: 3.8, motorizacao: 30, possuiConvesAberto: true, possuiCabineHabitavel: false },
    { comprimento: 5.0, motorizacao: 50, possuiConvesAberto: true, possuiCabineHabitavel: false },
    { comprimento: 7.0, motorizacao: 40, possuiConvesAberto: false, possuiCabineHabitavel: false },
    { comprimento: 4.9, motorizacao: 25, possuiConvesAberto: true, possuiCabineHabitavel: false },
    { comprimento: 6.6, motorizacao: 45, possuiConvesAberto: false, possuiCabineHabitavel: false },
    { comprimento: 3.3, motorizacao: 15, possuiConvesAberto: true, possuiCabineHabitavel: false },
    { comprimento: 8.0, motorizacao: 70, possuiConvesAberto: true, possuiCabineHabitavel: true },
    { comprimento: 4.6, motorizacao: 20, possuiConvesAberto: true, possuiCabineHabitavel: false },
    { comprimento: 7.5, motorizacao: 50, possuiConvesAberto: false, possuiCabineHabitavel: false },
    { comprimento: 6.4, motorizacao: 60, possuiConvesAberto: true, possuiCabineHabitavel: true },
    { comprimento: 5.8, motorizacao: 55, possuiConvesAberto: false, possuiCabineHabitavel: false },
    { comprimento: 4.2, motorizacao: 15, possuiConvesAberto: true, possuiCabineHabitavel: false },
    { comprimento: 7.3, motorizacao: 45, possuiConvesAberto: true, possuiCabineHabitavel: false },
    { comprimento: 4.4, motorizacao: 35, possuiConvesAberto: true, possuiCabineHabitavel: false },
    { comprimento: 7.1, motorizacao: 50, possuiConvesAberto: false, possuiCabineHabitavel: false },
    { comprimento: 6.9, motorizacao: 60, possuiConvesAberto: true, possuiCabineHabitavel: true },
    { comprimento: 4.3, motorizacao: 20, possuiConvesAberto: true, possuiCabineHabitavel: false },
    { comprimento: 8.0, motorizacao: 50, possuiConvesAberto: false, possuiCabineHabitavel: false },
    { comprimento: 5.2, motorizacao: 40, possuiConvesAberto: false, possuiCabineHabitavel: false },
    { comprimento: 6.1, motorizacao: 55, possuiConvesAberto: true, possuiCabineHabitavel: true },
    { comprimento: 3.6, motorizacao: 15, possuiConvesAberto: true, possuiCabineHabitavel: false },
    { comprimento: 8.0, motorizacao: 50, possuiConvesAberto: false, possuiCabineHabitavel: false },
    { comprimento: 5.4, motorizacao: 45, possuiConvesAberto: true, possuiCabineHabitavel: false },
    { comprimento: 7.6, motorizacao: 50, possuiConvesAberto: false, possuiCabineHabitavel: false },
    { comprimento: 4.9, motorizacao: 30, possuiConvesAberto: true, possuiCabineHabitavel: false },
    { comprimento: 7.4, motorizacao: 60, possuiConvesAberto: true, possuiCabineHabitavel: true },
    { comprimento: 3.7, motorizacao: 20, possuiConvesAberto: true, possuiCabineHabitavel: false },
    { comprimento: 6.2, motorizacao: 50, possuiConvesAberto: false, possuiCabineHabitavel: false },
    { comprimento: 4.3, motorizacao: 25, possuiConvesAberto: true, possuiCabineHabitavel: false },
    { comprimento: 7.7, motorizacao: 45, possuiConvesAberto: true, possuiCabineHabitavel: false }
];

// Função para verificar se uma embarcação é miúda
function verificarLegalizacao(embarcacao) {
    let comprimento = embarcacao.comprimento;
    let motorizacao = embarcacao.motorizacao;
    let convesAberto = embarcacao.possuiConvesAberto;
    let cabineHabitavel = embarcacao.possuiCabineHabitavel;

    return (comprimento <= 5 && motorizacao <= 50 && convesAberto && !cabineHabitavel) ||
           (comprimento <= 8 && motorizacao <= 50 && !convesAberto && !cabineHabitavel) ||
           (comprimento <= 8 && motorizacao <= 50 && convesAberto && cabineHabitavel);
}

// Função para adicionar as embarcações à tabela
function adicionarEmbarcacoesNaTabela() {
    let tabela = document.getElementById('embarcacoesTabela');

    embarcacoes.forEach((embarcacao, index) => {
        let linha = document.createElement('tr');

        linha.innerHTML = `
            <td>${index + 1}</td>
            <td>${embarcacao.comprimento}</td>
            <td>${embarcacao.motorizacao}</td>
            <td>${embarcacao.possuiConvesAberto ? 'Sim' : 'Não'}</td>
            <td>${embarcacao.possuiCabineHabitavel ? 'Sim' : 'Não'}</td>
            <td>${verificarLegalizacao(embarcacao) ? 'Sim' : 'Não'}</td>
        `;

        tabela.appendChild(linha);
    });
}

// Executa a função para adicionar as embarcações na tabela quando a página é carregada
window.onload = adicionarEmbarcacoesNaTabela;
