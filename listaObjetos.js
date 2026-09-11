const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@Firma.com"
    telefone: ["11555555000", "1114449999"]
}

cliente.endereco = [{
    rua: "Rua Joseph Climbar",
    numero: 1337,
    apartamento: true,
    complemento: "ap 939",
}
];

cliente.endereco.push({
    rua: "R. Josef Ladder",
    numero: 404,
    apartamento: false,
});

console.log(cliente.endereco);


const listaApenasApartamento = clientes.endereco.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamento);
