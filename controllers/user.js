const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function createToken(user, SECRET_KEY, expiresIn) {
    const { id, name, email, username } = user;
    const payload = {
        id,
        name,
        email,
        username,
    };
    return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

async function login(input) {
    const { email, password } = input;

    //check if user is in database
    const userFound = await User.findOne({ email: email.toLowerCase() });
    if (!userFound) throw new Error("Error in email or password");

    //check password
    const passwordSuccess = await bcrypt.compare(password, userFound.password);
    if (!passwordSuccess) throw new Error("Error in email or password");

    return {
        token: createToken(userFound, process.env.SECRET_KEY, "20 days"),
    };
}

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
    login,
};
