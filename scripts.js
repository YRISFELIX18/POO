class Parquimetro {
    constructor() {
        // Definindo o preço por unidade de tempo (R$1 = 1 hora)
        this.precoPorHora = 1.00; // R$1.00 por 1 hora
    }

    calcularTempo(valor) {
        if (valor < 1) {
            return { tempo: null, mensagem: 'Valor insuficiente! O valor mínimo é R$1,00.' };
        }

        // Calcular tempo em horas
        if (valor >= 1 && valor < 1.75) {
            const horas = '';
            const minutos = 30; // Resto em minutos
            return { tempo: `${horas} horas e ${minutos} minutos`, mensagem: '' };
        }else if(valor >= 1.75 && valor < 3) {
            const horas = 1;
            const minutos = 0; // Resto em minutos
            return { tempo: `${horas} horas e ${minutos} minutos`, mensagem: '' };
        }else if (valor > 3) {
            const horas = 1;
            const minutos = 30; // Resto em minutos
            return { tempo: `${horas} horas e ${minutos} minutos`, mensagem: '' };
        }

    }

    calcularTroco(valor, tempoCalculado) {
        // Calcular o valor total que foi consumido com o tempo
        if (valor >= 1 && valor < 1.75) {
            const troco = valor - 1;
            return troco >= 0 ? `Troco: R$${troco.toFixed(2)}` : '';
        }else if(valor >= 1.75 && valor < 3) {
            const troco = valor - 1.75;
            return troco >= 0 ? `Troco: R$${troco.toFixed(2)}` : '';
        }else if (valor > 3) {
            const troco = valor - 3;
            return troco >= 0 ? `Troco: R$${troco.toFixed(2)}` : '';
        }
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