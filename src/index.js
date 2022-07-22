const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const functions = require("./functions");
const types = require("./types");

const createRandomUser = (gender) => {
  const id = functions.getRandomInt(0, 9999);
  const guid = functions.guidGenerator();
  const name = types.getName(gender);
  const location = types.getAddress();
  const dates = types.getDates();
  const login = types.getLogin(name, dates);
  const phone = types.getPhone();
  const picture = types.getImage();
  return {
    id: id,
    guid: guid,
    user: {
      title: name.title,
      foreName: name.foreName,
      middleName: name.middleName,
      surName: name.surName,
      gender: name.gender,
      birthDate: dates.birthDate,
      age: dates.age,
    },
    address: {
      number: location.number,
      street: location.street,
      city: location.city,
      county: location.county,
      postcode: location.postcode,
    },
    login: {
      email: login.email,
      domain: login.domain,
      userName: login.userName,
      password: login.password,
      registerDate: dates.registerDate,
      registerAge: dates.registerAge,
    },
    phone: {
      mobile: phone.mobile,
      landline: phone.landline,
    },
    image: {
      imageSmall: picture.imageSmall,
      imageMed: picture.imageMed,
      imageLarge: picture.imageLarge,
    },
  };
};

app.post("/api/get-user:gender?", (req, res) => {
  res.status(200).json(createRandomUser(req.query.gender));
});

// Starts the server on EITHER the port listed in .env or 4000
app.listen(process.env.PORT || "4000", () => {
  console.log(`Server is running on port: ${process.env.PORT || "4000"}`);
});
