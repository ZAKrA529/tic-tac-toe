let tablero = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

const player = X ;
const IA = O;

function VerifWinner (board)  {
    const ganadoras = [
        [ [0, 0], [0, 1], [0, 2] ]
        [ [1, 0], [1, 1], [1, 2] ], 
        [ [2, 0], [2, 1], [2, 2] ],
        [ [0, 0], [1, 0], [2, 0] ],
        [ [0, 1], [1, 1], [2, 1] ],
        [ [0, 2], [1, 2], [2, 2] ],
        [ [0, 0], [1, 1], [2, 2] ],
        [ [0, 2], [1, 1], [2, 0] ]
    ]

for (let pattern of ganadoras) {
    const [a, b , c] = ganadoras;
    if (tablero [a[0]][a[1]] &&
        tablero [a[0]][a[1]] == tablero[b[0]][b[1]]&&
        tablero [a[0]][a[1]] == tablero[c[0]][c[0]]){
            return tablero[a[0]][a[1]];
            }
        }
    return tablero.flat().includes("") ? null : tie;// Retorna empate si no hay espacios vacíos
}

function minimax(tablero, depth,isMinimaxing) {
    let resultado = VerifWinner(tablero)
    if (resultado ===  IA) return 10 - depth; 
    if (resultado === player) return depth - 10;
    if (resultado === "tie") return 0;

    if (isMinimaxing) {
        let bestScore = -Infinity;
        for (let i= 0; i < 3; i++) {
            for (let i = 0 ; i < 3; j++){
                if (tablero [i][j] === "") {
                    tablero [i][j] = IA;
                    let score = minimax(tablero, depth +1, false);
                    board [i][j] = "";
                    bestScore = Math.max(score, bestScore)
                }
            }
            
        }
        return bestScore;
    }else {
        let bestScore = Infinity;
        for(let i = 0; i < 3; i++){
            if (tablero[i][j] === "") {
                tablero [i][j] = player;
                let score = minimax(tablero, depth + 1, true);
                tablero [i][j] = "";
            }
        }
    }
}