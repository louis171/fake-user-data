const functions = require("../functions");

const getAddress = () => {
    let street;
  
    const number = functions.getRandomInt(1, 300);
    const prefix = functions.getRandomLine(
      "./src/data/location/street_prefix.txt"
    );
    const suffix = functions.getRandomLine(
      "./src/data/location/street_suffix.txt"
    );
    street = `${prefix} ${suffix}`;
    const city = functions.getRandomLine("./src/data/location/city.txt");
    const county = functions.getRandomLine("./src/data/location/county.txt");
    let letters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    const postcode = `${
      letters[functions.getRandomInt(0, 25)]
    }${functions.getRandomInt(1, 9)}${
      letters[functions.getRandomInt(0, 25)]
    } ${functions.getRandomInt(1, 9)}${
      letters[functions.getRandomInt(0, 25)]
    }${functions.getRandomInt(1, 9)}`;
  
    return {
      number: number,
      street: street,
      city: city,
      county: county,
      postcode: postcode,
    };
  };

  module.exports = getAddress