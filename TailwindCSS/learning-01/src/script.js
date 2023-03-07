let box = document.getElementsByTagName('details');

function changeImg(item) {
  for(let i = 0; i < box.length; i++) {
    if(item === i + 1) {
      box[item].appendChild('summary').appendChild('img').src = "";
    }
  }
}