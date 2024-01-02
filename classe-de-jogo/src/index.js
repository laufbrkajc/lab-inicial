#!/bin/node

const ataquePorTipo = new Map([
    ["mago", "magia"],
    ["guerreiro", "espada"],
    ["monge", "artes marciais"],
    ["ninja", "shuriken"],
]);

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataquePorTipo.get(tipo);
    }

    atacar() {
        console.log(`O ${this.tipo} atacou usando ${this.ataque}.`);
    }
}

let nao = new Heroi("nada", 66, "monge");
nao.atacar();

