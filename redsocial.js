document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Selecciona todos los botones de like en la página
    const likeButtons = document.querySelectorAll('.btn-like');
    
    // 2. Itera sobre cada botón y añade un listener
    likeButtons.forEach(button => {
        // Inicializar el estado de like (para evitar que se pueda dar like infinitamente)
        let isLiked = false;
        
        button.addEventListener('click', () => {
            
            // Obtener el ID de la publicación desde el atributo data-post
            const postId = button.getAttribute('data-post');
            const counterElement = document.getElementById(`likes-${postId}`);
            
            if (!counterElement) return; // Asegura que el contador existe
            
            let currentLikes = parseInt(counterElement.textContent);
            
            if (isLiked) {
                // Si ya se ha dado like, lo revertimos (UNLIKE)
                currentLikes--;
                isLiked = false;
                
                // Cambiar el ícono a corazón vacío (fa-regular)
                button.querySelector('i').classList.remove('fa-solid');
                button.querySelector('i').classList.add('fa-regular');
                
                button.classList.remove('liked');
                
            } else {
                // Si no se ha dado like, lo incrementamos (LIKE)
                currentLikes++;
                isLiked = true;
                
                // Cambiar el ícono a corazón lleno (fa-solid)
                button.querySelector('i').classList.remove('fa-regular');
                button.querySelector('i').classList.add('fa-solid');
                
                button.classList.add('liked');
            }
            
            // Actualizar el contador en el DOM
            counterElement.textContent = currentLikes;
        });
    });
});
