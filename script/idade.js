function calcularIdade(date) {
    const data = +new Date(date)
    const idade = (Date.now() - data) / (31557600000) /*1ano*/

    let resposta = ""

    document.getElementById("idade").style.display = "none"
    document.querySelector(".erroIdade").style.display = "block"

    switch(true) {
        case isNaN(idade):
            document.querySelector(".erroIdade").style.display = "none"
            break
        case idade < 0:
            resposta = `Você não pode ter idade negativa!`
            document.querySelector(".erroIdade").innerHTML = resposta
            break
        default:
            document.getElementById("idade").style.display = "block"
            document.querySelector(".erroIdade").style.display = "none"
            resposta = `Você tem ${parseInt(idade)} anos`
            document.getElementById("idade").innerHTML = resposta
            break
    }
}