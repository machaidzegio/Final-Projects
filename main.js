let min = parseInt(prompt("შეიყვანეთ რიცხვი"));
let max = parseInt(prompt("შეიყვანეთ საბოლოო რიცხვი"));
let counter = 1;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomNumber = getRandomNumber(min, max);
console.log(randomNumber);

function checkNumber() {
  let guessNumber = parseInt(document.getElementById("gNumber").value);

  if (guessNumber === randomNumber) {
    alert("სწორია " + counter + " მცდელობა.");
    counter++;
  } else if (guessNumber < randomNumber) {
    alert("უფრო მაღლა");
    counter++;
  } else if (guessNumber > randomNumber) {
    alert("უფრო დაბლა");
    counter++;
  }
}