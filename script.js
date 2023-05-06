let color = "black";
let click = false;


document.addEventListener("DOMContentLoaded", function () {
    createBoard(16);
    
    document.querySelector("body").addEventListener("click", function(e){
        if (e.target.tagName != "BUTTON"){
            click = !click;
            let draw = document.querySelector("#draw");
            if (click) {
                draw.innerHTML = "You can Draw!"
            }
            else {
                draw.innerHTML = "Draw off!"
            }
        }
    })

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function(){
       let size = getSize();
       createBoard(size);
    })
})

function createBoard(size) {
    let board = document.querySelector(".container");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let grid = size * size;

    for (i = 0; i < grid; i++) {
        let square = document.createElement("square");
        square.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", square);
    }
}

function getSize() {
    let input = prompt("Enter a number");
    let message = document.querySelector("#message")
    if(input === ""){
        message.innerHTML = "Please provide a number";
    }
    else if(input < 2 || input > 100) {
        message.innerHTML =  "Please provide a number between 2-100";
    }
    else {
        message.innerHTML = "Done!";
        return input;

    }
}

function colorDiv(){
    if (click) {
        if (color == "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else {
        this.style.backgroundColor = color 
        }
    }
}

function setColor (colorChoice){
    color = colorChoice;
}


function resetBoard() {
    let clear =  document.querySelectorAll("square");
    clear.forEach((div) => div.style.backgroundColor = "white")
}

