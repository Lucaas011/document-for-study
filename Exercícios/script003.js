function somamedia() 
{
    // Obtém o valor do input com id "crianca1", converte para um número inteiro e armazena na variável idade1
    var idade1 = parseInt(document.querySelector("#crianca1").value);
    
    // Obtém o valor do input com id "crianca2", converte para um número inteiro e armazena na variável idade2
    var idade2 = parseInt(document.querySelector("#crianca2").value);
    
    // Calcula a soma das idades
    var soma = idade1 + idade2;
    
    // Calcula a média das idades
    var media = soma / 2; 
    
    // Exibe a soma no console do navegador
    console.log("soma: " + soma);
    
    // Exibe a média no console do navegador
    console.log("media: " + media);
}
