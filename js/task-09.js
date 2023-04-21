const Elem = {
  button: document.querySelector("button.change-color"),
  body: document.body,
  colorSpan: document.querySelector("span.color"),
};
Elem.button.addEventListener("click", handleClickButton);

function handleClickButton() {
  const colorBody = getRandomHexColor();
  Elem.body.style.backgroundColor = colorBody;
  Elem.colorSpan.textContent = colorBody;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
