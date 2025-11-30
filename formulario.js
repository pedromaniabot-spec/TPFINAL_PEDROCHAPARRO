document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formularioMatriculacion');
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const emailInput = document.getElementById('email');
    const carreraSelect = document.getElementById('carrera');
    const terminosCheckbox = document.getElementById('aceptoTerminos');
    
    // Función para mostrar mensajes de error
    const mostrarError = (elemento, mensaje) => {
        const errorDiv = document.getElementById(`error-${elemento.id}`);
        if (errorDiv) {
            errorDiv.textContent = mensaje;
            elemento.classList.add('input-error'); // Opcional: añade una clase para estilizar el borde
        }
    };

    // Función para limpiar mensajes de error
    const limpiarError = (elemento) => {
        const errorDiv = document.getElementById(`error-${elemento.id}`);
        if (errorDiv) {
            errorDiv.textContent = '';
            elemento.classList.remove('input-error');
        }
    };

    // Función de validación de Email (Regex simple)
    const validarEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Función principal de validación
    const validarFormulario = (e) => {
        e.preventDefault(); // Evita el envío por defecto

        let esValido = true;
        
        // 1. Validar Nombre
        if (nombreInput.value.trim() === '') {
            mostrarError(nombreInput, 'El nombre es obligatorio.');
            esValido = false;
        } else {
            limpiarError(nombreInput);
        }

        // 2. Validar Apellido
        if (apellidoInput.value.trim() === '') {
            mostrarError(apellidoInput, 'El apellido es obligatorio.');
            esValido = false;
        } else {
            limpiarError(apellidoInput);
        }

        // 3. Validar Email
        const emailValue = emailInput.value.trim();
        if (emailValue === '') {
            mostrarError(emailInput, 'El correo electrónico es obligatorio.');
            esValido = false;
        } else if (!validarEmail(emailValue)) {
            mostrarError(emailInput, 'Formato de correo electrónico no válido.');
            esValido = false;
        } else {
            limpiarError(emailInput);
        }

        // 4. Validar Carrera
        if (carreraSelect.value === '') {
            mostrarError(carreraSelect, 'Debes seleccionar una carrera.');
            esValido = false;
        } else {
            limpiarError(carreraSelect);
        }

        // 5. Validar Turno (radios)
        const turnoRadios = form.elements.namedItem('turno');
        if (!turnoRadios.value) {
            mostrarError(turnoRadios, 'Debes seleccionar un turno.');
            esValido = false;
        } else {
            // Como no hay un input con id="turno", usamos el error-mensaje de la misma sección
            const errorTurnoDiv = document.getElementById('error-turno');
            if (errorTurnoDiv) errorTurnoDiv.textContent = '';
        }

        // 6. Validar Términos y Condiciones
        if (!terminosCheckbox.checked) {
            mostrarError(terminosCheckbox, 'Debes aceptar los términos y condiciones.');
            esValido = false;
        } else {
            limpiarError(terminosCheckbox);
        }

        // Si todas las validaciones pasan, se envía el formulario (simulado)
        if (esValido) {
            alert('¡Matriculación enviada con éxito!\nRevisaremos tus datos pronto.');
            form.reset(); // Limpia los campos después del "envío"
        }
    };

    // Agregar el Listener al evento de submit del formulario
    form.addEventListener('submit', validarFormulario);
});
