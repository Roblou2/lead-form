

const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const passError = document.querySelector('#password + span.error')
const password = document.querySelector('#password')


email.addEventListener("input", (event) => {
  
  
    if (email.validity.valid) {
  
      emailError.textContent = ""; 
      emailError.className = "error"; 
    } else {

      showError();
    }
  });

  password.addEventListener("input", (event) => {

  
    if (password.validity.valid) {
  
      passError.textContent = ""; 
      passError.className = "error"; 
    } else {

      showError();
    }
  });
  
  form.addEventListener("submit", (event) => {

    if (!email.validity.valid) {

      showError();

      event.preventDefault();
    }

    if (!password.validity.valid) {
        showError()
        event.preventDefault();
    }
  });
  
  function showError() {

    //invalid email
    if (email.validity.valueMissing) {

      emailError.textContent = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) {

      emailError.textContent = "Entered value needs to be an email address.";
    } else if (email.validity.tooShort) {

      emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }

    //invalid password
    if (password.validity.tooShort) {

     passError.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
    }
  
    // Set the styling appropriately
    emailError.className = "error active";
  }
  