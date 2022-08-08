const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector('#users').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ user_name:username,password: password }),
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
      console.log('logged in')
      // If successful, redirect the browser to the profile page
      document.location.replace('/gamePage');
    } else {
      alert(response.statusText);
    }
  }
};
document.getElementById('login').addEventListener('click', loginFormHandler);