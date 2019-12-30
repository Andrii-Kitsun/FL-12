let password;
let newPassword;
let flag = false;
const shortEmail = 5;
const shortPassword = 6;

//Check email input
const email = prompt('Please enter your email:');
switch (true) {
  case !email:
    alert('Canceled');
    break;

  case email.length <= shortEmail:
    alert('I don\'t know any emails having name length less than 5 symbols');
    break;

  case email === 'user@gmail.com' || email === 'admin@gmail.com':
    password = prompt('Please enter your password:');
    break;

  default:
    alert('I don\'t know you');
    break;
}

//Check password of exist email
switch (password) {
  case undefined:
    break;

  case '':
  case null:
    alert('Canceled in check password of exist email');
    break;

  case email === 'user@gmail.com' && 'UserPass':
  case email === 'admin@gmail.com' && 'AdminPass':
    if (confirm('Do you want to change your password')) {
      password = prompt('Please enter your OLD password:');
      flag = true;
      break;
    } else {
      alert('You have failed the change');
    }
    break;

  default:
    alert('Wrong password');
    break;
}

//Check old password and change
switch (password) {
  case undefined:
  case flag === false && password:
    break;

  case '':
  case null:
    alert('Canceled in check old pass');
    break;

  case email === 'user@gmail.com' && 'UserPass':
  case email === 'admin@gmail.com' && 'AdminPass':
    newPassword = prompt('Please enter your NEW password:');
    break;

  default:
    alert('Wrong old password');
    break;
}

//Check new password
switch (true) {
  case newPassword === undefined:
    break;

  case !newPassword:
    alert('Canceled');
    break;

  case newPassword.length <= shortPassword:
    alert('It’s too short password. Sorry.');
    break;

  default:
    if (prompt('Please enter your NEW password again:') === newPassword) {
      alert('You have successfully changed your password.');
    } else {
      alert('You wrote the wrong password.');
    }
    break;
}