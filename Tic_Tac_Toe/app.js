let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let winnerMsg = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let true0 = true;

const winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let clickCount = 0;

boxes.forEach((box, key) => {
  box.addEventListener("click", () => {
    if (true0) {
      box.innerText = "O";
      true0 = false;
    } else {
      box.innerText = "X";
      true0 = true;
    }
    box.disabled = true;
    clickCount++;
    let winner = checkWinner();
    if (winner) return;
    if (clickCount == 9 && !winner) {
      msg.innerHTML = "Draw";
      winnerMsg.classList.remove("hide");
    }
  });
});

resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.disabled = false;
    true0 = true;
    clickCount = 0;
  });
});

newGameBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.disabled = false;
    true0 = true;
    clickCount = 0;
    winnerMsg.classList.add("hide");
  });
});

const checkWinner = () => {
  for (let i of winningPattern) {
    let box1 = boxes[i[0]].innerText;
    let box2 = boxes[i[1]].innerText;
    let box3 = boxes[i[2]].innerText;
    if (box1 != "" && box2 != "" && box3 != "") {
      if (box1 === box2 && box2 === box3) {
        msg.innerHTML = "Winner";
        winnerMsg.classList.remove("hide");
        return true;
      }
    }
  }
  return false;
};
