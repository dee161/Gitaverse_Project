const express = require("express");
const app = express();

const mongoose = require("./db/mongoose");

const bodyParser = require("body-parser");

const { Register, Appointment } = require("./db/models/server");

const zipcodes = require("zipcodes");

// const port = process.env.PORT || 5000;
const port = 5000;

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.append("Access-Control-Allow-Methods", "DELETE, PATCH");
  next();
});

const request = require("request");

app.get("/register", (req, res) => {
  Register.find().then((users) => {
    res.send(users);
  });
});

app.post("/postRegister", (req, res) => {
  let name = req.body.name;
  let phoneNumber = req.body.phoneNumber;
  let email = req.body.email;
  let gender = req.body.gender;
  let age = req.body.age;
  let pinCode = req.body.pinCode;
  let designation = req.body.currentStatus;
  let referralSource = req.body.referralSource;
  let course = req.body.course;

  let options = {
    url: `https://app.zipcodebase.com/api/v1/search?apikey=f9012c20-9cd1-11ed-bb5d-f3f864e8b81e&codes=${pinCode}`,
  };

  function callback(error, response, body, request) {
    if (!error && response.statusCode == 200) {
      let obj = JSON.parse(body);
      let city = obj.results[`${pinCode}`][0].city;
      let state = obj.results[`${pinCode}`][0].state;
      let countryCode = obj.results[`${pinCode}`][0].country_code;

      let newUser = new Register({
        name: name,
        email: email,
        age: age,
        phoneNumber: phoneNumber,
        gender: gender,
        pinCode: pinCode,
        city: city,
        state: state,
        countryCode: countryCode,
        province: obj.results[`${pinCode}`][0].province,
        designation: designation,
        referralSource: referralSource,
        course: course,
      });
      
      newUser.save().then((result) => {
        res.send(result);
      });
    }
  }

  request(options, callback);
});

app.get("/appointment", (req, res) => {
  Appointment.find().then((appointment) => {
    res.send(appointment);
  });
});

app.get("/", (req, res) => {
  res.send("apis working");
});

app.post("/postAppointment", (req, res) => {
  let name = req.body.name;
  let phoneNumber = req.body.phoneNumber;
  let pinCode = req.body.pinCode;

  let options = {
    url: `https://app.zipcodebase.com/api/v1/search?apikey=f9012c20-9cd1-11ed-bb5d-f3f864e8b81e&codes=${pinCode}`,
  };

  function callback(error, response, body, request) {
    if (!error && response.statusCode == 200) {
      let obj = JSON.parse(body);
      let city = obj.results[`${pinCode}`][0].city;
      let state = obj.results[`${pinCode}`][0].state;
      let countryCode = obj.results[`${pinCode}`][0].country_code;

      let newAppointment = new Appointment({
        name: name,
        phoneNumber: phoneNumber,
        pinCode: pinCode,
        city: city,
        state: state,
        countryCode: countryCode,
        province: obj.results[`${pinCode}`][0].province,
      });
      
      newAppointment.save().then((result) => {
        res.send(result);
      });
    }
  }

  request(options, callback);
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
