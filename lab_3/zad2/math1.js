exports.DodajDwieLiczby = (a, b) => {
    return a + b;
}

exports.OdejmijDwieLiczby = (a, b) => {
    return a - b;
}

exports.PomnozDwieLiczby = (a, b) => {
    return a * b;
}

exports.PodzielDwieLiczby = (a, b) => {
    if (b === 0) throw new Error("Nie można dzielić przez 0");
    return a / b;
}

exports.PotegujDwieLiczby = (a, b) => {
    return a ** b; 
}
