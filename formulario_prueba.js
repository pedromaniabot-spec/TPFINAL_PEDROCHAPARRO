document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formularioPrueba');
    const resultadoDiv = document.getElementById('resultadoPrueba');
    const puntuacionP = document.getElementById('puntuacion');
    const mensajeP = document.getElementById('mensaje');

    // Definición de las respuestas correctas
    const respuestasCorrectas = {
        pregunta1: 'a', // <a/>
        pregunta2: 'bg', // background-color
        pregunta3: 'const' // const
    };

    // Función principal para evaluar la prueba
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita el envío del formulario por defecto

        let puntuacion = 0;
        const totalPreguntas = Object.keys(respuestasCorrectas).length;

        // 1. Obtener las respuestas del usuario
        const respuestasUsuario = {
            pregunta1: form.elements.pregunta1.value,
            pregunta2: form.elements.pregunta2.value,
            pregunta3: form.elements.pregunta3.value
        };

        // 2. Iterar y comparar con las respuestas correctas
        for (const pregunta in respuestasCorrectas) {
            // Asegúrate de que la pregunta fue respondida
            if (respuestasUsuario[pregunta] && respuestasUsuario[pregunta] === respuestasCorrectas[pregunta]) {
                puntuacion++;
            }
        }

        // 3. Determinar el mensaje de resultado
        let mensaje;
        if (puntuacion === totalPreguntas) {
            mensaje = '¡Felicidades! Tienes un conocimiento web excelente. 🏆';
        } else if (puntuacion >= 2) {
            mensaje = 'Muy bien, tienes una buena base. Sigue practicando. 👍';
        } else {
            mensaje = 'Necesitas reforzar tus conocimientos básicos. ¡No te rindas! 📚';
        }

        // 4. Mostrar el resultado en la página
        puntuacionP.innerHTML = `Obtuviste **${puntuacion}** de **${totalPreguntas}** respuestas correctas.`;
        mensajeP.textContent = mensaje;
        resultadoDiv.style.display = 'block';
    });
});
