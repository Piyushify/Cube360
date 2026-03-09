console.log('JS Connected!');
const cube = document.getElementById("cube");
const placement = ["front","back","left","right","top","bottom"];
function create() {
  for (let i = 0; i < 6; i++) {
    face = document.createElement("div");
    face.classList.add("face");
    cube.appendChild(face);
  }
  const faces = document.querySelectorAll(".face"); 
  for (let i = 0; i < 6; i++) {
    faces[i].classList.add(placement[i]);
  }
}
create();
