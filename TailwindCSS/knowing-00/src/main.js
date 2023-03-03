/*import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig);
*/
let btns = document.getElementsByClassName('btn');
var value = undefined;

function getValue(item) {
  for(let i = 0; i < btns.length; i++) {
    if(btns[i] === btns[item]) {
      btns[i].classList.add("btnActive");
      value = item + 1;
    } else {
      btns[i].classList.remove("btnActive");
      btns[i].classList.add("btn");
      btns[i].classList.add("btn:hover");
    }
  }
};

function validar() {
  if(value === undefined) {

  } else {
    let card1 = document.getElementById("card1").classList;
    card1.toggle('hidden');
    let card2 =  document.getElementById("card2").classList;
    card2.toggle('hidden');
    document.getElementById('result').innerHTML = value;
  }
}

document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault();
  validar();
});
