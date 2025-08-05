let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#head");
let newbtn=document.querySelector("#newbtn");
let msg_container=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");

let turnO=true;
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
   
const resetGame=()=>{
    turnO=true;
    enaabledboxes();
    msg_container.classList.add("hide");
};

   const enaabledboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
};

const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("button was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;


            
        }
        box.disabled=true;
        checkWinner();

    });
});
const showwinner=(winner) =>{
    msg.innerText=`congragulations, winner is ${winner}`;
    msg_container.classList.remove("hide");
    disabledboxes();
};

const checkWinner=() =>{
    for(let pattern of winpatterns){
      console.log(pattern);
      let firstval=boxes[pattern[0]].innerText;
        let secondval=boxes[pattern[1]].innerText;
          let thirdval=boxes[pattern[2]].innerText;
          if(firstval!="" && secondval!="" && thirdval!=""){
            if(firstval===secondval && secondval===thirdval){
                console.log("winner",firstval);
                showwinner(firstval);
            }
          }
    }
};
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
