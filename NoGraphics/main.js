document.getElementById('fizzbuzz').innerHTML='Gioco FizzBuzz';

// creo un array che conterrà i 100 numeri
var numeri = [];

// riempio l'array con i 100 numeri
for (var i = 1; i <= 100; i++){
  // inserisco i numeri da 1 a 100 nell'array numeri
  numeri[i] = i;
  // controllo che il numero sia multiplo di 3 e di 5
  if (numeri[i] % 3 == 0 && numeri[i] % 5 == 0){
    numeri[i] = 'FizzBuzz';
  }
  // controllo che il numero sia multiplo di 3
  if (numeri[i] % 3 == 0){
    numeri[i] = 'Fizz';
  }
  // controllo che il numero sia multiplo di 5
  if (numeri[i] % 5 == 0){
    numeri[i] = 'Buzz';
  }
  // mostro a video tutti i numeri da 1 a 100 con le varie stringhe, 'fizz', 'buzz', 'fizzbuzz'
  document.writeln(numeri[i] + '<br>');
}
