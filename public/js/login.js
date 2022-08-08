const loginFormHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector("#username");
    const passwordEl = document.querySelector("#password");
    fetch("/api/userRoutes", {
      method: "post",
      body: JSON.stringify({
        userName: usernameEl.value,
        password: passwordEl.value
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        document.location.replace("/gamePage");
      })
      .catch(err => console.log(err));
  };
  
  document
    .querySelector("#login")
    .addEventListener("submit", loginFormHandler);
  