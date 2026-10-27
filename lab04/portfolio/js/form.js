// Bootstrap form validation: show the red/green feedback after the first submit
const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // demo form – nothing is sent
  if (form.checkValidity()) {
    alert('Thank you! (This is a demo form – nothing was sent.)');
    form.reset();
    form.classList.remove('was-validated');
  } else {
    form.classList.add('was-validated');
  }
});

form.addEventListener('reset', () => {
  form.classList.remove('was-validated');
});
