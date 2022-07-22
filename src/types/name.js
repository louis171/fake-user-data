const functions = require("../functions");

const getGender = () => {
  return functions.getRng() === 0 ? "male" : "female";
};

const getName = (gender) => {
  // generates random binary number (0 or 1)
  const rng = Math.round(Math.random());

  let title;
  let foreName;
  let middleName;
  let surName;
  let retGender;

  if (gender !== undefined && gender !== "") {
    foreName = functions.getRandomLine(`./src/data/person/${gender}_first.txt`);
    middleName =
      rng === 1
        ? functions.getRandomLine(`./src/data/person/${gender}_first.txt`)
        : "";
    title =
      functions.getRng() === 1
        ? functions.getRandomLine(`./src/data/person/${gender}_title.txt`)
        : "";
    retGender = gender;
  } else {
    const rngGender = getGender();
    foreName = functions.getRandomLine(
      `./src/data/person/${rngGender}_first.txt`
    );
    middleName =
      rng === 1
        ? functions.getRandomLine(`./src/data/person/${rngGender}_first.txt`)
        : "";
    title =
      functions.getRng() === 1
        ? functions.getRandomLine(`./src/data/person/${rngGender}_title.txt`)
        : "";
    retGender = rngGender;
  }

  surName = functions.getRandomLine("./src/data/person/last.txt");

  return {
    title: title,
    foreName: foreName,
    middleName: middleName,
    surName: surName,
    gender: retGender,
  };
};

module.exports = getName;
