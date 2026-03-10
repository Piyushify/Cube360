console.log('JS Connected!');
const root = document.documentElement;

let h = getComputedStyle(root).getPropertyValue('--h').trim();
h = parseFloat(h);

let s = h / 3;
const core = document.getElementById("core");
let num = 1;
function create() {
  for (let z = 1; z >= -1; z--) {
    for (let y = -1; y <= 1; y++) {
      for (let x = -1;  x <= 1; x++) {
          if (x === 0 && y === 0 && z === 0) continue;
          let cubie = document.createElement("div");
          cubie.classList.add("cubie");
          cubie.style.transform =
          `translateX(${x*s}px)
          translateY(${y*s}px)
          translateZ(${z*s}px)`;
          core.appendChild(cubie);
          
          function facing(name) {
            let face = document.createElement("div");
            face.classList.add("face",name);
            cubie.appendChild(face);
            }
            if (z === 1) facing("front");
            if (z === -1) facing("back");
            if (x === -1) facing("left");
            if (x === 1) facing("right");
            if (y === -1) facing("top");
            if (y === 1) facing("bottom");
          }
        }
      }
    }
create();
function switchTheme() {
  if (root.classList.contains("light")) {
    root.classList.replace("light", "dark");
  } else {
    root.classList.replace("dark", "light");
  }
}
