// arrow functions
const hello = () => console.log("Hello")
hello()

const dobro = (valor) => valor * 2
console.log(dobro(10))

const triplo = (valor) => {
    return valor * 3
}
console.log(triplo(10))

const ePar = n => {
    n % 2 === 0
}
console.log(ePar(10))

const ePar1 = n => {
    return n % 2 === 0
}
console.log(ePar1(10))

// // funções
// function hello (){
//     console.log('Oi')
// }
// hello()
// //redefinição de função
// function hello(nome){
//     console.log(`Hello, ${nome}`)
// }
// hello('Pedro')

// function soma(a, b) {
//     return a + b
// }
// const res = soma(2, 3)
// console.log(res)

// const res1 = soma('2', 3)
// console.log(res1)

// //funções anônimas
// const dobro = function (n) {
//     return n * 2
// }
// const res2 = dobro(4)
// console.log(res2)

// // criar parâmetros com valor padrão
// const triplo = function(n = 5){
//     return 3 * n
// } 
// console.log(triplo())
// console.log(triplo(10))

// const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]

// const apenasComA = nomes.filter((n) => n.startsWith("A"))
// //estamos usando uma arrow function
// console.log(apenasComA)

// const res = nomes.map((n) => n.charAt(0))
// console.log(res)

// const todosComecamComA = nomes.every((n) => n.startsWith('A'))
// console.log(todosComecamComA)

// valores = [1, 2, 3, 4]
// const soma = valores.reduce((ac, v) => ac + v)
// console.log(soma)

// //vetores
// //declaração
// v1 = []
// //atribuição com igual
// //podemos acessar qq posição, começando do zero
// v1[0] = 3.4
// v1[10] = 2
// v1[2] = "abc"
// console.log(v1.length)
// console.log(v1)
// //inicializando na declaração
// v2 = [2, "abc", true]
// console.log(v2)
// //iterando
// for(let i = 0; i < v2.length; i++){
//     console.log(v2[i])
// }
// //vetores constantes
// const v3 = [1]
// v3[2] = "abc"
// console.log(v3)
// //v3 = [4] dá erro

// //comparação
// console.log(1 == 1)//true
// console.log(1 == '1')//true
// console.log(1 === 1)//true
// console.log(1 === '1')//false
// console.log(true == 1)//true
// console.log(true == 0)//false
// console.log(true == 2)//false
// console.log(false == 2)//false
// console.log(false == 0)//true
// console.log(1 == [1]) //true
// console.log(null == null)//true
// console.log(null == undefined)//true
// console.log([] == false)//true
// console.log([] == [])//false

// //coerção
// const n1 = 2
// const n2 = '3'

// //coerção implícita a concatenação acontece
// const n3 = n1 + n2
// console.log(n3)

// //na coerção explícita a soma acontece
// const n4 = n1 + Number(n2)
// console.log(n4)

// var linguagem = "Javascript"
// console.log("Aprendendo " + linguagem)
// //variável pode ser redlecarada
// var linguagem = "Java"
// console.log("Aprendendo " + linguagem)
// // a variável nome já existe aqui, mas não tem valor atribuído
// // ela é içada - do inglês hoist - para fora do bloco 
// console.log(`Oi, ${nome}`)
// var idade = 18
// if (idade >= 18){
//     var nome = "João"
//     console.log(`Parabéns, ${nome}. Você pode dirigir.`)
// }
// console.log(`Até mais, ${nome}.`)
// //declarando constantes
// const nome = 'José'
// const idade = 27
// console.log(nome, idade)
// //idade = 21 dá erro
// //aspas simples e duplas tem o mesmo efeito
// const genero = "M"
// const endereco = "Rua Olho D'Água, 23"
// console.log(nome, idade, genero, endereco)
// //declarando variáveis locais
// let a = 2
// let b = 'abc'
// console.log(a, b)
// //declarando variáveis globais
// var c = 2 + 3
// var d = 'abcd'
// console.log(c, d)