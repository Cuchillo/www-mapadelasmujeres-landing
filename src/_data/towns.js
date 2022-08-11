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

// const separateStreets = (arr) => {
//     console.log('Separate Streets');

//     let isTogether = false;

//     for (let index = 0; index < arr.length - 1; index++) {
//         const st = arr[index];
//         const next = arr[index + 1];

//         if (st.class === 'show' && next.class === 'show') {
//             isTogether = true;
//             // console.log('-----------------------------------------');
//             // console.log(st);
//             // console.log(next);
//             arr[index] = st;
//             arr[index + 1] = arr[index + 2];
//             arr[index + 2] = next;
//             // console.log('---....---');
            
//             // console.log('1', arr[index])
//             // console.log('2', arr[index + 1])
//             // console.log('3', arr[index + 2])
//             // console.log('-----------------------------------------');
//             index++;
//         }
//     }

//     if (isTogether) separateStreets(arr);
//     else return arr;
// }

async function getData(){
    console.log("------ Fetching Towns options... ------");

    const data_i18n = await acf_optionGetByLang(type);

    data_i18n['es'].map(town => {
        const totalStreets = Math.ceil(town.streets_list.length / 4.6 * 100);
        const showStreets = town.streets_list.length;
        let hideStreets = totalStreets - town.streets_list.length;
        let tmp = [];

        town['show'] = showStreets;
        town['hide'] = hideStreets;

        for (let index = 0; index < showStreets; index++) {
            town.streets_list[index].class = 'show';

            tmp.push(town.streets_list[index]);
            tmp.push({
                name: getRandomWord(),
                class: 'hide'
            });
            tmp.push({
                name: getRandomWord(),
                class: 'hide'
            });
            tmp.push({
                name: getRandomWord(),
                class: 'hide'
            });
            hideStreets = hideStreets - 3;
        }

        for (let index = 0; index < hideStreets; index++) {
            tmp.push( {
                name: getRandomWord(),
                class: 'hide'
            });
        }

        const shufStreets = tmp.sort((a, b) => 0.5 - Math.random());
        town.streets_list = shufStreets;
    })

    return data_i18n['es'];
}

module.exports = getData;
