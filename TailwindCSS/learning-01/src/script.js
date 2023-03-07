var boxes = document.getElementsByTagName('details');

function changeDetailsState(item) {
  for(let i = 0; i < boxes.length; i++) {
    let childNodesImg = boxes[i].querySelector('.img-class');
    if(i + 1 === item) {
      childNodesImg.classList.add('rotate');
    } else if (i+1 === item && !boxes[i].open){
      childNodesImg.classList.remove('rotate');
      boxes[i].open = !boxes[i].open;
    } else {
      childNodesImg.classList.remove('rotate');
      if(boxes[i].open) {
        boxes[i].open = !boxes[i].open;
      }
    }
  }
}
