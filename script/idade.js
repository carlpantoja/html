function calcularIdade(date) {
    const data = +new Date(date)
    const idade = (Date.now() - data) / (31557600000) /*1ano*/

    let resposta = ""

    document.getElementById("idade").style.display = "none"
    document.querySelector(".erro").style.display = "block"

    switch(true) {
        case isNaN(idade):
            document.querySelector(".erro").style.display = "none"
            break
        case idade < 0:
            resposta = `Você não pode ter idade negativa!`
            document.querySelector(".erro").innerHTML = resposta
            break
        default:
            document.getElementById("idade").style.display = "block"
            document.querySelector(".erro").style.display = "none"
            resposta = `Você tem ${parseInt(idade)} anos`
            document.getElementById("idade").innerHTML = resposta
            break
    }
}