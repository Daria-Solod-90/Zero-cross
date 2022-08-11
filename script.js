let cells=document.querySelectorAll('td');
let gamer=document.querySelector('.gamer');
let vinner=document.querySelector('.vinner');
let button=document.querySelector('button');

let i=0;
button.addEventListener('click',()=>{

    for(let cell of cells){
        cell.innerHTML='';
        cell.classList.remove('cross');
        cell.classList.remove('zero');
    }
    vinner.innerHTML='';
    gamer.innerHTML='';

    start(cells);
});

function start(cells){
    gamer.innerHTML='Ход игрока: X';
for(let cell of cells){
    cell.addEventListener('click',clickCell);
}
}

function clickCell(event){
    let cell=event.target.closest('td');
    if(cell){
        if (i % 2 == 0) {
            this.classList.add('cross');
            this.innerHTML = 'X';
            gamer.innerHTML='Ход игрока: 0';
        } else {
            this.classList.add('zero');
            this.innerHTML = '0';
            gamer.innerHTML='Ход игрока: X';
        }
        this.removeEventListener('click', clickCell);
        i++;
    }

    if (isVictory(cells)) { 
        vinner.innerHTML+= 'Выиграл игрок: '+this.innerHTML ;

        for (let j = 0; j < cells.length; j++) { // чтобы после победы клик не работал
            cells[j].removeEventListener('click', clickCell);
        }
    } else if ([...cells].every(cell=>cell.classList.contains('zero')||cell.classList.contains('cross'))) {
        vinner.innerHTML+='Ничья';
    }
}

function isVictory(cells) { 
    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let comb of combs) {
        if (cells[comb[0]].innerHTML == cells[comb[1]].innerHTML &&
            cells[comb[1]].innerHTML == cells[comb[2]].innerHTML &&
            cells[comb[0]].innerHTML != '') {
            return true;
        }
    }
    return false;
}
