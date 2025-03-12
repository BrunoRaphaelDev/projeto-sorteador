function gerarNumber() {
    const mostraResultado = document.querySelector(".resultado");

    let min = parseInt(document.querySelector(".min").value);
    let max = parseInt(document.querySelector(".max").value);

    // Validação dos valores
    if (isNaN(min) || isNaN(max)) {
        mostraResultado.innerHTML = "Insira números válidos!";
        return;
    }

    if (min > max) {
        mostraResultado.innerHTML = "O valor mínimo deve ser menor que o máximo!";
        return;
    }

    // Sorteio do número
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    mostraResultado.innerHTML = `Número sorteado: <strong>${result}</strong>`;
}
