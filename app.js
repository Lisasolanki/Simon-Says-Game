let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },150);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },150);
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randIndx=Math.floor(Math.random()*4);
    let randcolor=btns[randIndx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(randIndx);
    console.log(randcolor);
    console.log(randbtn);
    btnFlash(randbtn);
}
function checkans(idx){
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length === gameseq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}


function btnpress(){
    console.log(this);
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    console.log(usercolor);

    
    userseq.push(usercolor); 

    checkans(userseq.length - 1);
    
};

let allbtns=document.querySelectorAll(".btn");
for(let btn of allbtns){
    btn.addEventListener("click",btnpress);

}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;

}


