let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let res = document.querySelector("#msg");

let turn0 = true;

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turn0){
            box.textContent = "O";
            turn0=false;
        }else{
            box.textContent = "X";
            turn0=true;
        }
        box.disabled=true;

        checkWinner();
    })
})

const disableAll = () =>{
     boxes.forEach((box)=>{
        box.disabled=true;
     })
}
const resetGame = () =>{
    boxes.forEach((box)=>{
        box.textContent="";
        box.disabled=false;
     })
     turn0=true;
     res.textContent="";
}
const checkWinner = () =>{
    for (let pattern of winPatterns){
        let val1 = boxes[pattern[0]].textContent;
        let val2 = boxes[pattern[1]].textContent;
        let val3 = boxes[pattern[2]].textContent;
        
        if (val1!="" && val2!="" && val3!=""){
            if (val1===val2 && val2===val3){
                if (val1==="X"){
                    console.log("Player X Won");
                    res.textContent = "Player X Won";
                }else{
                    console.log("Player O Won");
                    res.textContent = "Player O Won";
                }
                disableAll();
            }
        }
    }
}
reset.addEventListener("click",resetGame);