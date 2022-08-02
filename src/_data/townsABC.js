const towns = require('./towns.js');
let letter = "A";
let cont = 0;
const abc = [{letter:letter, towns:[]}];

for(let i=0; i<towns.length; i++) {
    const newTown = towns[i].town.trim();
    const nStreets = towns[i].streets.filter(street => street.class === 'show').length;
    const newLetter = newTown.charAt(0).toUpperCase();

    if (letter != newLetter) {
        letter = newLetter;
        cont++;
        abc.push({ letter: letter, towns: [] });
    }

    abc[cont].towns.push({ name: newTown, streets: nStreets });
}

module.exports = abc;