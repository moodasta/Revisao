/* Exercício: Criar um algoritmo em que solicite ao usuário seu nome e seu sexo biológico.
Se o sexo biológico for igual a masculino, solicite ao usuário sua idade.
A partir desta informação, se a idade for maior ou igual a 18 anos, exiba na tela que o usuário deve comparecer à Junta do Serviço Militar para retirar o certificado de dispensa.
Já se o sexo biológico for feminino, não será necessário perguntar a idade e exiba na tela que o usuário não precisa comparecer à Junta do Serviço Militar. */

var nome, sexoB, idade;

nome = prompt("Digite o seu nome: ");

sexoB = prompt("Digite o seu sexo biológico: ");

if (sexoB == "masculino") {
  idade = prompt("Digite sua idade: ");

  if (idade >= 18) {
    alert("Você deve comparecer à Junta Militar e retirar o certificado de dispensa!");

  } 
  
  else {
    alert("Por ser menor de idade, não é necessário retirar o certificado!");
    }

} 

else {
  alert("De acordo com a legislação brasileira, as políticas não se aplicam!");
}
