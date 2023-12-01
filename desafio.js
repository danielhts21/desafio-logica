let player = "Lorde Daniel"
let xp = 7001

if (xp <= 1000){
  xp = "Ferro"
}else if (xp <=2000){
  xp = "Bronze"
}else if (xp <= 5000){
  xp = "Prata"
}else if (xp <=7000){
  xp = "Ouro"
}else if(xp <=8000){
  xp = "Platina"
}else if (xp <= 9000){
  xp = "Ascendente"
}else if( xp <= 10000){
  xp = "Imortal"
}else {
  xp = "Radiante"
}

switch (xp) {
  case "Ferro":
    console.log("O herói de nome " + player + " está no nível " + xp);
      break;
  case "Bronze":
    console.log("O herói de nome " + player + " está no nível " + xp)
      break;
  case "Prata":
    console.log("O herói de nome " + player + " está no nível " + xp)
      break;
  case "Ouro":
    console.log("O herói de nome " + player + " está no nível " + xp)
      break;
  case "Platina":
    console.log("O herói de nome " + player + " está no nível " + xp);
      break;
  case "Ascentende":
    console.log("O herói de nome " + player + " está no nível " + xp);
    break;
  case "Imortal":
    console.logO("O herói de nome " + player + " está no nível " + xp);
      break;
  case "Radiante": 
    console.log("O herói de nome " + player + " está no nível " + xp);
      break;
}