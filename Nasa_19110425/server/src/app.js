const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");

const request = require("supertest");
const assert = require("assert");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("combined"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use("/planets", planetsRouter);
app.use("/launches", launchesRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

// request(app)
//   .get("/planets")
//   .expect(200)
//   .end(function (err, res) {
//     if (err) throw err;
//   });

// request(app)
//   .get("/launches")
//   .expect(200)
//   .end(function (err, res) {
//     if (err) throw err;
//   });

// request(app)
//   .post("/launches")
//   .send({
//     mission: "ZTM155",
//     rocket: "ZTM Experimental IS1",
//     target: "Kepler-186 f",
//     launchDate: "January 17,2030",
//   })
//   .set("Accept", "application/json")
//   .expect("Content-Type", /json/)
//   .expect(201)
//   .end(function (err, res) {
//     if (err) throw err;
//   });

// request(app)
//   .delete(`/launches/${101}`)
//   .expect(200)
//   .end(function (err, res) {
//     if (err) throw err;
//   });

module.exports = app;

