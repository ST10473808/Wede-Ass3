//ensure Dom content is loaded first
window.addEventListener("DOMContentLoaded", () => {
const form = document.getElementById("contactform");

form.addEventListener("submit", function(e) {
    e.preventDefault();

const Name = document.getElementById("Name").value.trim();
const Email = document.getElementById("Email").value.trim();
const Contact = document.getElementById("Contact").value.trim();
const Message = document.getElementById("Message").value.trim();

  document.getElementById('nameerror').textContent = '';
  document.getElementById('emailerror').textContent = '';
  document.getElementById('messageerror').textContent = '';
  document.getElementById('contacterror').textContent = '';

  let valid = true;

  // name validation
  if (Name === '') {
    document.getElementById('nameerror').textContent = 'Please enter your name';
    valid = false;
  }

  // email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (Email === '') {
    document.getElementById('emailerror').textContent = 'Please enter your email';
    valid = false;
  } else if (!emailPattern.test(Email)) {
    document.getElementById('emailerror').textContent = 'Please enter a valid email';
    valid = false;
  }

  //contact number validation
  if(Contact === ''){
    document.getElementById('contacterror').textContent = 'Please enter a valid contact number';
    valid = false;
    }
  // message validation
  if (Message === '') {
    document.getElementById('messageerror').textContent = 'Please enter your message';
    valid = false;
  }

  // when all fields are valid a mailto link is created
  if (valid) {
    const mailtoLink = `mailto:skybrightservices@gmail.com?subject=Contact from ${encodeURIComponent(Name)}&body=${encodeURIComponent(
  `Message: ${Message}\n\nContact number: ${Contact}\nFrom: ${Name} (${Email})`
)}`;

     window.location.href = mailtoLink;
  }
});
});

// https://www.youtube.com/watch?v=rMK1eGi5k7I
// zahra bulbulia
// w3schools