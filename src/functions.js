const fs = require("fs");

// Returns random binary number (0 or 1)
const getRng = () => {
  return Math.round(Math.random());
};

// returns random int in range (inclusive)
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Gets a random line in a txt file
const getRandomLine = (filename) => {
  const data = fs.readFileSync(filename, "utf8");
  // data.toString() transforms line to text
  // .replace(/\r/g, "") removes \r line endings
  // .split("\n") breaks lines on \n to create array
  const lines = data.toString().replace(/\r/g, "").split("\n");
  return lines[Math.floor(Math.random() * lines.length)];
};

// Create pseudo random ID/password
// e.g. Jh4wP2YEA3cd
const makeId = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789,./;'#[]-=)(*&^%$£!{}@:?><";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

// Random date in range
const randomDate = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

// Finds age in years between 2 dates
const getAge = (birthDate) =>
  Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

// Simple GUID generator
// e.g. 9e0b2d5d-741f-7271-9faf-ab70edae24bd
const guidGenerator = () => {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
};

const functions = {
  getRng: getRng,
  getRandomInt: getRandomInt,
  getRandomLine: getRandomLine,
  makeId: makeId,
  randomDate: randomDate,
  getAge: getAge,
  guidGenerator: guidGenerator
};

module.exports = functions;
