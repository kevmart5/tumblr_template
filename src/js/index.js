window.onload = (function() {
  var btnSignIn = this.document.querySelector("#btnSignIn");
  var userEmail = document.querySelector("#userEmail");
  var userPassword = document.querySelector("#userPassword");
  validateInputFields(userEmail, userPassword);
  

  btnSignIn.addEventListener("click", function() {
    Login.validateCredentials(userEmail.value, userPassword.value);
  })
});

var validateInputFields = function(pUserEmail, pUserPassword) {
  console.log(typeof userEmail);
}





var Login = (function () {
  var _email = "mkevin755@gmail.com";
  var _password = "123";

  var _validate = function (userEmail, password) {
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

  var validateCredentials = function (pUserEmail, pPassword) {
    _validate(pUserEmail, pPassword);
  };
  
  return {
    validateCredentials: validateCredentials
  };

})();




