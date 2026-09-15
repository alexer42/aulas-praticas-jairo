const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@Firma.com"
    telefone: ["11555555000", "1114449999"]
    saldo: 200,
    efetuaPagamento: function (valor){
        if(valor > this.saldo){
            console.log("Saldo isuficiente");
        } else {
            this.saldo -= valor;
            console.log(`Pagamento Realizado. Nova saldo: ${this.saldo}`);

        }
    }

};
cliente.efetuaPagamento(80);

