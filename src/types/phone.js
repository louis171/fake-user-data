const functions = require("../functions");

const getPhone = () => {
  let mobile = `07700900${functions
    .getRandomInt(0, 999)
    .toString()
    .padStart(4, "0")}`;
  let landline = `${functions.getRandomLine(
    "./src/data/phone/landline.txt"
  )}4960${functions.getRandomInt(0, 999).toString().padStart(4, "0")}`;
  return {
    mobile: mobile,
    landline: landline,
  };
};

module.exports = getPhone;
