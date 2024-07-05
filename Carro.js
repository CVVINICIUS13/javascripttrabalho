let estoque = [];
lercarro();
cadastrarcarro("preto", 2000, "bmw", "boa", 255000, "320i");
cadastrarcarro("azul", 2010, "mercedez", "boa", 100000,"m1");
cadastrarcarro("branco", 2015, "tesla", "boa", 530000, "tesla1");
cadastrarcarro("rosa", 2016, "fiat", "boa", 350000, "fiat uno");
cadastrarcarro("verde", 2017, "ferrari", "boa", 200000,"F1");

//const ordenadoCor = ordenar(perucas, "cor");
const ordenadoPreco = ordenar(carro, "preco");

// MOSTRA AS PERUCAS ORDENADAS NA TELA
console.log("## carros ORDENADAS POR PRECO ##")
ordenadoPreco.forEach(carro => {
    console.log("carros:" + carro.cor
                + ", " + carro.tamanho 
                + "cm, " + carro.marca
                + ", " + carro.qualidade
                + ", R$ " + carro.preco
                +", modelo:" + carro.modelo)
});

function lercarro(){
    carro = require("./carro.json");
}

function cadastrarcarro(cor, tamanho, marca, qualidade, preco, modelo){
    const encontrado = encontrar(estoque, "marca", marca);
    if (typeof encontrado === "undefined"){
        const carros = {
            cor: cor,
            tamanho: tamanho,
            marca: marca,
            qualidade: qualidade,
            preco: preco,
            modelo: modelo
        }
        estoque.push(carros);

        // PERSISTINDO OS DADOS:
        const fs = require('fs');

        estoqueJSON = JSON.stringify(estoque);
        fs.writeFileSync("carro.json", estoqueJSON);
        console.log("Dados foram adicionados com sucesso!");
    }
}

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave] === valor);
}

function ordenar(lista, chave){
    return lista.sort((a, b) => {
        if(a[chave] < b[chave]){
            return -1;
        }
        if(a[chave] > b[chave]){
            return 1;
        }
        return 0;
    });
}