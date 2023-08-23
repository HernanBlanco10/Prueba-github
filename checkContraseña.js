document.addEventListener('DOMContentLoaded', function() {
    const ingresarUsuario = document.getElementById('usuario');

    const verificarBoton = document.getElementById('verificar');
    const contraseñaInput = document.getElementById('contraseña');
    const mensaje = document.getElementById('mensaje');

    const contraseñaCorrecta = '123456';

    verificarBoton.addEventListener('click', function() {
        const contraseñaIngresada = contraseñaInput.value;

        if (contraseñaIngresada === contraseñaCorrecta) {
            mensaje.textContent = 'Contraseña correcta! Acceso permitido';
            mensaje.style.color = 'green';
            } else {
            mensaje.textContent = 'Contraseña incorrecta! Acceso denegado';
            mensaje.style.color = 'red';
            }

    })
})