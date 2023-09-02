/* Revisão dos conteúdos abordados (Javascript):

variáveis (tipos de variáveis: string, number, boolean, array, symbol())
estrutura de decisão (if/else, switch/case)
estrutura de repetição (loop for, while(true))
funções

*/

/* Funções reservadas pela linguagem possuem nome próprio e uma estrutura pré-determinada. Nesse caso, elas não são criadas pelo desenvolvedor, ele apenas as utiliza em seu projeto, chamando-as pelo nome 



/* var mesAniversario;
mesAniversario = prompt("Digite o mês do seu aniversário:");
alert("O mês do meu aniversário é " + mesAniversario);


/* Funções personalizadas: são criadas pelo desenvolvedor, recebem um nome de sua escolha e sempre atendem à seguinte estrutura:


function nomeDaFuncao(){

}

*/

function saudacao() {
    console.log("Olá, mundo!");
}

// Chamar a função para ser executada
saudacao();


var numero1, numero2;
numero1 = parseFloat(prompt("Digite o primeiro número: "));
numero2 = parseFloat(prompt("Digite o segundo número: "));


function somarNumeros() {
    var resultado = numero1 + numero2;
    alert(resultado);
}

somarNumeros();

numero1 = parseFloat(prompt("Digite o primeiro número: "));
numero2 = parseFloat(prompt("Digite o segundo número: "));
somarNumeros();
