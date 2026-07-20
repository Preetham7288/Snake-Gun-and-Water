let welcome=document.getElementById("welcome");
    let rules=document.getElementById("rules");
    let game=document.getElementById("game");
    let snake=document.getElementById("snake");
    let gun=document.getElementById("gun");
    let water=document.getElementById("water");
    let results=document.getElementById("results");
    let player=document.getElementById("player");
    let computer=document.getElementById("computer");
    let result=document.getElementById("result");
    let playerScore=document.getElementById("playerscore");
    let computerScore=document.getElementById("computerscore");
    let playagain=document.getElementById("playagain");
    let exit=document.getElementById("exit");
    let thanks=document.getElementById("thanks");
    let whatever=document.getElementById("whatever");
    let total=document.getElementById("total");
    let choice=["Snake","Gun","Water"];
    let random=choice[Math.floor(Math.random()*choice.length)];
    function fade(from,to){
        setTimeout(function(){
            from.style.opacity=0;
        },300);
        from.style.display="none";
        to.style.display="block";
        setTimeout(function(){
            to.style.opacity=1;
        },300);
    }
    setTimeout(function(){
        welcome.style.opacity=1;
    },500);
    welcome.addEventListener("click", function() {
        fade(welcome,rules);
    });
    rules.addEventListener("click", function() {
        fade(rules,game);
    });
    snake.addEventListener("click", function() {
        fade(game,results);
        player.textContent = "Snake";
        computer.textContent =random;
        if (random==choice[0]){
            result.textContent="Draw, Close🤏";
        }
        else if(random==choice[1]){
            result.textContent="Computer Wins! HAHA Loser🫵";
            computerScore.textContent=parseInt(computerScore.textContent)+1;
        }
        else{
            result.textContent="You actually Won?? Congrats!!🎉";
            playerScore.textContent=parseInt(playerScore.textContent)+1;
        }
    });
    gun.addEventListener("click", function() {
        fade(game,results);
        player.textContent = "Gun";
        computer.textContent =random;
        if (random==choice[1]){
            result.textContent="Draw, Close🤏";
        }
        else if(random==choice[2]){
            result.textContent="Computer Wins! HAHA Loser🫵";
            computerScore.textContent=parseInt(computerScore.textContent)+1;
        }
        else{
            result.textContent="You actually Won?? Congrats!!🎉";
            playerScore.textContent=parseInt(playerScore.textContent)+1;
        }
    });
    water.addEventListener("click", function() {
        fade(game,results);
        player.textContent = "Water";
        computer.textContent = random;
        if (random==choice[2]){
            result.textContent="Draw, Close🤏";
        }
        else if(random==choice[0]){
            result.textContent="Computer Wins! HAHA Loser🫵";
            computerScore.textContent=parseInt(computerScore.textContent)+1;
        }
        else{
            result.textContent="You actually Won?? Congrats!!🎉";
            playerScore.textContent=parseInt(playerScore.textContent)+1;
        }
    });
    playagain.addEventListener("click", function() {
        fade(results,game);
        random=choice[Math.floor(Math.random()*choice.length)];
    });
    exit.addEventListener("click", function() {
        fade(results,thanks);
        let p = parseInt(playerScore.textContent);
        let c = parseInt(computerScore.textContent);
        total.textContent="Total Wins: "+p+" Loses: "+c;
        if(p==c){
            whatever.textContent="Ooo so close, not bad🫡";
        }
        else if(c>p){
            whatever.textContent="HAHA Loser, try harder🥀";
        }
        else{
            whatever.textContent="You Won, 💩 there you go brother you earned it";
        }
    });