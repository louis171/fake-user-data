const functions = require("../functions");

const getDates = () => {
  let birthDate = functions.randomDate(
    new Date(1940, 0, 1),
    new Date(new Date().setFullYear(new Date().getFullYear() - 18))
  );
  const age = functions.getAge(birthDate);
  birthDate = birthDate.toLocaleDateString();

  let registerDate = functions.randomDate(new Date(2020, 0, 1), new Date());
  const registerAge = functions.getAge(registerDate);
  registerDate = registerDate.toLocaleDateString();
  return {
    birthDate: birthDate,
    age: age,
    registerDate: registerDate,
    registerAge: registerAge,
  };
};

module.exports = getDates;
