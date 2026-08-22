function cepFormat(input) {
    const cep = input.value.replace(/\D/g, "")
    input.value = cep.replace(/^(\d{5})(\d)/, "$1-$2")
}