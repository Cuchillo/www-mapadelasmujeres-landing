const acf_optionGetByLang = require('../_helpers/acf_optionGetByLang.js');
const type = "town";

async function getData(){
    console.log("------ Fetching Towns ABC options... ------");

    const abc = [{
        letter: 'A',
        towns: []
    }];
    let letter = 'A';
    let cont = 0;

    const data_i18n = await acf_optionGetByLang(type);

    data_i18n['es'].map(town => {
        const newLetter = town.pueblo.charAt(0).toUpperCase();

        if (letter !== newLetter) {
            letter = newLetter;
            cont++;
            abc.push({ letter: letter, towns: [] });
        }

        abc[cont].towns.push({ name: town.pueblo, streets: town.show });
    })

    return abc;
}

module.exports = getData;
