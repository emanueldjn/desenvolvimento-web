let area = document.getElementById("area");

function clicar() {
    area.innerText = "Você clicou!"
    area.style = "background-color: blue"
}

function entrar() {
    area.innerText = "Entrou com o mouse "
    area.style = "background-color: yellow"
}

function sair() {
    area.innerText = "Saiu com o mouse"
    area.style = "background-color: black"
}