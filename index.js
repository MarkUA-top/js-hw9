//task 1
function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}
logItems(["Mango", "Poly", "Ajax"]);

//task 2
function cEP(message, pricePerWord) {
  const words = message.split(" ");
  return words.length * pricePerWord;
}
const price = cEP("Hello js", 7);
console.log(price);

//task 3
function findLongestWord(string) {
  const words = string.split(" ");
  let longestWord = "";
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findLongestWord("Привіт я Марк учень Тетянни"));

//task 4
function formatString(string) {
  if (string.length <= 40) {
    return string;
  }
  return string.slice(0, 40) + "...";
}
console.log(formatString("Привіт я Марк пишу JavaScript вчусь в GoIteans"));

//task 5
function checkForSpam(message) {
  const lowerMessage = message.toLowerCase();
  return lowerMessage.includes("spam") || lowerMessage.includes("sale");
}

console.log(checkForSpam("Hi i am sale computer"));
console.log(checkForSpam("Hi Mark"));

//task 6
function calculateSum(numbers = []) {
  let input = prompt("Hi say num");

  if (input === null) {
    console.log(
      numbers.length
        ? `all number ${numbers.reduce((sum, num) => sum + num, 0)}`
        : "U dont texy num."
    );
    return;
  }

  const number = parseFloat(input);
  if (input.trim() !== "" && input === String(number)) {
    numbers.push(number);
  } else {
    alert("U dont text num u text text text num pls");
  }

  calculateSum(numbers);
}

calculateSum();

//task 7
function addLogin(allLogins, login) {
  if (login.length < 4 || login.length > 16) {
    return "Помилка! Логін повинен бути від 4 до 16 символів";
  }

  if (allLogins.includes(login)) {
    return "Такий логін уже використовується!";
  }

  allLogins.push(login);
  return "Логін успішно доданий!";
}

let logins = ["craftMUA", "admin", "guest"];

console.log(addLogin(logins, "Tetiana"));
console.log(addLogin(logins, "livedied"));
console.log(addLogin(logins, "admin"));
console.log(addLogin(logins, "ggggggggggYouDied"));
