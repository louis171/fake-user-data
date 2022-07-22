const getName = require("./types/name");
const getAddress = require("./types/location");
const getDates = require("./types/dates");
const getLogin = require("./types/login");
const getPhone = require("./types/phone");
const getImage = require("./types/image");

const types = {
  getName: getName,
  getAddress: getAddress,
  getDates: getDates,
  getLogin: getLogin,
  getPhone: getPhone,
  getImage: getImage,
};

module.exports = types;
