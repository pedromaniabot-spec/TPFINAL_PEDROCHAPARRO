document.addEventListener('DOMContentLoaded', () => {
    // ... (Código del clima y países ya deben estar aquí) ...
    
    const inputPokemon = document.getElementById('inputPokemon');
    const btnBuscarPokemon = document.getElementById('btnBuscarPokemon');
    const resultadoPokemonDiv = document.getElementById('resultadoPokemon');
    const mensajeErrorPokemonDiv = document.getElementById('mensajeErrorPokemon');
    const pokemonTiposDiv = document.getElementById('pokemonTipos');
    const pokemonStatsList = document.getElementById('pokemonStats');

    // Mapeo simple de colores de tipos (necesario para el CSS)
    const typeColors = {
        fire: '#FD7D24', grass: '#9BCC50', electric: '#F7D02C', water: '#4592C4',
        ground: '#F7E043', rock: '#A38C21', steel: '#9EB7B8', ice: '#51C4E7',
        flying: '#A890F0', poison: '#B97FC9', psychic: '#F366B9', bug: '#729F36',
        ghost: '#7B62A0', normal: '#A4ACAF', fighting: '#D56723', dark: '#707070',
        dragon: '#53A4CF', fairy: '#FDB9E9'
    };

    btnBuscarPokemon.addEventListener('click', () => {
        const nombreOId = inputPokemon.value.trim().toLowerCase();
        if (nombreOId) {
            consultarPokemon(nombreOId);
        } else {
            alert('Por favor, ingresa el nombre o ID del Pokémon.');
        }
    });

    const consultarPokemon = async (nombreOId) => {
        resultadoPokemonDiv.style.display = 'none';
        mensajeErrorPokemonDiv.style.display = 'none';

        const URL_POKEMON = `https://pokeapi.co/api/v2/pokemon/${nombreOId}`;

        try {
            const respuesta = await fetch(URL_POKEMON);
            
            if (!respuesta.ok) {
                mensajeErrorPokemonDiv.style.display = 'block';
                return;
            }

            const data = await respuesta.json();
            mostrarPokemon(data);

        } catch (error) {
            console.error('Error al consultar la PokéAPI:', error);
            mensajeErrorPokemonDiv.style.display = 'block';
        }
    };

    const mostrarPokemon = (data) => {
        // Limpiar contenedores
        pokemonTiposDiv.innerHTML = '';
        pokemonStatsList.innerHTML = '';
        
        // Datos básicos
        document.getElementById('pokemonNombre').textContent = data.name.toUpperCase();
        document.getElementById('pokemonId').textContent = data.id.toString().padStart(3, '0');
        
        // La API devuelve altura y peso en decímetros y hectogramos. Convertimos a metros y kg.
        document.getElementById('pokemonAltura').textContent = (data.height / 10).toFixed(1);
        document.getElementById('pokemonPeso').textContent = (data.weight / 10).toFixed(1);
        
        // Sprite (imagen)
        const spriteUrl = data.sprites.front_default; // Se usa el sprite frontal
        document.getElementById('pokemonSprite').src = spriteUrl;
        
        // Tipos
        data.types.forEach(typeInfo => {
            const typeName = typeInfo.type.name;
            const typeSpan = document.createElement('span');
            typeSpan.classList.add('pokemon-type');
            typeSpan.textContent = typeName.toUpperCase();
            typeSpan.style.backgroundColor = typeColors[typeName] || '#777'; // Asigna el color
            pokemonTiposDiv.appendChild(typeSpan);
        });

        // Estadísticas Base
        data.stats.forEach(statInfo => {
            const statLi = document.createElement('li');
            const statName = statInfo.stat.name.replace('-', ' ').toUpperCase();
            const statValue = statInfo.base_stat;

            statLi.innerHTML = `<strong>${statName}:</strong> ${statValue}`;
            pokemonStatsList.appendChild(statLi);
        });

        resultadoPokemonDiv.style.display = 'block';
    };
});
