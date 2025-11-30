// js/apis.js

document.addEventListener('DOMContentLoaded', () => {
    // Reemplaza esta línea con tu clave de la API de OpenWeatherMap
    const API_KEY = '073af263647213d1c9a6de533a7b6c97'; 
    const URL_BASE = 'https://api.openweathermap.org/data/2.5/weather';

    const inputCiudad = document.getElementById('inputCiudad');
    const btnBuscarClima = document.getElementById('btnBuscarClima');
    const resultadoDiv = document.getElementById('resultadoClima');
    const mensajeErrorDiv = document.getElementById('mensajeError');
    const iconoClimaImg = document.getElementById('iconoClima');

    btnBuscarClima.addEventListener('click', () => {
        const ciudad = inputCiudad.value.trim();
        if (ciudad) {
            consultarClima(ciudad);
        } else {
            alert('Por favor, ingresa el nombre de una ciudad.');
        }
    });

    const consultarClima = async (ciudad) => {
        // Ocultar resultados y errores anteriores
        resultadoDiv.style.display = 'none';
        mensajeErrorDiv.style.display = 'none';

        // Construir la URL completa: 'q=' para la ciudad, 'units=metric' para grados Celsius, 'lang=es' para español.
        const url = `${URL_BASE}?q=${ciudad}&units=metric&lang=es&appid=${API_KEY}`;

        try {
            const respuesta = await fetch(url);
            
            if (!respuesta.ok) {
                // Si la respuesta es 404 (Ciudad no encontrada) o similar
                mensajeErrorDiv.style.display = 'block';
                return;
            }

            const data = await respuesta.json();
            mostrarClima(data);

        } catch (error) {
            console.error('Error al consultar la API del clima:', error);
            mensajeErrorDiv.textContent = 'Hubo un error de conexión. Inténtalo más tarde.';
            mensajeErrorDiv.style.display = 'block';
        }
    };

    const mostrarClima = (data) => {
        const temperatura = data.main.temp;
        const humedad = data.main.humidity;
        const viento = data.wind.speed;
        const estado = data.weather[0].description;
        const icono = data.weather[0].icon;

        document.getElementById('ciudadNombre').textContent = `${data.name}, ${data.sys.country}`;
        document.getElementById('temperatura').textContent = `${temperatura.toFixed(1)}°C`;
        document.getElementById('humedad').textContent = `${humedad}%`;
        
        // Convertir la velocidad del viento (m/s) a km/h (m/s * 3.6)
        document.getElementById('viento').textContent = `${(viento * 3.6).toFixed(1)} km/h`;
        
        // Poner la primera letra de la descripción en mayúscula
        const estadoCapitalizado = estado.charAt(0).toUpperCase() + estado.slice(1);
        document.getElementById('estadoClima').textContent = estadoCapitalizado;

        // Mostrar el icono
        iconoClimaImg.src = `https://openweathermap.org/img/wn/${icono}@2x.png`;
        iconoClimaImg.style.display = 'inline-block';

        resultadoDiv.style.display = 'block';
    };
});
