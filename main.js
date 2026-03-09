console.log('JS Connected!');
const core = document.getElementById("core");
const facing = ["front","back","left","right","top","bottom"];
function create() {
  for (let i = 0; i < 26; i++) {
    let cubie = document.createElement("div");
    cubie.classList.add("cubie");
    core.appendChild(cubie);
    for (let j = 0; j < 6; j++) {
      let face = document.createElement("div");
      face.classList.add("face");
      face.classList.add(facing[j]);
      cubie.appendChild(face);
    }
  }
}
create();

