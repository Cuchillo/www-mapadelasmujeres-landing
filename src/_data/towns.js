const acf_optionGetByLang = require('../_helpers/acf_optionGetByLang.js');
const type = "town";

async function getData(){
    console.log("------ Fetching palettes options... ------");

    const data_i18n = await acf_optionGetByLang(type)['es'];

    console.log(data_i18n);

    return data_i18n;
}

module.exports = getData;
