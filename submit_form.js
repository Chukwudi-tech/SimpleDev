document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();  // Prevent the form from auto submitting
  
      
      const firstname = document.getElementById('firstname').value;
      const lastname = document.getElementById('lastname').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const country = document.getElementById('country').value;
      const state = document.getElementById('state').value;
      const address = document.getElementById('address').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmpassword').value;
  
      const phonePattern = /^\d{10,}$/;
      if (!phonePattern.test(phone)) {
        alert('Invalid phone number. Please enter at least 10 digits.');
        return;
      }
  
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Invalid email address. Please enter a valid email.');
        return;
      }
  
      if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
      }
  
      alert('submitted');
  
      console.log({
        firstname, lastname, email, phone, country, state, address, password
      });
  
      form.reset();
    });
  });
  