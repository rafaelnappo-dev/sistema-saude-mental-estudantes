console.log("Interface do sistema carregada");
// Simulação de interface do usuário

class AppSaudeMental {
    constructor() {
        this.historico = [];
    }

    registrarHumor(valor) {
        this.historico.push(valor);
        console.log(`Humor registrado: ${valor}`);
    }

    exibirHistorico() {
        console.log("Histórico de humor:", this.historico);
    }

    enviarParaAnalise() {
        console.log("Enviando dados para o servidor...");
    }
}

// Simulação de uso
const app = new AppSaudeMental();

app.registrarHumor(4);
app.registrarHumor(2);
app.registrarHumor(3);

app.exibirHistorico();
app.enviarParaAnalise();
