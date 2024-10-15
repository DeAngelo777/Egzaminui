const knygosPavadinimas = 'Logikos Pagrindai';
const autorius = 'Vardenis Pavardenis';
const puslapiuSkaicius = '500';
const kiekis = '500';
const kaina = '20.56';

const knyga = [knygosPavadinimas, autorius, puslapiuSkaicius, kiekis, kaina];
// console.log(knyga)

const penkiosKnygos = [
   
    {
   knygosPavadinimas: 'Matematikos Pagrindai',
    autorius: 'Jonas Jonaitis',
    puslapiuSkaicius: '500',
    kiekis: '200',
    kaina: '10.56',
    },
    {
        knygosPavadinimas: '2 Pagrindai',
         autorius: 'Jonas Jonaitis',
         puslapiuSkaicius: '500',
         kiekis: '200',
         kaina: '10.56',
         },
         {
         knygosPavadinimas: '3 Pagrindai',
         autorius: 'Jonas Jonaitis',
         puslapiuSkaicius: '500',
         kiekis: '200',
         kaina: '10.56',
         }
    
]





// let info = prompt(`Iveskite informacija, formatas: 
//     "KNYGOS PAVADINIMAS, KIEKIS, NUOLAIDOS DYDIS PROCENTAIS"`)

//     console.log(info)
    // {
    // knygosPavadinimas: 'Matematikos Pagrindai',
    // autorius: 'Jonas Jonaitis',
    // puslapiuSkaicius: '500',
    // kiekis: '200',
    // kaina: '10.56',
    // },

    // {
    // knygosPavadinimas: 'Fizikos išplėstinis kursas',
    // autorius: 'Rokas Žilinskas',
    // puslapiuSkaicius: '700',
    // kiekis: '200',
    // kaina: '20',
    // },

    // {
    // knygosPavadinimas: 'Lietuvių kalba',
    // autorius: 'Darija Griaužiniėne',
    // puslapiuSkaicius: '200',
    // kiekis: '100',
    // kaina: '15',
    // },

    // {
    // knygosPavadinimas: 'Kovos menas kitaip ',
    // autorius: 'Chuck Norris',
    // puslapiuSkaicius: '500',
    // kiekis: '940',
    // kaina: '49',
    // ]



    //  5 uzduotis
const knyga2 = [
    {
    knygosPavadinimas: 'Logikos pagrindai',
    autorius: 'Vardenis Pavardenis',
    puslapiuSkaicius: 500,
    kiekis: 500,
    kaina: 20.56
    }
        ]
 
        
console.log(knyga2[0])

// 10 užduotis

// console.log(knyga2[0].knygosPavadinimas.length >= 15)
// console.log(knyga2[0].puslapiuSkaicius)


if (knyga2[0].puslapiuSkaicius < 200 && knyga2[0].knygosPavadinimas.length >= 15 ){
console.log(knyga2)
}
// 5 užduotyje yra tik viena knyga, ir ji nera išvedama, nes nepraeina reikalavimu


// 11 uzduotis

if (knyga2[0].puslapiuSkaicius < 200 || knyga2[0].puslapiuSkaicius > 500  ){
    console.log(knyga2)
}
// Nėra niekas išvedama, nes puslapiu skaičius nera didesnis už 500