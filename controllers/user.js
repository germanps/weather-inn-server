const User = require("../models/user");
const bcrypt = require("bcryptjs");

async function register(input) {
    const newUser = input;
    newUser.email = newUser.email.toLowerCase()
    newUser.username = newUser.username.toLowerCase()

    const { email, username, password } = newUser;

    //check if email is in use
    const foundEmail = await User.findOne({ email })
    if (foundEmail) throw new Error('User in use')

    //check if username is in use
    const foundUsername = await User.findOne({ username })
    if (foundUsername) throw new Error('Username in use')

    //Encrypt password
    const salt = await bcrypt.genSaltSync(10);
    newUser.password = await bcrypt.hash(password, salt);

    try {
        //save user to database
        const user = new User(newUser)
        user.save()
        return user
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    register,
};
