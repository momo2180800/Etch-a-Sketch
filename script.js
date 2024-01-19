const container=document.querySelector('.container');



function createGrille(val){
    for(let i=0;i<val;i++){
        const div=document.createElement('div');
        div.style.border="1px solid black";
        div.style.width="100%";
        div.style.display="flex";
        div.style.height=`${600/val}px`;
        div.style.margin="0";
        container.appendChild(div);
        for(let j=0;j<val;j++){
            const div1 = document.createElement("div");
            div1.style.height=`${900/val}px`;
            div1.style.width=`${900/val}px`;
            div1.style.border="1px solid black";
            div1.classList.add("pixel");
            div1.style.margin="0";
            div.appendChild(div1);
        }
    }
    draw();
}
createGrille(16);
function draw(){
    const grid=Array.from(document.querySelectorAll(".pixel"));
    for(let i=0;i<grid.length;i++){
        grid[i].addEventListener('mouseover',() => {
            grid[i].style.backgroundColor=`rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`
        })
    }
}


const set=document.getElementById('set');

set.addEventListener('click',set_grille_number);

function set_grille_number(){
    let value=parseInt(prompt("give the number of grid : "));
    if(value<0){
        value=val;
    }
    else if(value > 100) {
        value=100;
    }
    else {
        container.innerHTML="";
        createGrille(value);
    }
}
