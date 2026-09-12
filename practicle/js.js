let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const user = document.querySelector("#your-score");
const comp = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");
const choose = document.querySelector("#choose");

const showWin =(userWin , userChoice,comChoice) =>{
    if(userWin){
        userscore++;
        user.innerText=userscore;
        console.log("you win");
        msg.innerText="YOU WIN !   Your " + userChoice + " beat "+ comChoice;
        msg.style.backgroundColor = "green";
        choose.innerText = comChoice;
    }else{
        compscore++;
        comp.innerText=compscore;
        console.log("you lose the game");
        msg.innerText = "YOU LOSE THE GAME  Your  " + comChoice + " beat "+ userChoice;
        msg.style.backgroundColor = "red";
    }
}
const draw =()=>{
    console.log("game was draw");
    msg.innerText = "GAME draw , Pay Again";
    msg.style.backgroundColor = "orange";
}
const getCompChoice=()=>{
    const option =["rock","paper","scissors"];
    const ranIdx = Math.floor(Math.random()*3);
    return option[ranIdx];

    
}
playGame=(userChoice)=>{
    console.log("your choice is",userChoice);
    let comChoice = getCompChoice();
    console.log("computer Choice is",comChoice);
    if(userChoice === comChoice){
        draw();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper , scissor
            userWin = comChoice === "paper"? false:true;
        }else if(userChoice === "paper"){
            //rock,scissors
            userWin = comChoice === "scissors"? false : true;
        }else{
            //rock,paper
            userWin = comChoice === "rock"? false : true;
        }
        showWin(userWin , userChoice , comChoice);
        }


    

}
choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})