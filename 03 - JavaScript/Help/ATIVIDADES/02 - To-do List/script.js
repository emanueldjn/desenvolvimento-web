document.getElementById('adicionar').addEventListener('click', function() {
    let tarefa = document.getElementById('tarefa').value;

    if (tarefa) {
        let li = document.createElement('li');
        li.innerHTML = tarefa

        li.addEventListener ('click', function() {
            li.remove()
        });
        
        document.getElementById('lista').appendChild(li);
        document.getElementById('tarefa').value = '';
    }
})