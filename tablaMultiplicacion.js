document.addEventListener('DOMContentLoaded', function() {
    const botonGenerarTabla = document.getElementById('boton');
    const tablaMultiplicar = document.getElementById('tablaMultiplicar');

    botonGenerarTabla.addEventListener('click', function() {
        const numero = parseInt(document.getElementById('numero').value);
        
        tablaMultiplicar.innerHTML = '';

        for (let i = 1; i <= 10; i++) {
            const resultado = numero * i;
            const fila = `<tr><td>${numero} x ${i}</td><td>=</td><td>${resultado}</td></tr>`;
            tablaMultiplicar.innerHTML += fila;
        }
    })
})

// parseInt() hace que solo se acepten numeros enteros, sin decimales
// .value transforma lo que hay en 'numero' en un valor real, y no solo el objeto que haya en ese id.
// porque no puedo definir la const fila = (numero + ' x ' + i + ' = ' resultado);?? 
// Me dice "cannot redeclare block-scoped variable 'resultado'"