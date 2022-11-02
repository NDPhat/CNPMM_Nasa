const express = require('express');
const planetsRouter = express.Router();

const { httpGetAllPlannets } = require('./planets.controller.js')

planetsRouter.get('/', httpGetAllPlannets)

module.exports = planetsRouter