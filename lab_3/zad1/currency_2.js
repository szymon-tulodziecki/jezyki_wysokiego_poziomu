function Currency_2(){

}

const waluty = {
    "USD" : 3.64,   // Dolar amerykański
    "EUR" : 4.24,   // Euro
    "GBP" : 4.89,   // Funt szterling
    "JPY" : 0.024,  // Jen japoński
    "AUD" : 2.38    // Dolar australijski
}

function sprawdzTyp(typWaluty){
    if(!(typWaluty in waluty)){
        throw new Error("Podano nie obsługiwany typ waluty: " + typWaluty);
    }
}

Currency_2.prototype.plnToCurrency = (ilosc, typWaluty) =>
{
    try{
        sprawdzTyp(typWaluty);
        return (ilosc / waluty[typWaluty]).toFixed(2);

    }catch(err){
        console.error(err.message);
    }
}

Currency_2.prototype.currencyToPln = (ilosc, typWaluty) =>
{
    try{
        sprawdzTyp(typWaluty);
        return (ilosc * waluty[typWaluty]).toFixed(2);
    }catch(err){
        console.log(err.message);
    }
}

module.exports = Currency_2;