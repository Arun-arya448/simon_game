let gameSqen= [];
let userSquen= [];
let started = false;
let level=0;

let colors=["blue", "black" ,"green" ,"purple"];

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started == false)
    {
        console.log("Game Started!!");
        started=true;
        nextLevel();
    }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
};

function nextLevel(){
userSquen=[];
level++;
h2.innerText=`Level ${level}`;
let radmIdx=Math.floor(Math.random()*3);
let radmColor=colors[radmIdx];

let btn=document.querySelector(`.${radmColor}`);
btnFlash(btn);
gameSqen.push(radmColor);
console.log(gameSqen);
};

function check(idx){
    if(gameSqen[idx] == userSquen[idx]){
        if(userSquen.length == gameSqen.length){
            setTimeout(nextLevel,1500);
        }
    }else{
        let high=level;
        if(level > high){
            high=level;
        }
        h2.innerHTML=`Game over! Your score was <b>${level} </b> <br> Press any key to start again.<br> your Highest score is ${high}`;
        let body=document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout(function(){
            body.style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnPress(){
    btnFlash(this);
    let userColor=this.getAttribute("id");
    console.log(userColor);
    userSquen.push(userColor);
    console.log(userSquen);

    check(userSquen.length-1);
}
let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSqen=[];
    userSquen=[];
    level=0;
}