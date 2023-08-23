document.addEventListener('DOMContentLoaded', function() {
    
    // Funcion para generar un color hexadecimal random:

    function generarColor() {
        const caracteres = 'ABCDEF0123456789';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += caracteres[Math.floor(Math.random() * 16)];
        }
        return color;
    } 

    // Funcion para cambiar color de fondo:

    function cambiarColorFondo() {
        const nuevoColor = generarColor();
        document.body.style.backgroundColor = nuevoColor;
    }

    // Agregar evento de oyente al boton:

    const botonCambiarColor = document.getElementById("fondo");
    botonCambiarColor.addEventListener('click', cambiarColorFondo);
})