// for (inicialização, condição; atualização)

// Inicialização: É executada uma vez no início do loop e é utilizada para configurar variáveis ou realizar outras operações iniciais.
// Condição: É avaliada antes de cada iteração. Se a condição for verdadeira, o bloco de código é executado; caso contrário, o loop é encerrado.
// Atualização: É executada após cada iteração e é usada para atualizar variáveis ou realizar outras ações necessárias. 

// Use for quando souber o número exato de iterações antecipadamente
for (let i = 0; i < 5; i++) {
    console.log('interacion ' + i);
}

// Use while quando a execução do bloco de código depender de uma condição dinâmica que pode mudar durante a execução.
let contador = 0;

while (contador < 5) {
    console.log('interação ' + contador);
    contador++;
}