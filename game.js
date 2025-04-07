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
    playgame(userAns);
})
paper.addEventListener("click", () => {
    userAns = 1;
    playgame(userAns);
})
scissor.addEventListener("click", () => {
    userAns = 2;
    playgame(userAns);
})

//our function which will compare both the result 
function playgame(userAns) {
    let result = document.querySelector("#result");
    let random = Math.floor(Math.random() * 3);

    let img = document.querySelector("#compImage");
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
       result.style.backgroundcolor = "#00ffff";
       result.style.color = "black";
    }
    else if((random === 0 && userAns === 2) || (random === 1 && userAns === 0) || (random === 2 && userAns === 1)) {
        result.innerText = "you lose!";
        result.style.backgroundColor = "red";
        result.style.color = "white";
        compScore.innerText++;
    }
    else {
        result.innerText = "you win!";
        result.style.backgroundColor = "green";
        result.style.color = "white";
        userScore.innerText++;
    }
}
