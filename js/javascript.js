let playerOne = true;  
let cells = document.getElementsByClassName("celda");
let button = document.getElementById('btn');
let score = document.getElementById('score')

// Asigna eventos a cada celda
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function () {
        if (!this.textContent) { 
            this.textContent = playerOne ? "X" : "Y";
            playerOne = !playerOne;
            userMove();
        }
    });
}

function userMove() {
    let emptyCells = Array.from(cells).filter(cell => !cell.innerHTML.length);

    if (emptyCells.length > 0) {
        let randomIndex = Math.floor(Math.random() * emptyCells.length);
        let selectCell = emptyCells[randomIndex];

        selectCell.innerHTML = playerOne ? "X" : "Y";
        playerOne = !playerOne;

        checkListCell(0,1,2);
        checkListCell(3,4,5);
        checkListCell(6,7,8);
        checkListCell(0,3,6);
        checkListCell(1,4,7);
        checkListCell(2,5,8);
        checkListCell(2,4,6);
        checkListCell(0,4,8);
    }
}

function checkListCell(c1, c2, c3) {
    if (cells[c1].innerHTML && 
        cells[c1].innerHTML == cells[c2].innerHTML && 
        cells[c2].innerHTML == cells[c3].innerHTML) {
        
        showWinner(cells[c1].innerHTML);
    }
}

function showWinner(jugador) {
    document.querySelector("#resultado").innerHTML = "Ganador: " + jugador;

    for (let i = 0; i < cells.length; i++) {
        cells[i].style.pointerEvents = "none";
    }

    localStorage.setItem("Ganador", jugador);
    actualizarPuntaje(jugador);
}


function actualizarPuntaje(guardarGanador) {
    let puntajeX = parseInt(localStorage.getItem("puntajeX")) || 0;
    let puntajeY = parseInt(localStorage.getItem("puntajeY")) || 0;
    

    if (guardarGanador === "X") {
        localStorage.setItem("puntajeX", ++puntajeX);
    } else if (guardarGanador === "Y") {
        localStorage.setItem("puntajeY", ++puntajeY);
    }
}

button.addEventListener("click", () => {
    location.reload();
});