const resolvers = {
    Query: {
        // User
        getUser: () => {
            console.log('Getting user');
            return null;
        },
    },

    Mutation: {
        //User
        register: (_, { input }) => {
            console.log(input);
            return null;
        }
    }
}

module.exports = resolvers;