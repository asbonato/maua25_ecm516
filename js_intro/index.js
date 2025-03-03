var linguagem = "Javascript";
console.log("Aprendendo " + linguagem);
//variável pode ser redlecarada
var linguagem = "Java";
console.log("Aprendendo " + linguagem);
// a variável nome já existe aqui, mas não tem valor atribuído
// ela é içada - do inglês hoist - para fora do bloco
console.log(`Oi, ${nome}`);
var idade = 18;
if (idade >= 18) {
  var nome = "João";
  console.log(`Parabéns, ${nome}. Você pode dirigir.`);
}
console.log(`Até mais, ${nome}.`);

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
