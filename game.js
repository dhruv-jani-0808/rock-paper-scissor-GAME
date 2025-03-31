//logic of stone paper scissor
let userAns;
//selecting the elements
let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");

//assigning the values of userAns
rock.addEventListener("click", () => {
    userAns = 0;
    playgame();
})
paper.addEventListener("click", () => {
    userAns = 1;
    playgame();
})
scissor.addEventListener("click", () => {
    userAns = 2;
    playgame();
})

//our function which will match both the result 
function playgame() {
    let result = document.querySelector("#result");
    let random = Math.floor(Math.random() * 3);

    let img = document.querySelector("#comp-image");
    if (random === 0) {
        img.innerHTML = "<center><img src='rock.jpeg'></center>";
    }
    else if (random === 1) {
        img.innerHTML = "<center><img src='paper.jpeg'></center>";
    }
    else {
        img.innerHTML = "<center><img src='scissor.jpeg'></center>";
    }

    if (random === userAns) {
       result.innerText = "it's a draw!";
    }
    else if((random === 0 && userAns === 2) || (random === 1 && userAns === 0) || (random === 2 && userAns === 1)) {
        result.innerText = "The winner is computer!";
        compScore.innerText++;
    }
    else {
        result.innerText = "The winner is user!";
        userScore.innerText++;
    }
}
