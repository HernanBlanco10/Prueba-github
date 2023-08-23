document.addEventListener('DOMContentLoaded', function() {
    const botonClic = document.getElementById('botonClick');
    const contador = document.getElementById('contador');

    let contadorClicks = 0;

    botonClic.addEventListener('click', function() {
        contadorClicks++;
        contador.textContent = contadorClicks;
    })

})


