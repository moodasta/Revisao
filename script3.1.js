var nomesAlunos = [];

// Loop para adicionar novos nomes à matriz
while (true) {
    var novoNome = prompt("Digite o nome do aluno (ou 'sair' para encerrar):");

    if (novoNome.toLowerCase() === "sair") {
        break; // Encerra o loop quando o usuário digita "sair"
    } 
    
    //SE NÃO
    else {
        //nomesAlunos = ["Pamella, "João", "Roberto"]
        nomesAlunos.push(novoNome); //Adiciona o novo nome à matriz
    }


}

// Exibe a lista de nomes de alunos no console
console.log("Nomes dos alunos:");
for (var i = 0; i < nomesAlunos.length; i++) {
    console.log(nomesAlunos[i]);
}