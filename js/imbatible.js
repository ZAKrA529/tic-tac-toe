const tablero = document.getElementById('celda');
const resetBtn = document.getElementById('btn');
let gameTablero = Array(9).fill("");
let player = "X";
let IA = "O"
let gameActive= true;

//estado jugando 
if (localStorage.getItem("TicTacToe")) {
    gameTablero = JSON.parse(localStorage.getItem("TicTacToe"));
    renderBoard();
}

//Eventos para cada celda
tablero.forEach(celda => {
    celda.addEventListener("click", () =>{
        let index = celda.getAttribute("data-index");
        if (gameTablero[index] === "" && gameActive) {
            gameTablero[index] = player;
            saveGame();
            renderBoard();
            if (!checkWinner()){
                setTimeout(aiMove, 500);
            }
        }
    })
});

//Renderizacion del tablero
function renderBoard(){
    tablero.forEach((celda, index) =>{
        celda.textContent = gameTablero[index];
    });
}

//IA juega con el algoritmo mixto de Minimax optimizado con Alfa poda Beta
function aiMove() {
    let bestMove = minimax(gameTablero, 0, true, -Infinity, Infinity).index;
    if (bestMove !== undefined) {
        gameTablero[bestMove] = IA;
        saveGame();
        renderBoard();
        checkWinner();
    }
}

//Minimax con Alpha poda Beta
function minimax(tablero, depth, isMax, alpha, beta) {
    let resultado = checkWinner(true);
    if (resultado!=null)return { score: resultado===IA ? 1 : resultado=== player ? -1: 0 }
        
        let bestMove = { score : isMax ? -Infinity : Infinity, index: null};

        for (let i= 0; i < tablero.length; i++){
            if (tablero[i]) =="" {
                tablero[i] == minimax(tablero, depth +1, !isMax, alpha, beta). score;
                tablero[i] = ""
                
            }
        }
    
}