function redirectToLogin() {
    const signupForm = document.getElementById('signupForm');
    const username = signupForm.elements['username'].value;
    const password = signupForm.elements['password'].value;
  
    // Validate signup credentials (you can add more validation logic)
    if (username && password) {
      // Redirect to login page after successful signup
      window.location.href = 'login.html';
    } else {
      alert('Please fill in both username and password.');
    }
  }
  