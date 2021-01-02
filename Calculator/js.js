var buttons = document.querySelectorAll("h1");
var operator = document.getElementsByClassName("opt");
var calc = document.getElementById("display");

window.addEventListener("keypress", function (e) {
  //getting a bug here when u first type a numeber it is written undefined but the undefined vanishes after i type something else . not coded good.
  if (calc.value.includes(undefined)) {
    calc.value = calc.value.slice(9, calc.value.length);
  }
  if ((e.key = "Enter")) {
    calc.value = eval(calc.value);
  }
});
//Code gets messy too much of if statements will have to fix this.
for (var thisBtn of buttons) {
  thisBtn.addEventListener("click", calculate);

  function calculate() {
    //Should have used something else maybe cases.
    if (this.innerHTML == "=") {
      calc.value = eval(calc.value);
    } else if (this.innerHTML == "C") {
      calc.value = "";
    } else if (this.innerHTML == "DEL") {
      var last = calc.value.length - 1;
      calc.value = calc.value.slice(0, last);
    } else if (this.innerHTML == "x²") {
      if (calc.value.includes("+")) {
        var index = calc.value.indexOf("+");
        let a = calc.value.substring(index, calc.value.length);
        calc.value = `${calc.value.substring(0, index)}+${a * a}`;
      } else if (calc.value.includes("-")) {
        var index = calc.value.indexOf("-");
        let a = calc.value.substring(index, calc.value.length);
        calc.value = `${calc.value.substring(0, index)}+${a * a}`;
      } else if (calc.value.includes("/")) {
        var index = calc.value.indexOf("/");
        let a = calc.value.substring(index + 1, calc.value.length);
        calc.value = `${calc.value.substring(0, index)}/${a * a}`;
      } else if (calc.value.includes("*")) {
        var index = calc.value.indexOf("*");
        let a = calc.value.substring(index + 1, calc.value.length);
        calc.value = `${calc.value.substring(0, index)}*${a * a}`;
      } else {
        calc.value = calc.value * calc.value;
      }
    } else if (this.innerHTML == "x³") {
      if (calc.value.includes("+")) {
        let index = calc.value.indexOf("+");
        let a = calc.value.substring(index, calc.value.length);

        calc.value = `${calc.value.substring(0, index)}+${a * a * a}`;
      } else if (calc.value.includes("-")) {
        let index = calc.value.indexOf("-");
        let a = calc.value.substring(index, calc.value.length);
        calc.value = `${calc.value.substring(0, index)}${a * a * a}`;
      } else if (calc.value.includes("/")) {
        let index = calc.value.indexOf("/");
        let a = calc.value.substring(index + 1, calc.value.length);
        calc.value = `${calc.value.substring(0, index)}/${a * a * a}`;
      } else if (calc.value.includes("*")) {
        let index = calc.value.indexOf("*");
        let a = calc.value.substring(index + 1, calc.value.length);
        calc.value = `${calc.value.substring(0, index)}*${a * a * a}`;
      } else {
        calc.value = calc.value * calc.value * calc.value;
      }
    } else if (this.innerHTML == "CE") {
      var last = calc.value.length - 1;
      calc.value = calc.value.slice(0, last);
    } else {
      calc.value += this.innerHTML;
    }

    console.log(calc.value);
  }
}
