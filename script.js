const container = document.getElementById('container');


const grid = function(){
    for(i = 0 ; i < 16 ; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
    }
}
grid();