export async function postCreateUser(formObject) {
  let username = formObject.username;
  let password = formObject.password;

  const res = await fetch("http://localhost:3000/api/v1/auth/register", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "username": username,
          "password": password
      })
  })
  if(res.ok){
    setTimeout(function(){ // setTimeout acts as a timer before the page redirects to another page
        window.location.replace("index.html"); // redirects to index.html or the login page
    }, 3000);
      return true;
  } else {
      return false;
  }
}

export async function postLogIn() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  const res = await fetch('http://localhost:3000/api/v1/auth/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "username": username,
          "password": password
      })
  })
  if(res.ok){
      console.log('successful')
      const userToken = await res.text();
      console.log(`User token: ${userToken}`);
      localStorage.setItem("token", userToken)
      console.log(localStorage)
    
      setTimeout(function(){ // setTimeout acts as a timer before the page redirects to another page
        window.location.replace("signup.html"); // redirects to the home page
    }, 3000);
  } else {
      console.log('login fails')
  }
}
