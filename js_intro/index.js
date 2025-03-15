//promises

function calculoDemorado(numero){
    return new Promise(function (resolve, reject) {
        let res = 0
        for (let i = 1; i <= numero; i++){
            res += i
        }
        resolve(res)
    })
}

calculoDemorado(10)
    .then((resultado)=>{
        console.log(resultado)
    })

function calculoRapidinho(numero){
    return Promise.resolve(numero*(numero+1)/2)
}
calculoRapidinho(100)
    .then((resultado) => {
        console.log(resultado)
    })

console.log('Esperando')

function calculoRapidinhoRobusto(numero){
    return numero >= 0
        ? Promise.resolve(numero*(numero+1)/2)
        : Promise.reject('Somente valores positivos')
}

calculoRapidinhoRobusto(20)
    .then((resultado) => {
        console.log(resultado)
    })
    .catch((err) => {
        console.log(err)
    })

    calculoRapidinhoRobusto(-1)
    .then((resultado) => {
        console.log(resultado)
    })
    .catch((err) => {
        console.log(err)
    })



// const fs = require('fs')
// const abrirArquivo = function (nomeArquivo){
//     const exibirConteudo = function (erro, conteudo) {
//         if (erro) {
//             console.log(`Deu erro: ${erro}`)
//         } else {
//             console.log(conteudo.toString())
//             const dobro = conteudo.toString() * 2
//             const finalizar = function(erro){
//                 if(erro){
//                     console.log('Deu erro tentando salvar o código')
//                 } else {
//                     console.log('Salvou o dobro com sucesso')
//                 }
//             }
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//         }
//     }
//     fs.readFile(nomeArquivo, exibirConteudo)
// }
// abrirArquivo('arquivo.txt')

// const fs = require('fs')
// const abrirArquivo = function (nomeArquivo){
//     const exibirConteudo = function (erro, conteudo) {
//         if (erro) {
//             console.log(`Deu erro: ${erro}`)
//         } else {
//             console.log(conteudo.toString())
//         }
//     }
//     fs.readFile(nomeArquivo, exibirConteudo)
// }
// abrirArquivo('arquivo.txt')

// function demorada(tempo){
//     console.log(`demorada ${tempo}`)
//     const atualMaisTempo = new Date().getTime() + tempo
//     while (new Date().getTime() <= atualMaisTempo);
//     const d = 8 + 4
//     return d
// }
// setTimeout(function(){demorada(2000)}, 2000)
// setTimeout(function(){demorada(1000)}, 1000)
// console.log('fim do script principal')

// setTimeout(function(){
//     console.log('dentro da timeout')
// }, 0)
// const a = new Date().getTime() + 5000
// while(new Date().getTime() <= a);
// console.log('fora da timeout')

// function demorada(){
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while(new Date().getTime() <= atualMais2Segundos);
//     const d = 8 + 4
//     return d
// }
// const a = 2 + 3
// const b = 5 + 9
// //const d = demorada()
// ///* o valor da constante e não depende do valor
// //   devolvido pela função demorada */

// // a função será executada depois de, pelo menos, 500
// // milissegundos
// setTimeout(function(){
//     const d = demorada()
//     console.log(d)
// }, 500)
// //enquanto isso, essas linhas prosseguem executando
// //sem ficar esperando
// const e = 2 + a + b
// console.log(e)


// // modelo single thread
// console.log("Eu primeiro")
// console.log("Agora eu")
// console.log("Sempre vou ser a última")

// const a = 2 + 7
// const b = 5
// console.log(a + b)


// //JSON object
// let pessoa = {
//     nome: "João",
//     idade: 17,
// }
// console.log(pessoa)
// console.log('Me chamo ' + pessoa.nome)
// console.log('Minha idade é ' + pessoa['idade'] + " anos")

// function getPropriedade(prop){
//     console.log(pessoa[prop])
// }
// getPropriedade('nome')
// getPropriedade('idade')

