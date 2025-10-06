import stringWidth from 'string-width';

/*
Biblioteka string-width służy do mierzenia wizualnej szerokości łańcucha znaków, czyli ile "kolumn" (miejsc) zajmuje dany tekst w terminalu.
 Przydaje się to np. przy formatowaniu tekstu w CLI, gdzie niektóre znaki (np. chińskie czy emoji) zajmują więcej miejsca niż zwykłe litery alfabetu łacińskiego.
*/


console.log(stringWidth('a'));         // => 1
console.log(stringWidth('古'));        // => 2 (pełnoszeroki znak)
console.log(stringWidth('\u001B[1m古\u001B[22m'));  // => 2 (z ANSI, ale bez wpływu na szerokość)
