let btns = document.getElementsByClassName('btn');
function getValue(item) {
  for(let i = 0; i < btns.length; i++) {
    if(btns[i] === btns[item]) {
      btns[i].style.backgroundColor = "rgba(255, 255, 255, 0.70)";
      btns[i].style.color = "white";
      value = item;
    } else {
      btns[i].style.backgroundColor = "rgba(255, 255, 255, 0.10)";
      btns[i].style.color = "hsl(216 12% 54%)";
    }
  }
};
