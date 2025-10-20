function Math2(){

}

Math2.DodajDwieLiczby = (a, b) => {
    return a + b;
}

Math2.OdejmijDwieLiczby = (a, b) => {
    return a - b;
}

Math2.PomnozDwieLiczby = (a, b) => {
    return a * b;
}

Math2.PodzielDwieLiczby = (a, b) => {
    if (b === 0) throw new Error("Nie można dzielić przez 0");
    return a / b;
}

Math2.PotegujDwieLiczby = (a, b) => {
    return a ** b; 
}

module.exports = Math2;

