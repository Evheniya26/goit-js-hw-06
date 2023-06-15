const formLogin = document.querySelector(".login-form");

formLogin.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  const formEmail = formEl.email.value;
  const formPassword = formEl.password.value;

  if (formEmail === "" || formPassword === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    const formData = {
      formEmail,
      formPassword,
    };
    console.log(formData);

    formLogin.reset();
    }
}
