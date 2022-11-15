const signupFormHandler = async (event) => {
    event.preventDefault();
    console.log('signup clicked');
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    console.log(name + email + password);
  
    if (name && email && password) {
      console.log(name + email + password);
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/profile');
      } else {
        console.log('look here');
        alert(response.statusText);
      }
    }
  };
  

document.querySelector('.signup-form').addEventListener('click', signupFormHandler);