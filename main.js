//testing
console.log('JS Connected!');

//constants
const root = document.documentElement;
const core = document.getElementById("core");

//variables
let h = getComputedStyle(root).getPropertyValue('--h').trim();
h = parseFloat(h);
let s = h / 3;

//the create function
function create() {
  
  //loop for z-axis
  for (let z = 1; z >= -1; z--) {
    
    //loop for y-axis
    for (let y = -1; y <= 1; y++) {
      
      //loop for x-axis
      for (let x = -1;  x <= 1; x++) {
        
        //for the center piece ignore the piece
        if (x === 0 && y === 0 && z === 0) continue;
        
        //variable cubie
        let cubie = document.createElement("div");
        
        //add the class cubie
        cubie.classList.add("cubie");
        
        //position the cubies
        cubie.style.transform =
          `translateX(${x*s}px)
          translateY(${y*s}px)
          translateZ(${z*s}px)`;
        
        //append the cubie to the core
        core.appendChild(cubie);
          
          //apply the classes according to their placement via the facing function
          
          //front face
          if (z === 1) facing(cubie,"front");
          
          //back face
          if (z === -1) facing(cubie,"back");
          
          //left face
          if (x === -1) facing(cubie,"left");
          
          //right face
          if (x === 1) facing(cubie,"right");
          
          //top face
          if (y === -1) facing(cubie,"top");
          
          //bottom face
          if (y === 1) facing(cubie,"bottom");
          }
        }
      }
    }
    
//call the function create()
create();

//the facing function
function facing(cubie,name) {
  
  //variable face
  let face = document.createElement("div");
  
  //add the classes
  face.classList.add("face",name);
  
  //append the face to the cubie
  cubie.appendChild(face);
}

//the switch theme function
function switchTheme() {
  
  //if current class is light
  if (root.classList.contains("light")) {
    
    //replace with dark
    root.classList.replace("light", "dark");
  } 
  
  //if current class is not light then its dark
  else {
    
    //replace with light
    root.classList.replace("dark", "light");
  }
}
