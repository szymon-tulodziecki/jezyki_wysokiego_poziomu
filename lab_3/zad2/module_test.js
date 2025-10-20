const readline = require('readline');
const mat = require('./math1');
const Math2 = require('./math2');

console.log("================================================");
console.log("Testowanie funkcji exports:");
console.log("================================================\n");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Podaj pierwszą liczbę: ', (input1) => {
    const a = parseFloat(input1);

    rl.question('Podaj drugą liczbę: ', (input2) => {
        const b = parseFloat(input2);

        console.log(`\nDodawanie: ${a} + ${b} = ${mat.DodajDwieLiczby(a, b)}`);
        console.log(`Odejmowanie: ${a} - ${b} = ${mat.OdejmijDwieLiczby(a, b)}`);
        console.log(`Mnożenie: ${a} * ${b} = ${mat.PomnozDwieLiczby(a, b)}`);
        try {
            console.log(`Dzielenie: ${a} / ${b} = ${mat.PodzielDwieLiczby(a, b)}`);
        } catch (err) {
            console.log(`Dzielenie: ${err.message}`);
        }
        console.log(`Potęgowanie: ${a} ** ${b} = ${mat.PotegujDwieLiczby(a, b)}`);

        console.log("\n================================================");
        console.log("Testowanie tego samego obiektowo:");
        console.log("================================================\n");

        console.log(`${a} + ${b} = ${Math2.DodajDwieLiczby(a, b)}`);
        console.log(`${a} - ${b} = ${Math2.OdejmijDwieLiczby(a, b)}`);
        console.log(`${a} * ${b} = ${Math2.PomnozDwieLiczby(a, b)}`);
        try {
            console.log(`${a} / ${b} = ${Math2.PodzielDwieLiczby(a, b)}`);
        } catch (err) {
            console.log(`Dzielenie: ${err.message}`);
        }
        console.log(`${a} ** ${b} = ${Math2.PotegujDwieLiczby(a, b)}`);

        rl.close();
    });
});
