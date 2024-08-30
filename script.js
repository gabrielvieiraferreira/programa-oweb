function Idade() {
    var ano, idade, mensagem;
    ano = document.getElementById("anoquenasceu?").value;
    idade = 2024 - ano;
    
    if (idade >= 18) {
        mensagem = "Você tem " + idade + " anos. Você é maior de idade.";
    } else {
        mensagem = "Você tem " + idade + " anos. Você é menor de idade.";
    }

    document.getElementById("resultado").innerHTML = mensagem;
}