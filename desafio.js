let player1 = "Lorde Mago";
let quantidadeDeXp = 8900;

function determinarNivel(xp){
  if (xp <= 1000){
    return "Ferro";
  }else if (xp <= 2000){
    return "bronze"
  }else if (xp <= 5000){
    return "Prata";
  }else if (xp <= 7000){
    return "Ouro";
  }else if (xp <= 8000){
    return "Platina";
  }else if (xp <= 9000){
    return "Ascendente";
  }else if (xp <= 10000){
    return "Imortal";
  }else {
    return "Radiante";
  }

  }

let nivelDoHeroi = determinarNivel(quantidadeDeXp)

console.log("O Herói de nome " + player1 + " está no nível " + nivelDoHeroi)

