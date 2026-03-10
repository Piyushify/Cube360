console.log('JS Connected!');
const root = document.documentElement;

let h = getComputedStyle(root).getPropertyValue('--h').trim();
h = parseFloat(h);

let s = h / 3;
const core = document.getElementById("core");
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
          
          
            if (z === 1) facing(cubie,"front");
            if (z === -1) facing(cubie,"back");
            if (x === -1) facing(cubie,"left");
            if (x === 1) facing(cubie,"right");
            if (y === -1) facing(cubie,"top");
            if (y === 1) facing(cubie,"bottom");
          }
        }
      }
    }
create();
function facing(cubie,name) {
            let face = document.createElement("div");
            face.classList.add("face",name);
            cubie.appendChild(face);
            }
function switchTheme() {
  if (root.classList.contains("light")) {
    root.classList.replace("light", "dark");
  } else {
    root.classList.replace("dark", "light");
  }
}
