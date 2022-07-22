const functions = require("../functions");
const { faker } = require("@faker-js/faker");

const getLogin = (nameObj, dateObj) => {
  let email;
  let emailNumbers;
  let emailDelimiter;
  let domain = faker.internet.domainName();

  emailNumbers =
    functions.getRng() === 0 ? dateObj.birthDate.split("/")[2].slice(-2) : "";
  emailDelimiter = functions.getRng() === 1 ? "." : "_";

  email = `${nameObj.foreName}${emailDelimiter}${nameObj.surName}${emailNumbers}@${domain}`;

  const userName = email.split("@")[0];
  const password = functions.makeId(12);

  return {
    email: email,
    domain: domain,
    userName: userName,
    password: password,
  };
};

module.exports = getLogin;
