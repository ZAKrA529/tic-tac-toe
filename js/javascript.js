let playerOne = true;
let cells = document.getElementsByClassName("celda");
let button = document.getElementById('btn');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click' , userMove);
    
}

function userMove (e) {
    let cellsValue = e.target.innerHTML;
    if (!cellsValue.length){
        e.target.innerHTML = playerOne? 'x' : 'o';
        playerOne = !playerOne;

        checkLine(0,1,2);
        checkLine(3,4,5);
        checkLine(6,7,8);
        checkLine(0,3,6);
        checkLine(1,4,7);
        checkLine(2,5,8);
        checkLine(2,4,6);
        checkLine(0,4,8);
    }
}

function checkLine (c1, c2, c3){
    if (
        cells[c1].innerHTML.length &&
        cells[c1].innerHTML == cells[c2].innerHTML &&
        cells[c2].innerHTML == cells[c3].innerHTML
    ) {
        showWinner (cells [c1].innerHTML);
    }
}
function showWinner(jugador) {
    document.querySelector('#resultado').innerHTML = jugador + "Ganador";

}

btn.addEventListener('click', (e) => {
    e.reload();
    

})