// Variable para alternar entre los jugadores (true = jugador 1, false = jugador 2)
let playerOne = true;  

// Obtiene todas las celdas del tablero mediante su clase "celda"
let cells = document.getElementsByClassName("celda");

// Obtiene el botón con el id 'btn' (para reiniciar el juego)
let button = document.getElementById('btn');

// Función que recupera el ganador almacenado en el LocalStorage (aunque no se usa en el código)
const guardarGanador = (jugador) => localStorage.setItem("Ganador", jugador) ;


function actualizarPuntaje (guardarGanador){
    let puntajeX = parseInt(localStorage.getItem("puntajeX")) || 0;
    let puntajeO = parseInt(localStorage.getItem("puntajeO")) || 0;

    if (guardarGanador === "X")  {
        puntajeX++;
        localStorage.setItem("puntajeX", puntajeX)
    } else if(guardarGanador === "O") {
        puntajeO++;
        localStorage.setItem("puntajeO", puntajeO); }

        
    }       
    actualizarPuntaje("X"); // Suma 1 punto a X
    actualizarPuntaje("O"); // Suma 1 punto a O
    actualizarPuntaje("X"); // Suma otro punto a X

// Recorre todas las celdas y les agrega un evento "click" para ejecutar la función userMove
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click' , userMove);
}

// Función que maneja el movimiento de los jugadores
function userMove (e) {
    let cellsValue = e.target.innerHTML; // Obtiene el contenido de la celda clicada

    // Si la celda está vacía, coloca una 'x' o 'o' según el turno del jugador
    if (!cellsValue.length){
        e.target.innerHTML = playerOne ? 'x' : 'o';
        playerOne = !playerOne; // Cambia de jugador

        // Llama a la función checkLine para verificar si hay una línea ganadora
        checkListCell(0,1,2); // Revisa la primera fila
        checkListCell(3,4,5); // Revisa la segunda fila
        checkListCell(6,7,8); // Revisa la tercera fila
        checkListCell(0,3,6); // Revisa la primera columna
        checkListCell(1,4,7); // Revisa la segunda columna
        checkListCell(2,5,8); // Revisa la tercera columna
        checkListCell(2,4,6); // Revisa la diagonal secundaria
        checkListCell(0,4,8); // Revisa la diagonal principal
    }
}

// Función que revisa si hay una combinación ganadora
function checkListCell (c1, c2, c3){
    if (
        cells[c1].innerHTML.length && // Verifica que la celda no esté vacía
        cells[c1].innerHTML == cells[c2].innerHTML && // Compara la primera celda con la segunda
        cells[c2].innerHTML == cells[c3].innerHTML // Compara la segunda celda con la tercera
    ) {
        showWinner(cells[c1].innerHTML); // Si hay coincidencia, llama a showWinner
    }
}

// Función que muestra el ganador y desactiva el juego
function showWinner(jugador) {
    document.querySelector('#resultado').innerHTML = jugador + " Ganador"; // Muestra el ganador en pantalla
    
    // Remueve los eventos de las celdas para que no se pueda seguir jugando
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', userMove);
    }

    // Guarda el ganador en el almacenamiento local
    localStorage.setItem("Ganador", jugador);
    
    actualizarPuntaje(jugador);
}

function actualizarPuntaje (guardarGanador){
    let puntajeX = parseInt(localStorage.getItem("puntajeX")) || 0;
    let puntajeY = parseInt(localStorage.getItem("puntajeY")) || 0;

    

    if (guardarGanador === "X")  {
        puntajeX++;
        localStorage.setItem("puntajeX", puntajeX)
    } else if(guardarGanador === "Y") {
        puntajeY++;
        localStorage.setItem("puntajeY", puntajeY); }
        
}  

// Evento para el botón de reinicio que recarga la página cuando se hace clic
btn.addEventListener('click', (e) => {
    location.reload(); // Recarga la página para reiniciar el juego

});


