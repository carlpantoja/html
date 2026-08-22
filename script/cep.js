const apiCep = async() => {
    document.getElementById("load").style.display = "block"
    const cep = document.getElementById("cep").value

    let resposta = ""

    document.querySelector(".erro").style.display = "block"

    switch(true) {
        case cep.length < 9:
            resposta = `${cep} é um cep inválido!`
            document.querySelector(".erro").innerHTML = resposta
            break
        case cep.length > 9:
            resposta = `${cep} é um cep inválido!`
            document.querySelector(".erro").innerHTML = resposta
            break
        default:
            const url = `https://viacep.com.br/ws/${cep}/json/`
            const dados = await connect(url)

            if(dados.erro === "true") {
                resposta = `${cep} é um cep inválido!`
                document.querySelector(".erro").innerHTML = resposta
            } else {
                document.querySelector(".erro").style.display = "none"

                document.getElementById("logradouro").value = dados.logradouro
                document.getElementById("complemento").value = dados.complemento
                document.getElementById("bairro").value = dados.bairro
                document.getElementById("localidade").value = dados.localidade
                document.getElementById("estado").value = dados.estado
            }
            break
    }

    document.getElementById("load").style.display = "none"
}