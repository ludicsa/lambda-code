module.exports.baseHandler = (controller) => {
    return async (event) => {
        try {
            const response = await controller(event);
            return {
                statusCode: 200,
                body: JSON.stringify(response),
            };
        } catch (error) {
            return {
                statusCode: error.statusCode || 500,
                body: JSON.stringify({ message: error.message || 'Internal Server Error' }),
            };
        }
    };
};
