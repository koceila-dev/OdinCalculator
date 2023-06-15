const numbers = document.querySelectorAll(".number-button");
const operations = document.querySelectorAll(".operator");
const screenCurrent = document.querySelector(".currentOperation");
const screenLastOperation = document.querySelector(".lastOperation");
const equal = document.querySelector(".equal")
var val1 = 0;
var Val2;
var numero = "";
var indicateur = 0;
var index = null;
let valeurOperation = null;
let valeurNumero = null;
var egal = null;
var indexEgal = false;

numbers.forEach(number => {
  number.addEventListener("click", function () {
    var value = this.innerText;
    console.log("value avant la condition if :   " + value)

    if (indicateur == 0) {

      screenCurrent.innerText = numero + value;
      numero = screenCurrent.innerText;
      console.log(`numero .............:::: ${numero} `);
      index = 1;
    }
    else {
      screenCurrent.innerText = "";
      indicateur = 0;
      screenCurrent.innerText = value;
      numero = screenCurrent.innerText;
      console.log(`test du else du eventlistener des numeros dans le else:  ** ${numero} **  et value de screenCurrent ${value}`);

      index = 1;
    }
  })
})


operations.forEach(operation => {
  operation.addEventListener("click", function () {
    value = this.innerText;
    console.log("value  dans operation .............::::  " + value);

    if (index == 1) {
      indicateur = 1;
      if (indexEgal == false) {
        //function operate(operation, num1, num2)
        val1 = operate(value, val1, parseFloat(numero));
        console.log("à l'interieur de la condition de indexEgal")

      }

      else {
        console.log("Else de la condition de indexEgal ")
        val1 = operate(value, egal, parseFloat(numero));

      }
      if (screenLastOperation.innerText == "") {
        screenLastOperation.innerText = val1 + value;
      }
      else {

      }

      valeurOperation = value;
      screenCurrent.innerText = val1;


      console.log(`value:         ${value}    et Val1         ${val1} `);
      valeurNumero = val1;

      val1 = parseFloat(screenCurrent.innerText);
      numero = "";
      index = 0;

    }
  })
})
equal.addEventListener("click", function () {
  indicateur = 1;
  console.log("numero est égal à :   " + numero);
  screenLastOperation.innerText = valeurNumero + valeurOperation + numero + "=";
  egal = operate(valeurOperation, parseFloat(valeurNumero), parseFloat(numero));
  screenCurrent.innerText = egal;
  indexEgal = true;
  value = null;
  index = 0;
  numero = egal;

  console.log("*********----------*********----------------")
  console.log(` la valeur d'egal : ${egal} la valeur de numero est : ${numero}`)


})

function add(item1, item2) {

  return item1 + item2;


}

function sub(item1, item2) {
  return item1 - item2;
}

function mult(item1, item2) {
  return item1 * item2;
}

function div(item1, item2) {
  return item1 / item2;
}

function operate(operation, num1, num2) {

  switch (operation) {
    case '+':
      return add(num1, num2);
    case '-':
      return sub(num1, num2);
    case '*':
      return mult(num1, num2);
    case '/':
      return div(num1, num2);
  }
}