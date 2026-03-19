function gerar() {
    var caracteres = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%&*"
    var senha = ""
    var i = 0

    while (i < 8) {
        var aleatorio = Math.floor(Math.random() * caracteres.length)
        senha = senha + caracteres[aleatorio]
        i = i + 1
    }

    document.getElementById("senha").value = senha
}