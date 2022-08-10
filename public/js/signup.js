const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-input-signup').value.trim();
  const password = document.querySelector('#password-input-signup').value.trim();


  if (username && password) {
    console.log('please work')
    const response = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify({ userName:username, password:password }),
      headers: { 'Content-Type': 'application/json' },
    });
console.log(response);
    if (response.ok) {
      console.log('test')
      document.location.replace('/gamePage');
    } else {
      alert(response.statusText);
    }
  }
};
  
  document
    .querySelector("#signup-form")
    .addEventListener("click", signupFormHandler);
  