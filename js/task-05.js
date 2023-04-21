const inputEl = document.getElementById("name-input");
const textEL = document.getElementById("name-output");

inputEl.addEventListener("input", (event) => {
  textEL.textContent = event.target.value;

  if (event.target.value === "") {
    textEL.textContent = "Anonymous";
  }
});
