#!/bin/node

let heroName = 'Not_a_hero';
let heroExperience = 3562;
let heroLevel = '';

if (heroExperience > 10001) {
    heroLevel = 'Radiante';
} else if (heroExperience >= 9001) {
    heroLevel = 'Imortal';
} else if (heroExperience >= 8001) {
    heroLevel = 'Ascendente';
} else if (heroExperience >= 7001) {
    heroLevel = 'Platina';
} else if (heroExperience >= 6001) {
    heroLevel = 'Ouro';
} else if (heroExperience >= 2001 && heroExperience <= 5000) {
    heroLevel = 'Prata';
} else if (heroExperience >= 1001 && heroExperience <= 2000) {
    heroLevel = 'Prata';
} else if (heroExperience <= 1000) {
    heroLevel = 'Prata';
} else {
    console.log(`Experience: "${heroExperience}" out of valid range.`)
}

console.log(`O Herói de nome ${heroName} está no nível de ${heroLevel}`)
