const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSearchSchema = Schema({
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User"
    },
    label: {
        type: String,
        required: true,
        unique: true,
    },
    codprop: {
        type: String,
        required: true,
        unique: true,
    },
    idprob: {
        type: String,
        required: true,
        unique: true,
    },
})

module.exports = mongoose.model("UserSearch", UserSearchSchema)