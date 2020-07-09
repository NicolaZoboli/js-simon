var numeriCasuali = [];
var numeriUtente = [];
var numeriCorretti = [];

// Genero un array di 5 numeri casuali da 1 a 100
while (numeriCasuali.length < 5) {
  var numeroCasuale = getRandom(1, 100);
  var incluso = numeriCasuali.includes(numeroCasuale);

  if (incluso == false) {
    numeriCasuali.push(numeroCasuale)
  }
}

console.log("numeri casuali", numeriCasuali);

// Faccio apparire i numeri generati in un alert dando la possibilità all'utente di memorizzarli
alert(numeriCasuali);


// Imposto un timeout di 30s prima di far apparire i prompt in cui l'utente dovrà inserire i numeri memorizzati
setTimeout(memoryGame, 1000);


// ------------------- FUNCIONS -------------------


function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

function compare(numeriCasuali, numeriUtente) {
  for (var i = 0; i < numeriCasuali.length; i++) {
    if (numeriCasuali.includes(numeriUtente[i])) {
      numeriCorretti.push(numeriUtente[i]);
    }
  }
  return numeriCorretti;
}

function memoryGame() {
  while (numeriUtente.length < 5) {
    var numeroUtente = parseInt(prompt("Inserisci un numero"));
    if (isNaN(numeroUtente)) {
      alert("Non è un numero");
    } else if (numeroUtente < 1 || numeroUtente > 100) {
      alert("Non è un numero tra 1 e 100")
    } else {
      numeriUtente.push(numeroUtente);
    }
  }
  console.log("numeri utente", numeriUtente);
  compare(numeriCasuali, numeriUtente);
  console.log("numeri corretti", numeriCorretti);
  console.log("punti", numeriCorretti.length);
}
