

let form = document.querySelector("form");
let email = document.getElementById("email");
let emailError = document.querySelector("#email + span.error");
let password = document.querySelector("#password")
let passLength = document.querySelector('span.pass-length')
let capitals = document.querySelector('span.capitals')
let specials = document.querySelector('span.specials')
let numbers = document.querySelector('span.numbers')
let country = document.getElementById('country')
let countryError = document.querySelector('#country + span.country-label')
let postCode = document.getElementById('postcode')
let pCodeError = document.querySelector('#postcode + span.postcode-error')

let passConf = document.getElementById('password-conf')
let passConfError = document.querySelector('#password-conf + span.pass-conf-error')

let submit = document.querySelector('.submit')



passConf.addEventListener('input', () => {
  showPassConfError()
}
)

email.addEventListener("input", (event) => {
  
  
    if (email.validity.valid) {
  
      emailError.textContent = ""; 
      emailError.className = "error"; 
    } else {

      showError();
    }
  });

  country.addEventListener('input', () => {

    showCountryError()
  })

  postCode.addEventListener('input', () => {
    showPCodeError()
  })



  password.addEventListener("input", (event) => {


showErrorPass()
     
  });
  
  submit.addEventListener("click", (event) => {

    if (!email.validity.valid) {

      showError();
      event.preventDefault();
    }

    if (!password.validity.valid) {
        showErrorPass()
        event.preventDefault();
    }

    if (!country.validity.valid) {
      showCountryError()
      event.preventDefault();
    }

    if (!postCode.validity.valid) {
      showPCodeError()
      event.preventDefault();
    }

    if (!passConf.validity.valid) {
      showPassConfError()
      event.preventDefault();
    }
  });

  function showPassConfError () {
if (passConf.value !== password.value) {

passConf.setCustomValidity('The passwords needs to match')
}

else if (passConf.value === password.value) {

  passConf.setCustomValidity('')
}

passConf.reportValidity()
  }
  
  function showError() {

    //invalid email
    if (email.validity.valueMissing) {

      emailError.textContent = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) {

      emailError.textContent = "Entered value needs to be an email address.";
    } else if (email.validity.tooShort) {

      emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
  
    // Set the styling appropriately
    emailError.className = "error active";
  }
  
  function showCountryError () {

   
    if (!country.validity.patternMismatch) {
      countryError.classList.remove('error')
      countryError.classList.remove('invalid')
      countryError.textContent = ""
    }

   else if (country.validity.patternMismatch) {
   
      countryError.classList.add('error')
      countryError.classList.add('invalid')
      countryError.textContent = "Enter letters only"
   
      }

    if (country.validity.valueMissing) {
   
      countryError.classList.add('error')
      countryError.classList.add('invalid')
   
       countryError.textContent = "You need to enter a country."
     }

 else if (!country.validity.valueMissing) {

  countryError.textContent = ""
 }

  }

  function showPCodeError() {
    if (postCode.validity.patternMismatch) {
     
      pCodeError.classList.remove('no-error')
      pCodeError.classList.remove('valid')
      pCodeError.classList.add('error')
      pCodeError.classList.add('invalid')
      pCodeError.textContent = "Enter a valid UK postcode with capitals"
    }

    else if (!postCode.validity.patternMismatch) {
   
      pCodeError.classList.remove('error')
      pCodeError.classList.remove('invalid')
      pCodeError.textContent = ""
    }

    if (postCode.validity.valueMissing) {
  
      pCodeError.classList.add('error')
   
      pCodeError.textContent = "You need to enter a valid UK postcode.";
     }
 
  }



    function showErrorPass () {
          //invalid password
    if (password.validity.tooShort) {
      passLength.classList.remove('no-error')
      passLength.classList.remove('valid')
passLength.classList.add('error')
passLength.classList.add('invalid')
passLength.textContent = `Your password needs to have at least ${password.minLength} characters`
  
     
    }
    else if (!password.validity.tooShort) {
passLength.classList.remove('error')
passLength.classList.remove('invalid')
    passLength.classList.add('no-error')
    passLength.classList.add('valid')
    passLength.textContent = `Your password needs to have at least ${password.minLength} characters`
    }

    if (password.value.search(/[A-Z]/) == -1) {
     
    capitals.classList.remove('no-error')
capitals.classList.remove('valid')
capitals.classList.add('error')
capitals.classList.add('invalid')
capitals.textContent = `Your password needs to have at least one capital letter`
    }

    else if (password.value.search(/[A-Z]/) >= 0) {
      capitals.classList.add('no-error')
capitals.classList.add('valid')
capitals.classList.remove('error')
capitals.classList.remove('invalid')
capitals.textContent = `Your password needs to have at least one capital letter`
    }

    if (password.value.search(/\d/) == -1) {
     
      numbers.classList.remove('no-error')
      numbers.classList.remove('valid')
      numbers.classList.add('error')
      numbers.classList.add('invalid')
      numbers.textContent = `Your password needs to have at least one number`
      }
  
      else if (password.value.search(/\d/) >= 0) {
        numbers.classList.add('no-error')
        numbers.classList.add('valid')
        numbers.classList.remove('error')
        numbers.classList.remove('invalid')
        numbers.textContent = `Your password needs to have at least one number`
      }

    let specialsMatch = /[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]/

    if(password.value.search(specialsMatch) >= 0) {
      specials.classList.add('no-error')
      specials.classList.add('valid')
      specials.classList.remove('error')
 
      specials.classList.remove('invalid')
specials.textContent = `Your password needs to contain at least one special character`
    }

    else if (password.value.search(specialsMatch) == -1) {
      specials.classList.remove('no-error')
      specials.classList.remove('valid')
      specials.classList.add('error')
      specials.classList.add('invalid')

      specials.textContent = `Your password needs to contain at least one special character`
    }


    if (password.validity.valueMissing) {
      passLength.classList.remove('no-error')
      passLength.classList.remove('valid')

      capitals.classList.remove('valid')
      capitals.classList.remove('invalid')
      capitals.classList.remove('error')
      capitals.classList.remove('no-error')

      numbers.classList.remove('valid')
      numbers.classList.remove('invalid')
      numbers.classList.remove('error')
      numbers.classList.remove('no-error')

      specials.classList.remove('valid')
      specials.classList.remove('invalid')
      specials.classList.remove('error')
      specials.classList.remove('no-error')
      passLength.classList.add('error')
      passLength.classList.add('invalid')
    passLength.textContent = `You must enter a password`
    capitals.textContent= ``
    specials.textContent= ``
    numbers.textContent= ``
    }

  }