// let pessoaComEndereco = {
//     nome: 'Maria',
//     idade: 21,
//     endereco: {
//         logradouro: 'Rua B',
//         numero: 121,
//         complemento: 'apto 12'
//     },
// }
// console.log(
//     `
//     Sou ${pessoaComEndereco.nome},
//     tenho ${pessoaComEndereco.idade} anos
//     e moro na ${pessoaComEndereco.endereco.logradouro},
//     no número ${pessoaComEndereco['endereco']['numero']},
//     apartamento ${pessoaComEndereco.endereco['complemento']}
//     `
// )

// let concessionaria = {
//     cnpj: "000111222/0001-45",
//     endereco: {
//         logradouro: 'Rua A',
//         numero: 10,
//         bairro: "Vila J",
//         coordenadas: {
//             latitude: 43.12345,
//             longitude: -23.002321
//         }
//     },
//     veiculos: [
//         {
//             marca: "Ford",
//             modelo: "Ecosport",
//             anoDeFabricacao: 2018
//         },
//         {
//             marca: "Chevrolet",
//             modelo: "Onix",
//             anoDeFabricacao: 2020
//         },
//         {
//             marca: "Volkswagen",
//             modelo: "Nivus",
//             anoDeFabricacao: 2023
//         }
//     ]
// }

// //uso de JSON Array
// for (let veiculo of concessionaria.veiculos){
//     console.log(`Marca: ${veiculo.marca}`)
//     console.log(`Modelo: ${veiculo.modelo}`)
//     console.log(`Ano de Fabricação: ${veiculo.anoDeFabricacao}`)
// }

// //funções em um JSON
// let calculadora = {
//     soma: (a, b) => a + b,
//     subtracao: function(a, b){
//         return a - b
//     }
// }

// console.log(`2 + 3 = ${calculadora.soma(2, 3)}`)
// console.log(`3 - 2 = ${calculadora.subtracao(3, 2)}`)


// //escopo de uma função
// function f() {
//     let nome = 'João'
//     function g() {
//         console.log(nome)
//     }
//     g()
// }
// f()

// function ola(){
//     let nome = 'João'
//     return function(){
//         console.log('Olá, '+nome)
//     }
// }
// let olaResult = ola()
// olaResult()

// //também vale com parâmetros
// function saudacoesFactory(saudacao, nome){
//     return function(){
//         console.log(saudacao + ', ' + nome)
//     }
// }
// let olaJoao = saudacoesFactory('Olá', 'João')
// let tchauJose = saudacoesFactory('Tchau', 'José')
// olaJoao()
// tchauJose()

// function eAgora(){
//     let cont = 1
//     function f1(){
//         console.log(cont)
//     }
//     cont++
//     function f2(){
//         console.log(cont)
//     }
//     //JSON contendo duas funções
//     return {f1, f2}
// }
// let eAgoraResult = eAgora()
// eAgoraResult.f1()
// eAgoraResult.f2()

// //closure
// //uma função pode ser atribuída a uma variável
// let umaFuncao = function(){
//     console.log('Fui armazenada em uma variável')
// }
// umaFuncao()
// /* f recebe uma função como parâmetro e por isso
//    é chamada de função de alta ordem; por devolver
//    uma função g também é de alta ordem
// */
// function f (funcao){
//     //executo a função recebida
//     funcao()
// }
// f(umaFuncao)

// function g(){
//     function outraFuncao(){
//         console.log("Fui criada por g")
//     }
//     return outraFuncao
// }
// // não escreve nada
// g()
// //também não
// f(g)
// //agora sim
// f(g())

// //definir a função no momento em que ela será chamada
// f(function (){
//     console.log("Estou sendo passada para f")
// })

// //g pode ser chamada assim
// const gResult = g()
// console.log(gResult)
// gResult()
// //posso chamar assim também
// g()()

// //f(g()()) //dá erro
// //f(1) // dá erro




// // arrow functions
// const hello = () => console.log("Hello")
// hello()

// const dobro = (valor) => valor * 2
// console.log(dobro(10))

// const triplo = (valor) => {
//     return valor * 3
// }
// console.log(triplo(10))

// const ePar = n => {
//     n % 2 === 0
// }
// console.log(ePar(10))

// const ePar1 = n => {
//     return n % 2 === 0
// }
// console.log(ePar1(10))

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