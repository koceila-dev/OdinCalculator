const numbers = document.querySelectorAll(".number-button");
const operations = document.querySelectorAll(".operator");
const screenCurrent = document.querySelector(".currentOperation");
const screenLastOperation = document.querySelector(".lastOperation");
var val1, Val2;
var numero = "";
var indicateur = 0;

numbers.forEach(number => {
  number.addEventListener("click", function () {
    const value = this.innerText;
    if (indicateur == 0) {
      screenCurrent.innerText = numero + value;
      numero = screenCurrent.innerText;
      index = 1;
    }
    else {
      numero = "";
      indicateur = 0;
      screenCurrent.innerText = numero + value;
      numero = screenCurrent.innerText;
      index = 1;
    }
  })
})
val1 = 0;
operations.forEach(operation => {
  operation.addEventListener("click", function () {
    if (index == 1) {
      indicateur = 1;

      val1 = operate(operation.innerText, val1, parseFloat(numero));
      console.log("ceci est le numéro:  " + numero + " avec la'operation:   " + this.innerText + "         Le résultat est le suivant:  ");
      console.log("val1    " + val1 + " Numero   " + parseFloat(numero));
      value = this.innerText;

      screenCurrent.innerText = val1;
      screenLastOperation.innerText = val1 + value;
      val1 = parseFloat(screenCurrent.innerText);

      numero = "";
      index = 0
    }




  })
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