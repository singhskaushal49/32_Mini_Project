const counter1 = document.querySelectorAll(".counter");

counterE1.forEach((counterE1) => {
  counterE1.innerText = "0";
  incrementCounter();
  function incrementCounter(){
    let currentNum = +counterE1.innerText;
    const dataCeil = counterE1.getAttribute("date-ceil");
    const increment = dataCeil / 15;
    currentNum = Math.ceil(currentNum + increment);

    if (currentNum < dataCeil){
      counterE1.innerText = currentNum;
      setTimeout(incrementCounter, 50);
    } else {
      counterE1.innerText = dataCeil;
    }
  }
});