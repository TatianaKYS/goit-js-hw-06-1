const inputText = document.querySelector("#validation-input");

inputText.addEventListener("blur", (event) => {
  if (event.target.value.length == inputText.getAttribute("data-length")) {
    inputText.classList.add("valid");
    if (inputText.classList.contains("invalid")) {
      inputText.classList.remove("invalid");
    }
  } else {
    if (inputText.classList.contains("valid")) {
      inputText.classList.remove("valid");
    }
    inputText.classList.add("invalid");
  }
});
