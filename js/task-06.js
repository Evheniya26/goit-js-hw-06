const inputValidation = document.querySelector("#validation-input");

let data = Number(inputValidation.getAttribute("data-length"));

//window.alert(typeof data);

inputValidation.addEventListener("blur", (e) => {
  inputValidation.value.length === data
    ? inputValidation.classList.add("valid")
    : inputValidation.classList.add("invalid");
});
