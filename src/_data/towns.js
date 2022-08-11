const acf_optionGetByLang = require('../_helpers/acf_optionGetByLang.js');
const type = "town";

const abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const getRandomWord = () => {
    const n = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
    let s = '';

    for (let i = 0; i < n; i++) {
        s = abc[Math.floor(Math.random() * abc.length)].toUpperCase() + s;
    }

    return s;
}

async function getData(){
    console.log("------ Fetching Towns options... ------");

    const data_i18n = await acf_optionGetByLang(type);

    data_i18n['es'].map(town => {
        const totalStreets = Math.ceil(town.streets_list.length / 4.6 * 100);
        const hideStreets = totalStreets - town.streets_list.length;

        town['show'] = town.streets_list.length;
        town['hide'] = hideStreets;

        for (let index = 0; index < town.streets_list.length; index++) {
            town.streets_list[index].class = 'show';
        }

        for (let index = 0; index < hideStreets; index++) {
            town.streets_list.push( {
                name: getRandomWord(),
                class: 'hide'
            });
        }

        const shufStrees = town.streets_list.sort((a, b) => 0.5 - Math.random());
        town.streets_list = shufStrees;
    })

    return data_i18n;
}

module.exports = getData;
