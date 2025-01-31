const config = require("./config");

module.exports.getVersion = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: config.version })
    };
};
