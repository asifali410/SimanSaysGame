let gameSeq =[];
let userSeq = [];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

let btns = ["red","yellow","green","purple"];

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game stared!")
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}

function checkAns(ind){
    if(userSeq[ind] === gameSeq[ind]){
        if(userSeq.length === gameSeq.length)
            setTimeout(levelUp,1000);
    }else{
        h2.innerHTML = `Game over! Your Score was <b>${level}</b> <br> press any key to start `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
        },200)
        reset();
    }
}



function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;


let ranIdx = Math.floor(Math.random() * 3);
let randColor =  btns[ranIdx];
let ranBtn = document.querySelector(`.${randColor}`);
// console.log(ranIdx);
// console.log(randColor);
// console.log(ranBtn)
gameSeq.push(randColor);
console.log(gameSeq)
gameFlash(ranBtn);
}

function btnPress(){
    let btn  = this
    userFlash(btn)

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);

}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}