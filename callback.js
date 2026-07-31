const nomes = ["Evaldo", "Mari", "Camis"]


/*
EXEMPLOS

nomes.forEach( function(nome){
    console.log(nome)
});

 nomes.forEach((nome) => {
    console.log(nome)
}); 

*/

function imprimeNome(nome){
    console.log(nome)
};

nomes.forEach(imprimeNome);

