// Operadores booleanos: comparações
// Comparação com 2 iguais só compara o valor, e não compara o tipo
// Comparação com 3 iguais compara o valor e o tipo
// Utilizar 3 iguais === quando for comparar em JS
// == igual
// === idêntico
// >= maior ou igual
// > maior que
// <= menor ou igual
// < menor que
// != diferente
// !== não idêntico

const numero1 = 10;
const numero2 = 12;

console.log(numero1 == numero2);         // false
console.log(numero1 === numero2);        // false
console.log(numero1 === "10");           // false

// Diferença, !== está comparando o valor e o tipo 
console.log(numero1 !== numero2);        // true

// Mais comparações
console.log(numero1 < numero2);          // true
console.log(numero1 <= numero2);         // true
console.log(numero1 > numero2);          // false
console.log(numero1 >= numero2);         // false

const numero3 = "10";
const numero4 = 10;

console.log(numero1 == numero3);         // true (compara só o valor)
console.log(numero1 === numero3);        // false (compara valor e tipo)

console.log(numero4 != numero3);         // false (compara só o valor)
console.log(numero4 !== numero3);        // true (compara valor e tipo)

// Operadores lógicos
const valor1 = true;
const valor2 = false;

console.log(valor1 && valor2);           // false (E lógico)
console.log(valor1 || valor2);           // true (OU lógico)
console.log(!valor1);                    // false (NÃO lógico)
console.log(!valor2);                    // true

// Operadores de comparação em cadeia
const a = 5;
const b = 10;
const c = 15;

console.log(a < b && b < c);             // true (a < b < c)
console.log(a > b || b < c);             // true (um dos dois é verdade)
console.log(!(a > b));                   // true (negação do falso)

// Verificando se um valor está dentro de um intervalo
const valor = 8;
console.log(valor > 5 && valor < 10);    // true (valor entre 5 e 10)

// Comparação com strings
const string1 = "apple";
const string2 = "banana";

console.log(string1 < string2);          // true (ordem lexicográfica)
console.log(string1 === "apple");        // true
console.log(string1 !== "Apple");        // true (case-sensitive)

// Comparação de booleanos
const isTrue = true;
const isFalse = false;

console.log(isTrue === isFalse);         // false
console.log(isTrue !== isFalse);         // true
console.log(isTrue == 1);                // true (conversão implícita)
console.log(isFalse == 0);               // true (conversão implícita)
