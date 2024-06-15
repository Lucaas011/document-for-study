// Declaração de variáveis
const idade = 18;
const nota = 85;

// 1. if...else
if (idade >= 18) {
    console.log("Pode dirigir");
} else {
    console.log("Não pode dirigir");
}

// 2. Operador Ternário (? : )
const podeDirigir = idade >= 18 ? "Pode dirigir" : "Não pode dirigir";
console.log(podeDirigir);  

// 3. Comparação de Múltiplas Condições
if (nota >= 90) {
    console.log("Nota A");
} else if (nota >= 80) {
    console.log("Nota B");
} else if (nota >= 70) {
    console.log("Nota C");
} else {
    console.log("Nota D ou inferior");
}
