const resolvers = {
    Query: {
        // User
        getUser: () => {
            console.log('Getting user');
            return null;
        },
    }
}

module.exports = resolvers;