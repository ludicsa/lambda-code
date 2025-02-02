const path = require('path');
const { baseHandler } = require('../../common/baseHandler');

const controllerName = process.env.client;
const filePath = path.join(__dirname, `controllers/${controllerName}/index.js`);

let controller = require(filePath);
controller[controllerName] = baseHandler(controller);

module.exports = {
  ...controller,
};
