function realizarOperacoes() {
    // Obtém os valores dos inputs
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);

    // Verifica se os números são válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    // Realiza as operações matemáticas
    let soma = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = num2 !== 0 ? (num1 / num2).toFixed(2) : "Não é possível dividir por zero.";

    // Exibe os resultados na página
    document.getElementById("resultado").innerHTML = `
        <p>Soma: ${soma}</p>
        <p>Subtração: ${subtracao}</p>
        <p>Multiplicação: ${multiplicacao}</p>
        <p>Divisão: ${divisao}</p>
    `;
}
