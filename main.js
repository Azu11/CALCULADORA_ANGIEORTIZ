let pantalla = "";

function escribir(valor) {
    // Obtener la parte del número actual, después del último operador
    let ultimoNumero = pantalla.split(/[\+\-\*\/]/).pop();

    // Evitar más de un punto por número
    if (valor === '.' && ultimoNumero.includes('.')) {
        return; 
    }
    pantalla += valor;
    document.getElementById("pantalla").value = pantalla;
}

function calcular() {
    try {
        let resultado = operacionMatematica(pantalla);
        document.getElementById("pantalla").value = resultado;
        pantalla = resultado.toString(); 
    } catch (e) {
        alert("Operación no válida");
    }
}

function operacionMatematica(operacion) {
    let resultado = 0;
    let operadores = operacion.split(/(\+|\-|\*|\/)/); 
    resultado = parseFloat(operadores[0]);

    for (let i = 1; i < operadores.length; i += 2) {
        let operador = operadores[i];
        let numero = parseFloat(operadores[i + 1]);

        switch (operador) {
            case "+":
                resultado += numero;
                break;
            case "-":
                resultado -= numero;
                break;
            case "*":
                resultado *= numero;
                break;
            case "/":
                resultado /= numero;
                break;
            default:
                throw new Error("Operación no válida");
        }
    }
    return resultado;
}

function borrar() {
    pantalla = "";
    document.getElementById("pantalla").value = "";
}
