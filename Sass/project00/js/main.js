const email = document.getElementById("email");

email.addEventListener("input", function() {
  if(!email.checkValidity()) {
    email.style.border = "1px solid variables.$secundary-color-red";
  } else {
    email.style.border = "1px solid variables.$neutral-color-gray";
  }
});

function inputSubmit() {
  if(!email.checkValidity() || email.value === "") {
    document.getElementsByClassName("box-text-error")[0].style.display = "block";
    email.style.border = "1px solid hsl(354, 100%, 66%)";
  } else {
    document.getElementsByClassName("box-text-error")[0].style.display = "none";
  }
}
