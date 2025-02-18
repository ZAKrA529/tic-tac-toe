document.addEventListener("DOMContentLoaded", () => {
    const celdas = document.querySelectorAll(".celda");
    celdas.forEach((celda, index) => celda.setAttribute("data-index", index));
    const resultado = document.getElementById("resultado");
    const btnReiniciar = document.getElementById("btn");

    let turno = "X"; // X empieza siempre
    let tablero = ["", "", "", "", "", "", "", "", ""];

    function verificarGanador() {
        const combinacionesGanadoras = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
            [0, 4, 8], [2, 4, 6]  // Diagonales
        ];

        for (let combo of combinacionesGanadoras) {
            const [a, b, c] = combo;
            if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
                resultado.textContent = `¡${turno} gana!`;
                celdas.forEach(celda => celda.removeEventListener("click", jugar));
                return;
            }
        }

        if (!tablero.includes("")) {
            resultado.textContent = "¡Empate!";
        }
    }

    function jugar(event) {
        const index = event.target.getAttribute("data-index");

        if (tablero[index] === "") {
            tablero[index] = turno;
            event.target.textContent = turno;
            verificarGanador();
            turno = turno === "X" ? "O" : "X";
        }
    }

    function reiniciarJuego() {
        tablero = ["", "", "", "", "", "", "", "", ""];
        celdas.forEach(celda => {
            celda.textContent = "";
            celda.addEventListener("click", jugar);
        });
        resultado.textContent = "";
        turno = "X";
    } 

    celdas.forEach(celda => celda.addEventListener("click", jugar));
    btnReiniciar.addEventListener("click", reiniciarJuego);
});