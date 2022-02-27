function validateText(answer) {
  if (answer) {
    return true;
  } else {
    console.log(`\n Please type in a valid answer!`);
    return false;
  }
}

function validateNum(answer) {
  if (isNaN(answer) || !answer) {
    console.log(`\n Please enter a number!`);
    return false;
  } else {
    console.log(answer);
    return true;
  }
}

function validateEmail(answer) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (answer.match(regex)) {
    return true;
  } else {
    console.log(`\n Please enter a valid e-mail address.`);
    return false;
  }
}

module.exports = { validateText, validateNum, validateEmail };
