const livros = require('./database');

// pegar o input usando a biblioteca readline-sync
const readline = require('readline-sync');

//utilizando o metodo nativo da readline-sync question, que permite fazer alguma pergunta que será o parâmetro da busca/resposta
const entradaInicial = readline.question('Deseja buscar um livro específico? S/N');

/*após receber a entrada, buscar capturar esse input
Se a resposta for sim, mostrar os títulos disponíveis e perguntar qual categoria ela escolhe. 
Se a resposta for não, mostrar todos os livros em ordem crescente pelo número do id.
*/

if (entradaInicial.toLocaleUpperCase()==='S'){
    let titulos =  livros.map(livros=> console.log(livros.titulo));
    console.log(titulos); 

// escolhendo o título após apresentação da lista de títulos

const entradaTitulo = readline.question ('Escreva o nome do título que deseja obter mais informações: ')
const retorno = livros.filter(livro => livro.titulo === entradaTitulo);
console.table(retorno);
}
else{
    ordemDecrescente = livros.sort((a, b) => b.id - a.id);
    console.log('Esses são todos os livros disponíveis : ');
    console.table(ordemDecrescente); 
}




