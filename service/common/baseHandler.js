module.exports.baseHandler = (controller) => {
    return async (event) => {
        try {
            return await controller[event.requestContext.httpMethod](event);
        } catch (error) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: error.message }),
            };
        }
    };
};
