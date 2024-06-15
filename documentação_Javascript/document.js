// Este comando é usado para imprimir mensagens informativas, avisos ou qualquer outra informação relevante para o desenvolvedor durante a execução do programa. 
console.log("Hello Javascripto")

// Este comando é usado especificamente para mensagens de erro.
console.error("este é um erro")

// Este comando é um comando com sinal de aviso.
console.warn("Este é um aviso")

//Váriaveis

var x = 10

// maneiras mais modernas
 let y = 15
 const z = 20

// Tipos de dados 

const name = 4

//Mostra no terminal ou no inspecionar o nome Lucas
console.log(name)
//Diz o tipo (string, int, float)
console.log(typeof name)

// Array Listas

const languages = ["java", "c","python"]
console.log(languages)
console.log(typeof languages)

// Objetos 

const user = {email: "Lucasmartins@teste.com", password: "teste123", age: 30}
console.log(user)
console.log(typeof user)

// metodos de string

const fullname = "Lucas Martins"
//Quantidade de caracters na string por exemplo na variavel full name o numero de caracter é 13 (length)
console.log(fullname.length)

//esse metodo transforma em listas, separador tem que ser espaço em branco
const stringToArray = fullname.split(" ")
console.log(stringToArray)

// Esta linha converte o valor da variável 'fullname' para letras minúsculas
console.log(fullname.toLocaleLowerCase())
// Esta linha converte o valor da variável 'fullname' para letras maiúsculas e imprime no console
console.log(fullname.toUpperCase())

// Esta linha verifica a posição da substring "Martins" dentro da string armazenada na variável 'fullname' e retorna o índice correspondente
console.log(fullname.indexOf("Martins"))

// Esta linha extrai uma parte da string armazenada na variável 'fullname', começando do índice 0 até o índice 6 (7 caracteres), e imprime no console
console.log(fullname.slice(0,7))


//metodos de array

const list = ["a", "b", "c", "d", "e"] // Comecam a contar de 0
console.log(list.length)

//serve para pegar no caso da lista acima a letra C ou que esta na posicao 2.
console.log(list[2])

//adiciona um elemento a nossa lista
list[5] = "f"

console.log(list)

// Esta linha imprime o último elemento da lista 'list'
console.log(list[list.length -1])

// Este comando adiciona o G na minha lista
list.push("g")
console.log(list)

// Este comando remove o G que foi inserido anteriormente.
list.pop()
console.log(list)

// Este comando remove o primeiro elemento da lista.
list.shift()
console.log(list)

// Adiciona um elemento como primeiro da lista.
list.unshift("a")
console.log(list)


// Objetos

const product = {
    name: "Camisa",
    price: 15.99,
    inStock: true,
    sizes: ["p", "m", "g"],
    "Main color": "azul",
}

console.log(product.name)

// Ou usar este outro comando quando não reconhecer com a maneira acima, pois na variavel pode acontecer de não reconhecer.
console.log(product["Main color"])

// destructuring

// Desestruturação do objeto 'product' para extrair as propriedades 'price' e 'inStock'
const { price, inStock} = product

// Imprime o valor da propriedade 'price' no console
console.log(price)

// Imprime o valor da propriedade 'inStock' no console
console.log(inStock)

//se price for um número diferente de zero e inStock for um booleano true, ambos serão impressos como true no console.

const  [n1,n2] = list

console.log(n1)
console.log(n2)


// JSON - javascript object notation 

// Define um objeto "dog" com propriedades de nome e idade
const dog = {
  name: "shark",
   age:10,
}

// Converte o objeto "dog" em uma string JSON e armazena na variável "json"
const json = JSON.stringify(dog)

// Imprime a string JSON no console
console.log(json)

// Converte a string JSON de volta para um objeto JavaScript e armazena na variável "obj"
const obj = JSON.parse(json)

// Imprime o objeto convertido no console
console.log(obj)

// Estruturas condicionais

const a = 10

if(a > 10){
    console.log("A é maior que 8")
}

const b = "Lucas"

if(b === "Joao"){
    console.log("O nome e João")
} else if (b === "Pedro"){
    console.log("O nome é pedro")
} else {
    console.log("Não encontramos o nome do usuario")
}

// Estruturas de repetição - loop

const mylist = [1,2,3,4,5]
let counter = 0

while(counter <mylist.length){
    console.log(mylist[counter])
    counter = counter +1
}

const mytwolist = ["a","b","c","d","e"]

for (let counter = 0; counter < mytwolist.length; counter = counter +1) {
   console.log (mytwolist[counter])
}


// Metodos de array -> repetição

const names = ["Matheus", "João", "Lucas", "Duda"]

names.forEach(function (name){
    console.log(`O nome é: ${name}`)
})

const modifiednames = names.map(function (name){
    if (name === "Matheus"){
        return (name = "Sr. Matheus")
    } else {
        return name
    }
})
console.log(modifiednames)


const bignumbers = [1,2,3,4,5,10,100].filter(function(number){
    return number >=5
})
 console.log (bignumbers)


 const sumall = [10,20,30,40,50].reduce(function(total,number){
   return total + number
})

 console.log(sumall)


 // funções

function minhafuncao(){
    console.log("Ola função")
}
minhafuncao()


function nomecompleto(nome,sobrenome){
    console.log(`o nome completo é: ${nome} ${sobrenome}`) // usar essas aspas nesses casos ` pois aspas duplas não reconhece
}
nomecompleto(`Lucas`, `Martins`)

const meunomecompleto = nomecompleto ("Maria", "Eduarda")


// classes poo

class product {
    constructor(name, price) {
    this.name = name
    this.price = price
    }

    productdetails(){
        return `O nome do produto é ${this.name} e o preço é de R$ ${this.price}`
    }
}

const socks = new product("meia branca", 10.99)
const shirt = new product("Camisa preta", 39.99)


console.log(socks.name)
console.log(socks.price)

console.log(shirt.name)
console.log(shirt.price)

console.log(shirt.productdetails())
console.log(socks.productdetails())


