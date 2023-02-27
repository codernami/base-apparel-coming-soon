const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
  e.preventDefault();
  const emailVal = email.value;

  if(validate_email(emailVal)) {
    form.classList.add('error');
  }/* else {
    form.classList.remove('error');
  } */

});

function validate_email( email ) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(String(email).toLowerCase());
}
