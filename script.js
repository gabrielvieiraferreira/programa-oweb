function calcularSalario() {
    
    let salarioBase = parseFloat(document.getElementById("salario").value);
    let cargo = document.getElementById("cargo").value;
    let aumento;
    let percentual;

    
    switch (cargo) {
        case "diretor":
            percentual = 0.10; 
            break;
        case "secretario":
            percentual = 0.20; 
            break;
        case "operador":
            percentual = 0.30;
            break;
        default:
            percentual = 0;
    }

    
    aumento = salarioBase * percentual;
    let salarioAtualizado = salarioBase + aumento;

    
    document.getElementById("resultado").innerHTML = 
        `O novo salário é R$${salarioAtualizado.toFixed(2)} com um aumento de ${percentual * 100}%`;
}
