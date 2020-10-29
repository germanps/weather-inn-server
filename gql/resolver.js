const User = require('../models/user')

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
        register: async (_, { input }) => {
            const newUser = input;
            newUser.email = newUser.email.toLowerCase()
            newUser.username = newUser.username.toLowerCase()

            const { email, username, password } = newUser;

            //check if email is in use
            const foundEmail = await User.findOne({ email })
            if (foundEmail) throw new Error('User in use')
            console.log(foundEmail)

            //check if username is in use
            const foundUsername = await User.findOne({ username })
            if (foundUsername) throw new Error('Username in use')
            console.log(foundUsername)

            //Encrypt password (TODO)

            try {
                //save user to database
                const user = new User(newUser)
                user.save()
                return user
            } catch (error) {
                console.log(error);
            }

            return null;
        }
    }
}

module.exports = resolvers;