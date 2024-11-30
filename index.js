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
let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введіть число:");

  if (input === null) {
    break;
  }

  const num = Number(input);
  if (isNaN(num)) {
    alert("Було введено не число, спробуйте ще раз");
  } else {
    numbers.push(num);
  }
}

for (const num of numbers) {
  total += num;
}

console.log(`Загальна сума чисел дорівнює ${total}`);

//task 7
//крок 1 перевірка валідності логіна
function isLoginValid(login) {
  return login.length >= 4 && login.length <= 16;
}

//крок 2 Функція для перевірки унікальності логіна
function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

//крок 3 Основна функція для додавання логіна
function addLogin(allLogins, login) {
  // Перевірка на валідність логіна
  if (!isLoginValid(login)) {
    return "Помилка! Логін повинен бути від 4 до 16 символів";
  }
  // Перевірка на унікальність логіна
  if (!isLoginUnique(allLogins, login)) {
    return "Такий логін уже використовується!";
  }
  // Додавання логіна в масив, якщо він валідний та унікальний
  allLogins.push(login);
  return "Логін успішно доданий!";
}

let logins = ["craftMUA", "admin", "guest"];

console.log(addLogin(logins, "Tetiana"));
console.log(addLogin(logins, "livedied"));
console.log(addLogin(logins, "admin"));
console.log(addLogin(logins, "ggggggggggYouDied"));
