const form = document.getElementById('form');
const email = document.getElementById('email');
const errorIcon = document.getElementById('error-icon');
const errorText = document.getElementById('error-text');

email.focus();

// Show Error Message
const showError = () => {
  errorIcon.style.display = 'inline-block';
  errorText.style.display = 'inline-block';

  email.classList.add('error');
};

// Show Successes Message
const showSuccess = () => {
  errorIcon.style.display = 'none';
  errorText.style.display = 'none';

  email.classList.remove('error');
};

// Check is email valid function
const checkEmail = (input) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(input.value)) {
    showError(input);
  } else {
    showSuccess(input);
    email.value = '';
  }
};

// Event Listener
form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkEmail(email);
});
