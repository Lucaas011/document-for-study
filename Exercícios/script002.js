// Esta é a definição da função chamada "go"
function go()
{
    // Obtém o valor do primeiro elemento de input com o id "num-a" e o armazena na variável "a"
    var a = document.getElementById("num-a").value;
    
    // Obtém o valor do segundo elemento de input com o id "num-b" e o armazena na variável "b"
    var b = document.getElementById("num-b").value;
    
    // Cria uma variável temporária "c" e atribui o valor de "b" a ela
    var c = b;
    
    // Atribui o valor de "a" à variável "b", então agora "b" tem o valor de "a"
    var b = a;
    
    // Atribui o valor de "c" (que originalmente era o valor de "b") à variável "a", então agora "a" tem o valor original de "b"
    var a = c;
    
    // Exibe o valor atual de "a" no console
    console.log("Variavel a: " + a);
    
    // Exibe o valor atual de "b" no console
    console.log("Variavel b: " + b);
}
