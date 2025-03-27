class Parquimetro {
    constructor() {
        // Definindo o preço por unidade de tempo (R$1 = 1 hora)
        this.precoPorHora = 1.00; // R$1.00 por 1 hora
    }

    calcularTempo(valor) {
        if (valor < this.precoPorHora) {
            return { tempo: null, mensagem: 'Valor insuficiente! O valor mínimo é R$1,00.' };
        }

        // Calcular tempo em horas
        const horas = Math.floor(valor / this.precoPorHora);
        const minutos = Math.round((valor % this.precoPorHora) * 60); // Resto em minutos

        return { tempo: `${horas} horas e ${minutos} minutos`, mensagem: '' };
    }

    calcularTroco(valor, tempoCalculado) {
        // Calcular o valor total que foi consumido com o tempo
        const valorTotal = Math.floor(valor / this.precoPorHora) * this.precoPorHora;
        const troco = valor - valorTotal;
        return troco >= 0 ? `Troco: R$${troco.toFixed(2)}` : '';
    }
}

const parquimetro = new Parquimetro();

function calcularTempo() {
    const valorInput = document.getElementById('valor').value;
    const valor = parseFloat(valorInput);

    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    const resultado = parquimetro.calcularTempo(valor);
    const troco = parquimetro.calcularTroco(valor, resultado.tempo);

    document.getElementById('resultado').textContent = resultado.mensagem || `Tempo: ${resultado.tempo}`;
    document.getElementById('troco').textContent = troco;
}
