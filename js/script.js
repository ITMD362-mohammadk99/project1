document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('signup-form');
  const submitBtn = document.getElementById('submit-btn');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (name && email && password) {
      alert('Hello, ' + name + ' Thank you for signing up!');
    } else {
      alert('Please fill in all fields');
    }
  });

  submitBtn.addEventListener('click', function() {
    submitBtn.style.backgroundColor = '#45a049'; 
  });
});

