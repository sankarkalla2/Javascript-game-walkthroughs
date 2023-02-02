
const boxes = document.querySelectorAll(".box");

const n = boxes.length;
let start = 0;
let end = 2;
setInterval(() => {

  boxes[end].classList.add("blue");
  end = (++end) % n;
  
  boxes[start].classList.remove("blue");
  start = (start+1) % n;


  if(end == pos) {
    console.log("overlapped each other." + end + "" + pos);
    randomBox();
    start--;
  }

}, 100);

let pos;
function randomBox() {
  if(pos) {
    boxes[pos].classList.remove("red");
  }
  pos = Math.floor(Math.random() * boxes.length);
  
  if(pos >= start && pos <= end) {
    randomBox();
  }
  boxes[pos].classList.add("red");
}

randomBox();

// let
// addEventListener("keydown", function() {
  
// })


