console.log("Sistema de saúde mental iniciado");
// Simulação de um backend com lógica de análise de saúde mental

class MonitoramentoSaudeMental {
    constructor() {
        this.registros = [];
    }

    registrarHumor(valor, data = new Date()) {
        const registro = {
            humor: valor,
            data: data
        };

        this.registros.push(registro);
        return registro;
    }

    calcularMedia() {
        if (this.registros.length === 0) return 0;

        const soma = this.registros.reduce((acc, r) => acc + r.humor, 0);
        return soma / this.registros.length;
    }

    classificarRisco() {
        const media = this.calcularMedia();

        if (media <= 2) return "ALTO RISCO";
        if (media <= 3.5) return "RISCO MODERADO";
        return "BAIXO RISCO";
    }

    gerarAlerta() {
        const risco = this.classificarRisco();

        if (risco === "ALTO RISCO") {
            return "Alerta crítico: considerar apoio imediato";
        }

        if (risco === "RISCO MODERADO") {
            return "Atenção: monitoramento recomendado";
        }

        return "Estado estável";
    }
}

// Simulação de uso do sistema
const sistema = new MonitoramentoSaudeMental();

sistema.registrarHumor(2);
sistema.registrarHumor(3);
sistema.registrarHumor(1);

console.log("Média:", sistema.calcularMedia());
console.log("Classificação:", sistema.classificarRisco());
console.log("Alerta:", sistema.gerarAlerta());
