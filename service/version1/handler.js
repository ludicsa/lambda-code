const path = require('path');
const { baseHandler } = require('../common/baseHandler');

const controllerName = process.env.client;
const filePath = path.join(__dirname, `controllers/${controllerName}/index.js`);

let controller;
try {
  controller = require(filePath);
} catch (error) {
  console.error(`Error loading function: ${controllerName}`, error);
  throw new Error(`Function ${controllerName} not found`);
}

controller[controllerName] = baseHandler(controller);

module.exports = {
  ...controller,
};
