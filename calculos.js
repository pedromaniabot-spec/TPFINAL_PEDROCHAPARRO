document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener referencias a los elementos del DOM
    const num1Input = document.getElementById('numero1');
    const num2Input = document.getElementById('numero2');
    const resultadoP = document.getElementById('resultado-calculo');
    const botones = document.querySelectorAll('.btn-operacion');

    // 2. Función principal para realizar el cálculo
    function realizarOperacion(operacion) {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        let resultado;
        let operacionSimbolo;

        // Validar que ambos inputs sean números válidos
        if (isNaN(num1) || isNaN(num2)) {
            resultadoP.textContent = "Error: Por favor, ingresa dos números válidos.";
            return;
        }

        // 3. Lógica para cada operación
        switch (operacion) {
            case 'suma':
                resultado = num1 + num2;
                operacionSimbolo = '+';
                break;
            case 'resta':
                resultado = num1 - num2;
                operacionSimbolo = '-';
                break;
            case 'multiplicacion':
                resultado = num1 * num2;
                operacionSimbolo = 'x';
                break;
            case 'division':
                // Manejo especial para la división por cero
                if (num2 === 0) {
                    resultadoP.textContent = "¡No se puede dividir por cero!";
                    return;
                }
                resultado = num1 / num2;
                operacionSimbolo = '/';
                break;
            default:
                resultadoP.textContent = "Error: Operación no reconocida.";
                return;
        }

        // 4. Mostrar el resultado formateado
        resultadoP.textContent = `${num1} ${operacionSimbolo} ${num2} = ${resultado.toFixed(2)}`;
    }

    // 5. Asignar el evento click a cada botón de operación
    botones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            // Obtener la operación del atributo 'data-operacion' del botón
            const operacion = e.currentTarget.getAttribute('data-operacion');
            realizarOperacion(operacion);
        });
    });
    
    // Ejecutar una operación inicial al cargar (opcional)
    realizarOperacion('suma');
});
