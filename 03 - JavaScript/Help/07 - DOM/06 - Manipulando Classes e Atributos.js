let elemento = document.getElementById('meuElemento')

// Adicionando nova classe
elemento.classList.add('novaClasse')

// Removendo uma classe
elemento.classList.remove('novaClasse');

// Adicionando um atributo
elemento.setAttribute('data-atributo', 'valor');

// Obtendo um atributo
let valor = elemento.getAttribute('data-atributo');
console.log(valor);