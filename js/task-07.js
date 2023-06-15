const fontInput = document.querySelector("#font-size-control");
const textInput = document.querySelector("#text");

fontInput.addEventListener("input", function () {
  textInput.style.fontSize = fontInput.value + "px";
});
