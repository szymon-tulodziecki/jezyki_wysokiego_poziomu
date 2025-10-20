const currency_1 = require('./currency_1');

console.log("================================================");
console.log("Testowanie funkcji exports:");
console.log("================================================\n");

const iloscPLN = 54.99;

console.log(`Mamy ${iloscPLN} PLN, będzie to:`);

console.log(`${currency_1.plnToCurrency(iloscPLN, "USD")} USD`);
console.log(`${currency_1.plnToCurrency(iloscPLN, "EUR")} EUR`);
console.log(`${currency_1.plnToCurrency(iloscPLN, "GBP")} GBP`);
console.log(`${currency_1.plnToCurrency(iloscPLN, "JPY")} JPY`);
console.log(`${currency_1.plnToCurrency(iloscPLN, "AUD")} AUD`);

console.log('\n\nI testowanie odwrotne:');

const kwotaUSD = 10;
const kwotaEUR = 12;
const kwotaGBP = 8;
const kwotaJPY = 500;
const kwotaAUD = 20;

console.log(`USD: ${currency_1.currencyToPln(kwotaUSD, "USD")} PLN`);
console.log(`EUR: ${currency_1.currencyToPln(kwotaEUR, "EUR")} PLN`);
console.log(`GBP: ${currency_1.currencyToPln(kwotaGBP, "GBP")} PLN`);
console.log(`JPY: ${currency_1.currencyToPln(kwotaJPY, "JPY")} PLN`);
console.log(`AUD: ${currency_1.currencyToPln(kwotaAUD, "AUD")} PLN`);

//----------------------------------------------------------------------

const Currency_2 = require('./currency_2');
const Currency2 = new Currency_2();

console.log("================================================");
console.log("Testowanie tego samego obiektowo:");
console.log("================================================\n");


console.log(`Mamy ${iloscPLN} PLN, będzie to:`);

console.log(`${Currency2.plnToCurrency(iloscPLN, "USD")} USD`);
console.log(`${Currency2.plnToCurrency(iloscPLN, "EUR")} EUR`);
console.log(`${Currency2.plnToCurrency(iloscPLN, "GBP")} GBP`);
console.log(`${Currency2.plnToCurrency(iloscPLN, "JPY")} JPY`);
console.log(`${Currency2.plnToCurrency(iloscPLN, "AUD")} AUD`);

console.log('\n\nI testowanie odwrotne raz jeszcze:');

console.log(`USD: ${Currency2.currencyToPln(kwotaUSD, "USD")} PLN`);
console.log(`EUR: ${Currency2.currencyToPln(kwotaEUR, "EUR")} PLN`);
console.log(`GBP: ${Currency2.currencyToPln(kwotaGBP, "GBP")} PLN`);
console.log(`JPY: ${Currency2.currencyToPln(kwotaJPY, "JPY")} PLN`);
console.log(`AUD: ${Currency2.currencyToPln(kwotaAUD, "AUD")} PLN`);