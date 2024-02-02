function redirectToSecuredPage() {
    const loginForm = document.getElementById('loginForm');
    const username = loginForm.elements['username'].value;
    const password = loginForm.elements['password'].value;
  
    // Validate login credentials (you can add more validation logic)
    if (username && password) {
      // Redirect to secured page after successful login
      window.location.href = 'secured.html';
    } else {
      alert('Invalid username or password.');
    }
  }
  