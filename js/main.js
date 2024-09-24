// Desplazamiento horizontal
document.querySelector('.scroll-container').addEventListener('wheel', (event) => {
    event.preventDefault();
    const scrollSpeed = 5;
    event.currentTarget.scrollLeft += event.deltaY * scrollSpeed;
}, { passive: false });

// Formulario de comentarios
document.getElementById('commentForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const comment = document.getElementById('comment').value.trim();

    if (!name || !email || !comment) {
        alert('Llena todos los campos.');
        return;
    }

    // Si deseas validar el formato del correo:
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, ingresa un correo válido.');
        return;
    }

    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Comentario:', comment);

    event.target.reset();
    alert('Gracias por tu comentario!');
});

// Selecciona el elemento del mensaje
const rotateMessage = document.querySelector('.rotate-device-message');

// Función para manejar el cambio de orientación
function handleOrientationChange(e) {
    if (e.matches) {
        // Si está en modo horizontal, oculta el mensaje
        rotateMessage.style.display = 'none';
    } else {
        // Si está en modo vertical, muestra el mensaje
        rotateMessage.style.display = 'block';
    }
}

// Detecta el cambio de orientación usando matchMedia
const orientationChange = window.matchMedia("(orientation: landscape)");
orientationChange.addEventListener('change', handleOrientationChange);

// Llama a la función inicialmente para verificar la orientación actual
handleOrientationChange(orientationChange);
