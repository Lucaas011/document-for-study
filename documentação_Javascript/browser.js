// usando somente o prompt na const idade, aparece um campo para preencher no meu arquivo index.html e a resposta aparece no meu consolelog do inspecionar
// npm install readline-sync, baixar essa biblioteca para testar prompt no próprio terminal.

const prompt = require ("readline-sync")

const idade = prompt.question("Qual eh sua idade:"); // se tirar o .question ele aparece um prompt somente no navegador e a resposta armazena no inspecionar.

console.log("O usuário tem", idade, "anos de idade");