let boxes = document.getElementsByClassName('box');
let resultBox = document.getElementsByClassName('result')[0];
let turnBox = document.getElementsByClassName('turns')[0];
let turn = "X";
let musicIns = new Audio('./ting.mp3');
let musicIns2 = new Audio('./ting.mp3');

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', (e) => {
        if(boxes[i].innerText == ""){
            boxes[i].innerText = turn;
            if (turn == "X") {
                turn = "O";
            }
            else {
                turn = "X";
            }
            turnBox.innerText = `${turn}'s turn`;
            musicIns.duration = 0.5;
            musicIns.play();
            checkWin();
        }
        else {
            return;
        }
    })

}

const checkWin = () => {
    let winningPositions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ]
    winningPositions.forEach(e=>{
        if((boxes[e[0]].innerText === boxes[e[1]].innerText) && (boxes[e[2]].innerText === boxes[e[1]].innerText) && (boxes[e[0]].innerText === boxes[e[1]].innerText) && (boxes[e[0]].innerText !== "")){
          resultBox.innerText = boxes[e[0]].innerText + " Won";
        }
    })
}