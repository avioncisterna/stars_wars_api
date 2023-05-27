const maxWidth = window.screen.width;
const maxHeight = window.screen.height;

function Random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function Shadows(amount){
  let shadow = "";
  for(let i = 0; i < amount; i++){
    shadow += Random(0, maxWidth) + "px " + Random(0, maxHeight) +    "px " + "rgb(256,256,256), ";
  }
  shadow += Random(0, maxWidth) + "px " + Random(0, maxHeight) + "px " + "rgb(256,256,256)";
  return(shadow);
}

for(let i = 1; i <= 3; i++){
  document.documentElement.style.setProperty('--shadows' + i, Shadows(450));
}