let url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL"

function converter() {
    let input = document.getElementById("valor")
    let valor = input.value


    fetch(url)
        .then((res) => {
            res.json()
        })

        .then((data) => {
            let rate = data.rates.BRL
            document.getElementById("resuldado").innerHTML = rate * valor
    
            let resultado = `${valor} dolares = ${rate * valor} em reais`
            document.getElementById("resultado").innerHTML = resultado
        })

}