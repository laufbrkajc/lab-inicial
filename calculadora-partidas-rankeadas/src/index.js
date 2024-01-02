#!/bin/node

function calculaRank(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let rank = '';

    if (saldo >= 101) {
        rank = 'Imortal';
    } else if (saldo >= 91) {
        rank = 'Lendário';
    } else if (saldo >= 81) {
        rank = 'Diamante';
    } else if (saldo >= 51) {
        rank = 'Ouro';
    } else if (saldo >= 21) {
        rank = 'Prata';
    } else if (saldo >= 11) {
        rank = 'Bronze';
    } else if (saldo >= 0) {
        rank = 'Ferro';
    }

    console.log(`O Herói tem um saldo de ${saldo} está no nível de ${rank}`);
}

calculaRank(100, 50);
