function gameEngine() {
    var snake = document.getElementById("snake");
    var snakeFood = document.getElementById("snakeFood");
    var gamePlay = false;

    // events for snake
    document.addEventListener('keydown', function(e){
        console.log(e.keyCode);
        // if(e.keyCode==13){
        //     gamePlay = false;
        // }
        if(e.keyCode==39){
            snake.style.left=`${parseInt(snake.style.left.replace("px", "")) + 2}px`;
        }
    })
}

gameEngine();