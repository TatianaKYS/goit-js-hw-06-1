const changeInput = document.querySelector("input#font-size-control");
const textFontSize = document.querySelector("span#text");

changeInput.addEventListener("input", (e) => {
  textFontSize.style.fontSize = `${e.target.value}px`;
});
