const waluty = {
    "USD" : 3.64,   
    "EUR" : 4.24,   
    "GBP" : 4.89,   
    "JPY" : 0.024,  
    "AUD" : 2.38    
}

function sprawdzTyp(typWaluty){
    if(!(typWaluty in waluty)){
        throw new Error("Podano nie obsługiwany typ waluty: " + typWaluty);
    }
}

exports.plnToCurrency = (ilosc, typWaluty) =>
{
    try{
        sprawdzTyp(typWaluty);
        return (ilosc / waluty[typWaluty]).toFixed(2);

    }catch(err){
        console.error(err.message);
    }
}

exports.currencyToPln = (ilosc, typWaluty) =>
{
    try{
        sprawdzTyp(typWaluty);
        return (ilosc * waluty[typWaluty]).toFixed(2);
    }catch(err){
        console.log(err.message);
    }
}