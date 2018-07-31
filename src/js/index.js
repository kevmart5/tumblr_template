window.onload = (function() {
  let btnSignIn = this.document.querySelector("#btnSignIn");
  let userEmail = document.querySelector("#userEmail");
  let userPassword = document.querySelector("#userPassword");
  
  btnSignIn.addEventListener("click", function() {
    Login.validateCredentials(userEmail.value, userPassword.value);
  })
});

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
      var errorMessage = document.querySelector("#feedbackMessageError");
      errorMessage.classList.remove('feedback-alert-hide');
      errorMessage.classList.add('feedback-alert-show');
    }
  };

  let validateCredentials = function (pUserEmail, pPassword) {
    _validate(pUserEmail, pPassword);
  };
  
  return {
    validateCredentials: validateCredentials
  };

})();




