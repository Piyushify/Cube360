console.log('JS Connected!');
const core = document.getElementById("core");
const facing = ["front","back","left","right","top","bottom"];
let num = 1;
function create() {
  for (let z = 1; z >= -1; z--) {
    for (let y = -1; y <= 1; y++) {
      for (let x = -1;  x <= 1; x++) {
          if (x === 0 && y === 0 && z === 0) continue;
          let cubie = document.createElement("div");
          cubie.classList.add("cubie");
          cubie.style.transform =
          `translateX(${x*60}px)
          translateY(${y*60}px)
          translateZ(${z*60}px)`;
          core.appendChild(cubie);
          for (let j = 0; j < 6; j++) {
            let face = document.createElement("div");
            face.classList.add("face");
            face.classList.add(facing[j]);
            if (facing[j] === "front") {
            face.textContent = num;
            face.style.fontSize = 30 + "px";
          }
            cubie.appendChild(face);
          }
          num++;

        }
      }
    }
}
create();

