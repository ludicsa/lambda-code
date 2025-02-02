module.exports = {
    helloWorld: async (event) => {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: `Hello from ${process.env.client}!` }),
        };
    },
};
