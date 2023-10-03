function validateEmail() {

    var email = document.getElementById('email').value;
    var errorMessage = '';
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    

    if (!emailRegex.test(email)) {
      errorMessage = 'Please enter a valid email address.';
    }

    var errorElement = document.getElementById('error');
    errorElement.innerHTML = errorMessage;


    if (errorMessage !== '') {
      event.preventDefault();
    }
  }

  
  var form = document.getElementById('emailForm');
  form.addEventListener('submit', validateEmail);