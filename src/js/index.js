document.addEventListener("DOMContentLoaded", function(e){
  addEventBtnLogIn();
})

let addEventBtnLogIn = function () {
  console.log("DOM fully created");
  let btnSignIn = this.document.querySelector("#btnSignIn");
  
  btnSignIn.addEventListener("click", function() {
    Login.validateCredentials(getInputValues.userEmail(), getInputValues.userPassword());
  })
}

let getInputValues = (function () {
  let _getEmailInputValue = function () {
    let _userEmail = document.querySelector("#userEmail");
    return _userEmail.value;
  }

  let _getPasswordInputValue = function () {
    let _userPassword = document.querySelector("#userPassword");
    return _userPassword.value;
  }

  let emailValue = function () {
    return _getEmailInputValue();
  }

  let passwordValue = function () {
    return _getPasswordInputValue;
  }

  return {
    userEmail: emailValue,
    userPassword: passwordValue
  }
})();

let Login = (function () {
  let _email = "mkevin755@gmail.com";
  let _password = "123";

  let _validate = function (userEmail, password) {
    if(_email === userEmail && _password === password) {
      var errorMessage = document.querySelector("#feedbackMessageError");
      window.location.href = "../index.html";
      errorMessage.classList.add('feedback-alert-hide');
    }else{
      console.log("You shall not pass!!");
      let errorMessage = document.querySelector("#feedbackMessageError");
      errorMessage.classList.remove('feedback-alert-hide');
      setTimeout(() => {
        errorMessage.classList.add('feedback-alert-show');
      }, 3000);
    }
  };

  let _emptyInputsError = function () {
    let emptyInputs = document.querySelector('#feedbackEmptyInputs');
    emptyInputs.classList.remove('feedback-alert-hide');
    setTimeout(() => {
      emptyInputs.classList.add('feedback-alert-fadeOut');
      emptyInputs.classList.add('feedback-alert-hide');
    }, 5000);
    
  }

  let _checkEmptyValues = function (email, password) {
    if(email === '' || password === '') {
      _emptyInputsError();
    }else {
      _validate(email, password);
    }
  }

  let validateCredentials = function (pUserEmail, pPassword) {
    _checkEmptyValues(pUserEmail, pPassword);
  };
  
  return {
    validateCredentials: validateCredentials
  };

})();




