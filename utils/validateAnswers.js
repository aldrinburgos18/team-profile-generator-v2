function validateText(answer) {
  if (answer) {
    return true;
  } else {
    console.log(`\n Please type in a valid answer!`);
    return false;
  }
}

module.exports = validateText;
