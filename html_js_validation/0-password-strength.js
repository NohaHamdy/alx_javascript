function validatePassword() {

    var password = document.getElementById('password').value;
    var specialCharRegex = /[!@#$%^&*]/;
    var lowercaseRegex = /[a-z]/;
    var lengthRegex = /.{8,}/;
    var uppercaseRegex = /[A-Z]/;
    var digitRegex = /[0-9]/;
    var errorMessage = '';
  
    if (!lengthRegex.test(password)) {
      errorMessage += 'Password must be at least 8 characters long';
    }
  

    if (!uppercaseRegex.test(password)) {
      errorMessage += 'Password must contain at least one uppercase letter.';
    }
  

    if (!lowercaseRegex.test(password)) {
      errorMessage += 'Password must contain at least one lowercase letter';
    }
  

    if (!digitRegex.test(password)) {
      errorMessage += 'Password must contain at least one numeric digit';
    }
  

    if (!specialCharRegex.test(password)) {
      errorMessage +=
        'Password must contain at least one special character (!@#$%^&*)';
    }
  

    var errorElement = document.getElementById('error');
    errorElement.innerHTML = errorMessage;
  
    if (errorMessage !== '') {
      event.preventDefault();
    }
    
  }
  
  var form = document.getElementById('passwordForm');
  form.addEventListener('submit', validatePassword);