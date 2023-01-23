var list = 0;

function addTarefa() {
  document.getElementsByClassName("column")[1].style.display = "block";
  document.getElementsByClassName("column")[2].style.display = "block";
  var tarefa = document.getElementById("create__tarefa__input").value;
  document.getElementById("create__tarefa__input").value = "";
  var ul = document.getElementsByTagName('ul')[0];
  if (list !== 0) {
    var span = document.createElement('span');
    span.setAttribute("class", "line");
    ul.appendChild(span);
  }
  list++;
  var li = document.createElement('li');
  var input = document.createElement('input');
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", `task${list}`);
  input.setAttribute("class", "tarefas");
  var label = document.createElement('label');
  label.setAttribute("for", `task${list}`);
  label.textContent = tarefa;
  li.appendChild(input);
  li.appendChild(label);
  ul.appendChild(li);
}

function removerItens() {
  var tarefas = document.querySelectorAll('input[type="checkbox"]:checked');
  for(var i = 0; i < tarefas.length; i++) {
    tarefas[i].parentNode.remove();
  }
}

function limparTarefas() {
  var lista = document.querySelectorAll('li');
  for(var i = 0; i < lista.length; i++) {
    lista[i].remove();
  }
  document.getElementsByClassName("column")[1].style.display = "none";
  document.getElementsByClassName("column")[2].style.display = "none";
}