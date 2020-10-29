const userController = require("../controllers/user");

const resolvers = {
    Query: {
        // User
        getUser: () => {
            console.log('Getting user')
            return null;
        },
    },

    Mutation: {
        //User
        register: (_, { input }) => userController.register(input),
    }
}

module.exports = resolvers;