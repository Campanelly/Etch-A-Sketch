const container = document.getElementById('container');


const grid = function(){
    for(i = 0 ; i < 1056 ; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener('mouseover',function (){cell.classList.add("hover");});
        cell.addEventListener('click',function (){cell.classList.remove("hover");});
        container.appendChild(cell);
    }
}
grid();

const clear = document.getElementById('clear');
clear.addEventListener('click',()=>window.location.reload());

